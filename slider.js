import {select, event, mouse} from "d3-selection";
import {range} from "d3-array";
import {scaleLinear} from "d3-scale";
import {axisBottom} from "d3-axis";
import {drag} from "d3-drag";
var images = require('./img/images.json');

require("./styles.less");

var slider = function(container, opts) {
	var value; // current value of slider at all times

	// build slider
	if (!container) {
		console.log("You must supply slider a container as the first argument");
		return null;
	}

	var element = select(container);

	element.classed("d3slider", true);
	opts = opts || {};

	// options
	if (!opts.margin) {
		opts.margin = {};
	}

	opts.margin.left = opts.margin.hasOwnProperty("left") ? opts.margin.left : 40;
	opts.margin.top = opts.margin.hasOwnProperty("top") ? opts.margin.top : 0;
	opts.margin.right = opts.margin.hasOwnProperty("right") ? opts.margin.right : 40;
	opts.margin.bottom = opts.margin.hasOwnProperty("bottom") ? opts.margin.bottom : 0;

	opts.height = opts.height || 60;
	opts.domain = opts.domain || [0, 10];
	opts.interval = opts.interval || 1;
	opts.tickInterval = opts.tickInterval || 4;
	opts.playInterval = opts.playInterval || 1;
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

	element.html("&nbsp;");

	opts.width = opts.width || element.node().offsetWidth; //parseInt(element.style('width'), 10);
	if (opts.playButton) {
		opts.width -= 40;
	}


	element.html("");

	if (opts.playButton){
		var controls = element.append("div").attr("id", "control-panel")
		controls.append("img")
			.attr("id", "playButton")
			.attr("class", "playButton")
			.attr("src", images.play);
	}

	var svg = element.append('svg');

	svg
		.attr('width', opts.width)
		.attr('height', opts.height)

	var axis = svg.append("g").attr("class", "slider-axis");

	var xScale = scaleLinear().domain(opts.domain)

	// Make adjustments to range and position of axis if play button
	xScale.range([0, opts.width - opts.margin.right  - opts.margin.left]);

	axis.attr("transform", "translate(" + opts.margin.left + "," + opts.margin.top + ")");

	// axis
	var x = axisBottom().scale(xScale);

	var ticks = opts.tickValues || range(opts.domain[0], opts.domain[1] + 1, opts.tickInterval);

	x.tickValues(ticks);
	x.tickSize(12, 0);

	x.tickFormat(function(d, i) {
		return opts.format? opts.format(d) : d;
	});

	axis.call(x)

	// see below
	var previous_snap = null;

	// fire when we've moved the thumbnail
	function clickedOrDragged(d) {
		if (opts.locked) {
			return;
		}

		var coords = mouse(svg.select(".domain").node()),
			dx = Math.min(x.scale().range()[1], Math.max(x.scale().range()[0], coords[0]));

		value = Math.round(x.scale().invert(dx));

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
			value = Math.max(x.scale().domain()[0], Math.round(value / opts.interval) * opts.interval);
			var snap = xScale(value);
		}

		if (opts.textBox) {
			element.select(".arrow_box_container").style("left", (opts.margin.left + xScale(value) + (opts.playButton? 40 : 0)) + "px");
			element.select(".arrow_box").html(opts.textBoxFormat ? opts.textBoxFormat(value) : (opts.format? opts.format(value) : value));
		}

		// we only want to fire the callback if we're moving to a new tick
		if (snap != previous_snap) {
			select(container + " > svg > .slider-axis > #thumb").attr("transform", "translate(" + xScale(value) + ",0)");
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
	var dragged = drag().on("drag", function(d) {
		clickedOrDragged(d, true);
	});

	var thumb = axis.append("g")
		.attr("class", "thumb")
		.attr("id", "thumb")
		.attr("transform", "translate(" + x.scale().range()[0] + ",0)")
		.call(dragged);

	thumb.append("circle")
		.attr("r", opts.size)
		.attr("cx", 0)
		.attr("cy", 0)
		.style("fill", opts.color);

	if (opts.textBox) {
		element
			.append("div")
			.attr("class", "arrow_box_container")
			.style("left", (opts.margin.left + xScale(opts.value) + (opts.playButton? 40 : 0)) + "px")
			.style("bottom", (opts.height + 1) + "px")
			.append("div")
			.attr("class", "arrow_box")
			.html(opts.textBoxFormat ? opts.textBoxFormat(opts.value) : (opts.format? opts.format(opts.value) : opts.value));
	}

	//console.log(xScale, opts.value, xScale(opts.value));
	select(container + " > svg > .slider-axis > #thumb").attr("transform", "translate(" + xScale(opts.value) + ",0)");

	function resize() {
		opts.width = parseInt(element.style("width"), 10);

		// Update scale
		xScale.range([0, opts.width - opts.margin.right - opts.margin.left]);
		x.scale(xScale)
		axis.call(x);
		x.ticks(opts.width < 500 ? 5 : 10);
		svg.attr("width", opts.width)

		// optional callback
		if (opts.onResize) {
			opts.onResize(width);
		}
	}

	var resizeTimer,
		uid = s5(); // needed for namespacing the resize event

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
	addResizeEvent(resize, 250);

	// play button controls
	var timer,
		playing = false;

	function set(value, update) {
		// bound input to domain
		value = Math.max(Math.min(value, opts.domain[1]), opts.domain[0]);
		select(container + " > svg > .slider-axis > #thumb").attr("transform", "translate(" + xScale(value) + ",0)");
		if (update !== false) {
			opts.onDrag && opts.onDrag(value, false);
		}
	}

	function get() {
		return value;
	}

	function advance() {
		value += opts.playInterval;
		if (value > opts.domain[1]) {
			if (opts.loop) {
				value = opts.domain[0] - opts.playInterval;
				advance();
				return;
			} else {
				playing = false;
				select(container + " #playButton").attr("src", images.play);
				clearTimeout(timer);

				if (opts.onFinish) {
					opts.onFinish();
				}
				return;
			}
		}

		// if (opts.snapToTick && value <= ticks[ticks.length - 1]) {
		if (opts.snapToTick) {
			var distance = Infinity,
				tick = null;

			for (var t = 0; t < ticks.length; t += 1) {
				var d = Math.abs(value - ticks[t]);
				if (d < distance && value < ticks[t]) {
					distance = d;
					tick = ticks[t];
				}
			}

			value = tick;				
		}

		if (opts.textBox) {
			element.select(".arrow_box_container").style("left", (opts.margin.left + xScale(value) + (opts.playButton? 40 : 0)) + "px");
			element.select(".arrow_box").html(opts.textBoxFormat ? opts.textBoxFormat(value) : (opts.format? opts.format(value) : value));
		}			

		// loop around
		// if ((!value || value >= opts.domain[1]) && !opts.loop) {
		// 	playing = false;
		// 	svg.select(container + " #playButton").attr("src", images.play);
		// 	clearTimeout(timer);

		// 	if (opts.onStop) {
		// 		opts.onStop();
		// 	}
		// 	return;
		// }

		// if (!value || value > opts.domain[1]) {
		// 	value = opts.startValue;
		// }

		select(container + " > svg > .slider-axis > #thumb").attr("transform", "translate(" + xScale(value) + ",0)");
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
		clickedOrDragged(d, true);
	});

	return {
		axis:	axis,
		scale:   xScale,
		height:  opts.height,
		width:   opts.width,
		advance: advance,
		set:	 set,
		get:	 get,
		domain:  opts.domain,
		playing: function() {
			return playing
		},
		lock: 	 function() {
			opts.locked = true;
			element.classed("locked", true);
			console.log("Locking", element);
		},
		unlock: function() {
			opts.locked = false;
			element.classed("locked", false);				
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

export { slider as slider };