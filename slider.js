;(function(d3) {
	// allow for use in Node/browserify or not
	if (typeof module !== "undefined") {
		var d3 = require("d3");
	} else {
		d3 = window.d3;
	}

	var slider = function(container, opts) {
		var value; // current value of slider at all times

		// build slider
		if (!container) {
			console.log("You must supply slider a container as the first argument");
			return null;
		}
		element = d3.select(container);
		element.classed("d3slider", true);
		opts = opts || {};

		// options
		opts.margin = { left: opts.playButton? 60 : 25, right: 25, top: opts.playButton? 22 : 18  };
		opts.width = opts.width || parseInt(element.style('width'), 10);
		opts.height = opts.height || 60;
		opts.domain = opts.domain || [0, 10];
		opts.interval = opts.interval || 1;
		opts.tickInterval = opts.tickInterval || 4;
		opts.playInterval = opts.playInterval || 1;
		opts.startValue = opts.startValue || opts.domain[0],
		opts.value  = opts.hasOwnProperty("value")? opts.value : opts.domain[0];
		opts.speed = opts.speed || 1000;
		opts.loop = typeof opts.loop == "undefined" ? true: opts.loop;
		opts.locked = opts.locked || false;
		opts.color = opts.color || "#CC0000";
		opts.snapToTick = opts.snapToTick || false;

		if (opts.textBox) {
			opts.margin.top += 20;
			opts.height += 20;
		}

		if (opts.locked) {
			element.classed("locked", true);
		}

		value = opts.value;

		if (opts.playButton){
			var controls = element.append("div").attr("id", "control-panel")
			controls.append("img")
				.attr("id", "playButton")
				.attr("class", "playButton")
				.attr("src", "http://time-static-shared.s3-website-us-east-1.amazonaws.com/interactives/death_penalty_map/img/circlearrow.png");
		};

		var svg = element.append('svg')
			.attr('width', opts.width)
			.attr('height', opts.height)

		var axis = svg.append("g").attr("class", "slider-axis");

		var xScale = d3.scaleLinear().domain(opts.domain)

		// Make adjustments to range and position of axis if play button
		xScale.range([0, opts.width - opts.margin.right  - opts.margin.left]);

		axis.attr("transform", "translate(" + opts.margin.left + "," + opts.margin.top + ")");

		// axis
		var x = d3.axisBottom().scale(xScale);

		var ticks = opts.tickValues || d3.range(opts.domain[0], opts.domain[1] + 1, opts.tickInterval);

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

			var coords = d3.mouse(svg.select(".domain").node()),
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
				element.select(".arrow_box_container")
					.style("left", (opts.margin.left + xScale(value)) + "px");

				element.select(".arrow_box")
					.html(value);
			}

			// we only want to fire the callback if we're moving to a new tick
			if (snap != previous_snap) {
				d3.select(container + " > svg > .slider-axis > #thumb").attr("transform", "translate(" + xScale(value) + ",0)");
				opts.onDrag && opts.onDrag(value);					
				previous_snap = snap;
			}

			// cancel playing when manually moved
			if (playing) {
				playing = false;
				d3.select(container + " #playButton").attr("src", "http://img.timeinc.net/time/wp/interactives/img/ui/circlearrow.png");
				clearTimeout(timer);
				if (opts.onStop) {
					opts.onStop();
				}
			}
		}

		// events
		var drag = d3.drag()
			.on("drag", clickedOrDragged);

		var thumb = axis.append("g")
			.attr("class", "thumb")
			.attr("id", "thumb")
			.attr("transform", "translate(" + x.scale().range()[0] + ",0)")
			.call(drag);

		thumb.append("circle")
			.attr("r", opts.size || 12)
			.attr("cx", 0)
			.attr("cy", 0)
			.style("fill", opts.color);

		if (opts.textBox) {
			element
				.append("div")
				.attr("class", "arrow_box_container")
				.style("left", (opts.margin.left + xScale(opts.value)) + "px")
				.style("top", (13 - opts.size) + "px")
				.append("div")
				.attr("class", "arrow_box")
				.html(opts.value);
		}

		/*
		if (opts.thumbText){
			thumb.append("text")
				.attr("id", "thumb-text")
				.attr("transform", "translate(0,32)")
				.text(opts.thumbText)
				.style("text-anchor", "middle")
				.style("font-size", "14px");
		}
		*/

		//console.log(xScale, opts.value, xScale(opts.value));
		d3.select(container + " > svg > .slider-axis > #thumb").attr("transform", "translate(" + xScale(opts.value) + ",0)");

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

			d3.select(window).on("resize." + uid, function() {
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

		function set(value) {
			// bound input to domain
			value = Math.max(Math.min(value, opts.domain[1]), opts.domain[0]);
			d3.select(container + " > svg > .slider-axis > #thumb").attr("transform", "translate(" + xScale(value) + ",0)");
			opts.onDrag && opts.onDrag(value);
		}

		function get() {
			return value;
		}

		function advance() {
			value += opts.playInterval;

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

			// loop around
			if ((!value || value >= opts.domain[1]) && !opts.loop) {
				playing = false;
				svg.select(container + " #playButton").attr("src", "http://time-static-shared.s3-website-us-east-1.amazonaws.com/interactives/death_penalty_map/img/circlearrow.png");
				clearTimeout(timer);

				if (opts.onStop) {
					opts.onStop();
				}

				return;
			}
			if (!value || value > opts.domain[1]) {
				value = opts.startValue;
			}
			d3.select(container + " > svg > .slider-axis > #thumb").attr("transform", "translate(" + xScale(value) + ",0)");
			opts.onDrag && opts.onDrag(value);			
		}

		d3.select(container + " #playButton").on("click", function() {
			if (opts.locked) {
				return;
			}

			if (!playing) {
				playing = true;
				d3.select(container + " #playButton").attr("src", "http://time-static-shared.s3-website-us-east-1.amazonaws.com/interactives/death_penalty_map/img/circlestop.png");
				advance();
				timer = setInterval(function() {
					advance();
				}, opts.speed);

				if (opts.onStart) {
					opts.onStart();
				}

			} else {
				playing = false;
				d3.select(container + " #playButton").attr("src", "http://time-static-shared.s3-website-us-east-1.amazonaws.com/interactives/death_penalty_map/img/circlearrow.png");
				clearTimeout(timer);

				if (opts.onStop) {
					opts.onStop();
				}
			}
			d3.event.stopPropagation(); // otherwise clicking the play button triggers the following handler and resets the value to the min
		});

		element.on("click", function(d) {
			clickedOrDragged(d);
		});

		return {
			axis:    axis,
			scale:   xScale,
			height:  opts.height,
			width:   opts.width,
			advance: advance,
			set:     set,
			get:     get,
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
				d3.select(container + " #playButton").attr("src", "http://time-static-shared.s3-website-us-east-1.amazonaws.com/interactives/death_penalty_map/img/circlestop.png");
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
				d3.select(container + " #playButton").attr("src", "http://time-static-shared.s3-website-us-east-1.amazonaws.com/interactives/death_penalty_map/img/circlearrow.png");
				clearTimeout(timer);
				if (opts.onStop) {
					opts.onStop();
				}
			}
		}
	}

	// make this compatible with browserify without requiring it
	if (typeof module !== "undefined") {
		module.exports = slider;
	} else {
		window.d3slider = slider;
	}

	function s5() {
		return Math.floor((1 + Math.random()) * 0x100000)
			.toString(16)
			.substring(1);
	}
}());