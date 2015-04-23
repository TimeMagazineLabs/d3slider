;(function(d3) {
	// allow for use in Node/browserify or not
	if (typeof module !== "undefined") {
		var d3 = require("d3");
	} else {
		d3 = window.d3;
	}
	
	var slider = function(container, opts) {
		// SETUP
		if (!container) {
			console.log("You must supply slider a container as the first argument");
			return null;
		}

		opts = opts || {};
		container = d3.select(container);

		// Acccomodate play button width
		var margin = opts.margin || { top: 20, right: opts.playBtn? 70 : 30, bottom: 30, left: 30 };

		var width = opts.width || parseInt(container.style('width'), 10),
			height = opts.height || 60,
			backdrop;

		var uid = s5(); // needed for namespacing the resize event
		
		opts.domain = (opts.domain ? opts.domain : [0, 1]);

		if (opts.playBtn){ 
			var controls = container.append("div").attr("id", "control-panel")
			controls.append("img")
				.attr("id", "playbtn")
				.attr("class", "playbtn")
				.attr("src", "http://img.timeinc.net/time/wp/interactives/apps/death_penalty_map/img/circlearrow.png");
		};

		var svg = container.append('svg')
			.attr('width', width)
			.attr('height', height)

		var axis = svg.append("g").attr("class", "slider-axis");

		var xScale = d3.scale.linear()
			.domain(opts.domain)

		// Make adjustments to range and position of axis if play button
		xScale.range([0, width - margin.right  - margin.left]);

		if (opts.playBtn){
			axis.attr("transform", "translate(65," + 40 + ")");
		} else {
			axis.attr("transform", "translate(25," + 45 + ")");
		}

		var x = d3.svg.axis()
			.scale(xScale);

		if (opts.interval) {
			x.ticks((opts.domain[1] - opts.domain[0] + 1) / opts.interval);
		} else {
			x.ticks(width < 500 ? 5 : 10)
		}
			
		x.orient('top').tickFormat(function(d) { return d; })

		axis.call(x)

		if (opts.label) {
			var label = axis_g.append("text")
				.attr("transform", "translate(" + (opts.label_offset || 0) + ",0)rotate(-90)")
				.attr("x", 0)
				.attr("y", 5)
				.attr("dy", ".71em")
				.style("text-anchor", "end")
				.attr("class", "axis_label")
				.text(opts.label);
		}

		container.on("click", clickedOrDragged);

		function clickedOrDragged(d) {
			var coords = d3.mouse(svg.select(".domain")[0][0]),
				dx = Math.min(x.scale().range()[1], Math.max(x.scale().range()[0], coords[0])),
				mili = Math.round(x.scale().invert(dx));
			
			if (opts.snapToTick){
				d3.select("#thumb").attr("transform", "translate(" + xScale(mili) + ",0)");
				opts.onDrag(mili);
			} else {
				d3.select("#thumb").attr("transform", "translate(" + dx + ",0)");	
				opts.onDrag(mili);
			}
		}
		
		var drag = d3.behavior.drag()
			.on("drag", clickedOrDragged)
			.on("dragstart", function() {});
			
		var thumb = axis.append("g")
			.attr("class", "thumb")
			.attr("id", "thumb")
			.attr("transform", "translate(" + x.scale().range()[0] + ",0)")
			.call(drag);

		thumb.append("path")
			.attr("d", "M0,6l6,10h-12l6,-11")

		if (opts.thumbText){
			thumb.append("text")	
				.attr("id", "thumb-text")
				.attr("transform", "translate(0,32)")
				.text(opts.thumbText)
				.style("text-anchor", "middle")
				.style("font-size", "14px");
		}
		
		function resize() { 
			width = parseInt(container.style("width"), 10);

			// Update scale
			xScale.range([0, width - margin.right - margin.left]);
			//thumb.attr("transform", "translate(" + x.scale().range()[1] + ",0)")
			x.scale(xScale)
			axis.call(x)

			if (!opts.interval) {
				x.ticks(width < 500 ? 5 : 10);
			}

			svg.attr("width",  width)

			// optional callback
			if (opts.onResize) {
				opts.onResize(width)//, height);
			}
		}

		var resizeTimer;

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
		
		function set(value) {
			// bound input to domain
			value = Math.max(Math.min(value, opts.domain[1]), opts.domain[0]);

			if (opts.snapToTick){
				d3.select("#thumb").attr("transform", "translate(" + xScale(value) + ",0)");
				opts.onDrag(value);
			} else {
				d3.select("#thumb").attr("transform", "translate(" + value + ",0)");	
				opts.onDrag(value);
			}			
		}

		return {
			axis: axis,
			scale: xScale,
			height: height,
			width: width,
			set: set
		}
	}

	// make this compatible with browserify without requiring it
	if (typeof module !== "undefined") {
		module.exports = slider;
	} else {
		window.d3chart = slider;
	}

	function s5() {
		return Math.floor((1 + Math.random()) * 0x100000)
			.toString(16)
			.substring(1);
	}
}());