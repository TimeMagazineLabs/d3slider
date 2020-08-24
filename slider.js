import { select, event, mouse } from "d3-selection";
import { range } from "d3-array";
import { scaleLinear } from "d3-scale";
import { axisBottom } from "d3-axis";
import { drag } from "d3-drag";
import elasticSVG from 'elastic-svg';

require("./slider.scss");

const images = require("./img/images.json");

function d3slider(container, myOpts) {
	let value, element; // current value of slider at all times

	// build slider
	if (!container) {
		console.log("You must supply slider a container as the first argument to d3slider.");
		return null;
	}

	element = select(container).append("div").classed("d3slider", true);

	// var svg = element.append('svg');
	// svg
	// 	.attr('width', opts.width)
	// 	.attr('height', opts.height)

	const opts = {
		type: 'linear',
		// domain: [0, 1],
		// full_width: element.node().clientWidth,
		// full_height: element.node().clientHeight,
		margin: { left: 20, right: 20, top: 25, bottom: 0 }
	};

	// manual deep clone
	if (myOpts.hasOwnProperty("margin")) {
		Object.assign(opts.margin, myOpts.margin);
		delete myOpts.margin;
	}

	Object.assign(opts, myOpts);

	if (opts.playButton && myOpts.hasOwnProperty("margin") && myOpts.margin.hasOwnProperty("left")) {
		opts.margin.left += 40;
	}

	opts.height = opts.height || 60;

	let b = elasticSVG(container + " .d3slider", {
		height: opts.height
	});

	let svg = select(b.svg);

	opts.domain = opts.domain || [0, 100];
	opts.tickInterval = opts.tickInterval || 10;
	opts.thumbnailStyle = opts.thumbnailStyle || "circle";

	// default to 25 steps if not specified
	opts.playInterval = opts.playInterval || (opts.interval ? opts.interval : (opts.domain[1] - opts.domain[0]) / 20);
	opts.startValue = opts.startValue || opts.domain[0];
	opts.value  = opts.hasOwnProperty("value")? opts.value : opts.domain[0];
	opts.speed = opts.speed || 1000;
	opts.loop = typeof opts.loop == "undefined" ? true: opts.loop;
	opts.locked = opts.locked || false;
	opts.color = opts.color || "#CC0000";
	opts.snapToTick = opts.snapToTick || false;
	opts.buttonColor = opts.buttonColor ? opts.buttonColor : "gray";
	opts.size = opts.size || 12;

	if (opts.buttonColor == "white") {
		images.play = images.play_white;
		images.stop = images.stop_white;
	} else if (opts.buttonColor == "hollow") {
		images.play = images.play_hollow;
		images.stop = images.pause_hollow;
	} else {
		images.play = images.play_gray;
		images.stop = images.stop_gray;
	}

	if (opts.textBox) {
		opts.margin.top += 20;
		opts.height += 20;
	}

	if (opts.locked) {
		element.classed("locked", true);
	}

	value = opts.value;

	// put something in here so that we don't collapse to an 0x0 div
	// element.html("&nbsp;");

	opts.width = opts.width || element.node().offsetWidth; //parseInt(element.style('width'), 10);

	// element.html("");

	if (opts.playButton){
		var controls = element.append("div").attr("id", "control-panel")
		controls.append("img")
			.attr("id", "playButton")
			.attr("class", "playButton")
			.attr("src", images.play);
	}

	var data_layer = svg.append("g").attr("class", "data_layer").attr("transform", "translate(" + opts.margin.left + "," + opts.margin.top + ")");
	var axes_layer = svg.append("g").attr("transform", "translate(" + opts.margin.left + "," + opts.margin.top + ")");
	var thumb_layer = svg.append("g").attr("class", "thumbnail_layer").attr("transform", "translate(" + opts.margin.left + "," + opts.margin.top + ")");

	var xAxis = axes_layer.append("g").attr("class", "slider-axis");
	var xScale = scaleLinear().domain(opts.domain);

	// Make adjustments to range and position of axis if play button
	xScale.range([0, opts.width - opts.margin.right - opts.margin.left ]);

	// axis
	var x = axisBottom().scale(xScale);

	var ticks = opts.tickValues || range(opts.domain[0], opts.domain[1] + 1, opts.tickInterval);

	x.tickValues(ticks);
	x.tickSize(opts.hasOwnProperty("tickSize") ? opts.tickSize : 12, 0);
	x.ticks(3);

	x.tickFormat(function(d, i) {
		return opts.tickFormat? opts.tickFormat(d) : d;
	});

	xAxis.call(x)

	// see below
	var previous_snap = null;

	// fire when we've moved the thumbnail
	function clickedOrDragged() {
		if (opts.locked) {
			return;
		}

		let coords = mouse(svg.select(".domain").node());
		let dx = Math.min(x.scale().range()[1], Math.max(x.scale().range()[0], coords[0]));

		value = x.scale().invert(dx);

		// if snapToTick, round the value to the nearest tick
		if (opts.snapToTick) {
			var distance = Infinity,
				tick = null;

			for (var t = 0; t < ticks.length; t += 1) {
				var d = Math.abs(value - ticks[t]);
				if (d < distance) {
					distance = d;
					tick = ticks[t];
				}
			}

			value = tick;
			var snap = xScale(value);			
		} else {
			// round the value to the nearest interval
			value = opts.playInterval ? Math.max(opts.domain[0], Math.round(value / opts.playInterval) * opts.playInterval) : Math.max(opts.domain[0], value);
			var snap = xScale(value);
		}

		if (opts.textBox) {
			element.select(".arrow_box_container").style("left", (opts.margin.left + xScale(value) + (opts.playButton? 0 : 0)) + "px");
			element.select(".arrow_box").html(opts.textBoxFormat ? opts.textBoxFormat(value) : (opts.format? opts.format(value) : value));
		}

		// we only want to fire the callback if we're moving to a new tick
		if (snap !== previous_snap) {
			select(container + " div.d3slider > svg > .thumbnail_layer > #thumb").attr("transform", "translate(" + xScale(value) + ",0)");
			opts.onDrag && opts.onDrag(value, true);
			previous_snap = snap;
		}

		if (value && value >= opts.domain[1]) {
			if (opts.onFinish) {
				opts.onFinish();
			}			
		}

		// cancel playing when manually moved
		if (playing) {
			playing = false;
			select(container + " #playButton").attr("src", images.play);
			clearTimeout(timer);
			if (opts.onStop) {
				opts.onStop();
			}
		}
	}

	// events
	let dragged = drag().on("drag", function() {
		clickedOrDragged();
	});

	let thumb = thumb_layer.append("g")
		.attr("class", "thumb")
		.attr("id", "thumb")
		.attr("transform", "translate(" + x.scale().range()[0] + ",0)");

	if (opts.thumbnailStyle == "bar") {
		thumb.append("line")
			.attr("x1", 1)
			.attr("x2", 1)
			.attr("y1", 0)
			.attr("y2", -opts.height + 40);

		thumb.append("image")
			.attr("href", images.handle)
			.attr("width", 27)
			.attr("height", 37)
			.attr("x", -13)
			.attr("y", -opts.height + 22);

	} else {
		thumb.append("circle")
			.attr("r", opts.size)
			.attr("cx", 0)
			.attr("cy", 0)
			.style("fill", opts.color);
	}

	if (opts.textBox) {
		element
			.append("div")
			.attr("class", "arrow_box_container")
			.style("left", (opts.margin.left + xScale(opts.value) + (opts.playButton? 0 : 0)) + "px")
			.style("top", (opts.margin.top - 40) + "px")
			.append("div")
			.attr("class", "arrow_box")
			.html(opts.textBoxFormat ? opts.textBoxFormat(opts.value) : (opts.format? opts.format(opts.value) : opts.value));
	}

	select(container + " div.d3slider > svg > .thumbnail_layer > #thumb").attr("transform", "translate(" + xScale(opts.value) + ",0)");

	thumb.call(dragged);

	function resize() {
		opts.width = parseInt(svg.style('width'), 10) - opts.margin.right - opts.margin.left;

		// Update scale
		xScale.range([0, opts.width]);
		x.scale(xScale)
		x.ticks(opts.width < 500 ? 3 : 10);
		xAxis.call(x);

		// svg.attr("width", opts.width);
		select(container + " div.d3slider > svg > .thumbnail_layer > #thumb").attr("transform", "translate(" + xScale(value) + ",0)");

		if (opts.textBox) {
			element.select(".arrow_box_container").style("left", (opts.margin.left + xScale(value) + (opts.playButton? 0 : 0)) + "px");
			// element.select(".arrow_box").html(opts.textBoxFormat ? opts.textBoxFormat(value) : (opts.format? opts.format(value) : value));
		}

		// optional callback
		if (opts.onResize) {
			opts.onResize(opts.width);
		}
	}

	let resizeTimer, uid = s5(); // needed for namespacing the resize event

	// http://stackoverflow.com/questions/3339825/what-is-the-best-practise-to-not-to-override-other-bound-functions-to-window-onr
	function addResizeEvent(func, dur) {
		var resizeTimer;

		select(window).on("resize." + uid, function() {
			clearTimeout(resizeTimer);

			if (typeof oldResize === 'function') {
				oldResize();
			}

			resizeTimer = setTimeout(function() {
				func();
			}, dur || 250);
		});
	}
	addResizeEvent(resize, 100);

	// play button controls
	let timer, playing = false;

	function set(v, update) {
		// bound input to domain
		value = Math.max(Math.min(v, opts.domain[1]), opts.domain[0]);
		select(container + " div.d3slider > svg > .thumbnail_layer > #thumb").attr("transform", "translate(" + xScale(value) + ",0)");

		if (opts.textBox) {
			element.select(".arrow_box_container").style("left", (opts.margin.left + xScale(value) + (opts.playButton? 0 : 0)) + "px");
			element.select(".arrow_box").html(opts.textBoxFormat ? opts.textBoxFormat(value) : (opts.format? opts.format(value) : value));
		}

		if (update !== false) {
			opts.onDrag && opts.onDrag(value, false);
		}
	}

	function get() {
		return value;
	}

	function advance() {
		value += opts.playInterval;
		value = Math.round(value / opts.playInterval) * opts.playInterval;

		if (opts.snapToTick) {
			var distance = Infinity,
				tick = null;

			for (var t = 0; t < ticks.length; t += 1) {
				var d = Math.abs(value - ticks[t]);
				if (d < distance && value <= ticks[t]) {
					distance = d;
					tick = ticks[t];
				}
			}

			if (!tick) {
				value = ticks[0] - opts.playInterval;
				advance();
				return;
			}

			value = tick;
		}

		if (value == opts.domain[1] && !opts.loop) {
			playing = false;
			select(container + " #playButton").attr("src", images.play);
			clearTimeout(timer);
			// value = ticks[ticks.length - 1];

			if (opts.textBox) {
				element.select(".arrow_box_container").style("left", (opts.margin.left + xScale(value) + (opts.playButton? 0 : 0)) + "px");
				element.select(".arrow_box").html(opts.textBoxFormat ? opts.textBoxFormat(value) : (opts.format? opts.format(value) : value));
			}

			// select(container + " div.d3slider > svg > .thumbnail_layer > #thumb").attr("transform", "translate(" + xScale(value) + ",0)");
			opts.onDrag && opts.onDrag(value, false);

			if (opts.onFinish) {
				opts.onFinish();
			}
			return;
		} else if (value > opts.domain[1] && opts.loop) {
			value = opts.domain[0] - opts.playInterval;
			advance();
			return;
		}

		if (opts.textBox) {
			element.select(".arrow_box_container").style("left", (opts.margin.left + xScale(value) + (opts.playButton? 0 : 0)) + "px");
			element.select(".arrow_box").html(opts.textBoxFormat ? opts.textBoxFormat(value) : (opts.format? opts.format(value) : value));
		}			

		select(container + " div.d3slider > svg > .thumbnail_layer > #thumb").attr("transform", "translate(" + xScale(value) + ",0)");
		opts.onDrag && opts.onDrag(value, false);
	}

	select(container + " #playButton").on("click", function() {
		if (opts.locked) {
			return;
		}

		if (value >= opts.domain[1]) {
			value = opts.domain[0] - opts.playInterval;
		}


		if (!playing) {
			playing = true;
			select(container + " #playButton").attr("src", images.stop);
			advance();
			timer = setInterval(function() {
				advance();
			}, opts.speed);

			if (opts.onStart) {
				opts.onStart();
			}
		} else {
			playing = false;
			select(container + " #playButton").attr("src", images.play);
			clearTimeout(timer);

			if (opts.onStop) {
				opts.onStop();
			}
		}
		event.stopPropagation(); // otherwise clicking the play button triggers the following handler and resets the value to the min
	});

	element.on("click", function(d) {
		clickedOrDragged();
	});

	return {
		options: opts,
		height:  opts.height,
		width:   opts.width,
		axes_layer:	 axes_layer,
		data_layer: data_layer,
		scale:   xScale,
		axis: x,
		// advance: advance,
		domain:  opts.domain,
		setValue: set,
		getValue: get,
		resize: resize,
		playing: function() {
			return playing
		},		
		start: function(startValue) {
			playing = true;
			select(container + " #playButton").attr("src", images.stop);
			if (startValue) {
				set(startValue);					
			}
			// advance();
			timer = setInterval(function() {
				advance();
			}, opts.speed);

			if (opts.onStart) {
				opts.onStart();
			}				
		},
		stop: function() {
			playing = false;
			select(container + " #playButton").attr("src", images.play);
			clearTimeout(timer);
			if (opts.onStop) {
				opts.onStop();
			}
		},		
		lock: function() {
			opts.locked = true;
			element.classed("locked", true);
		},
		unlock: function() {
			opts.locked = false;
			element.classed("locked", false);				
		},
		setButtonColor: function(color) {
			if (color == "white") {
				images.play = images.play_white;
				images.stop = images.stop_white;
			} else if (color == "hollow") {
				images.play = images.play_hollow;
				images.stop = images.pause_hollow;
			} else {
				images.play = images.play_gray;
				images.stop = images.stop_gray;
			}

			if (opts.playButton && playing) {
				select(container + " #playButton").attr("src", images.stop);
			} else {
				select(container + " #playButton").attr("src", images.play);
			}
		}
	}
}

function s5() {
	return Math.floor((1 + Math.random()) * 0x100000)
		.toString(16)
		.substring(1);
}

export default d3slider