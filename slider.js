;(function(d3) {
	
	// allow for use in Node/browserify or not
	if (typeof module !== "undefined") {
		var d3 = require("d3");
	} else {
		d3 = window.d3;
	}
	
	var slider = function(container, opts) {
		
		// SETUP
		opts = opts || {};
		container = container || "body";
		container = typeof container === "string" ? d3.select(container) : container;

		var margin = opts.margin || {top: 20, right: 50, bottom: 30, left: 30};

		var width = opts.width || parseInt(container.style('width'), 10),
			height = opts.height || 60,
			original_width = width, // for scaling + resizing
			backdrop;  
		
		opts.domain = (opts.domain ? opts.domain : [0, 1]);
		

		if (opts.playBtn){ 
			// Accommodate play button width
			// width = width - 50 

			var controls = container.append("div").attr("id","control-panel")

			controls.append("img")
				.attr("id", "playbtn")
				.attr("class", "playbtn")
				.attr("src", "http://img.timeinc.net/time/wp/interactives/apps/death_penalty_map/img/circlearrow.png");
		};

		var svg = container.append('svg')
	    	.attr('width', width)
	    	.attr('height', height + margin.top + margin.bottom)
			.append('g')
	    	// .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

		var axis = svg.append("g").attr("class", "slider-axis");

		var xScale = d3.scale.linear()
			.domain(opts.domain)

		

		// Make adjustments to range and position of axis if play button
		if (opts.playBtn){
			xScale.range([0, width -100])
			axis.attr("transform", "translate(85," + 45 + ")");
		} else {
			xScale.range([0, width - margin.right - margin.left])
			axis.attr("transform", "translate(25," + 45 + ")");
		}

		var x = d3.svg.axis()
			.scale(xScale)
			// .tickValues(d3.range(years.length))
			.orient('top')
			// .tickFormat(function(d) { return years[d]; }); //d3.format(".0f"))

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

		function clickedOrDragged(d) {
			var coords = d3.mouse(svg.select(".domain")[0][0]),
				dx = Math.min(x.scale().range()[1], Math.max(x.scale().range()[0], coords[0])),
				mili = Math.round(x.scale().invert(dx));
			
			if (opts.snapToTick){
				d3.select("#thumb").attr("transform", "translate(" + xScale(mili) + ",0)");
			} else {
				d3.select("#thumb").attr("transform", "translate(" + dx + ",0)");	
			}
			opts.onDrag(mili);
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
				.style("text-anchor", "middle")
				.style("font-size", "14px");
		}

		function resize_chart() {
			var w = parseInt(container.style('width'), 10) - margin.right - margin.left,
				h = parseInt(container.style('height'), 10) - margin.top - margin.bottom,
				z = w / original_width;

			width = w;
			height = h;

			//resize_layer.attr("transform", "scale(" + z + ",1)");

			axes.forEach(function(obj) {
				obj.resize(w, h, z);
			});

			if (opts.resize) {
				opts.resize(w, h, z);
			}

			if (backdrop) {
				drawBackdrop(backdrop[0]);
			}
		}
		
		return {
			axis: axis,
			scale: xScale,
			// resize_layer: resize_layer,
			height: height,
			width: width,
			setResize: function(rf) {
				opts.resize = rf;
			}
		}
		
	}

	// make this compatible with browserify without requiring it
	if (typeof module !== "undefined") {
		module.exports = slider;
	} else {
		window.d3chart = slider;
	}

	// // http://stackoverflow.com/questions/3339825/what-is-the-best-practise-to-not-to-override-other-bound-functions-to-window-onr
	// function addResizeEvent(func, dur) {
	// 	var resizeTimer,
	//     	oldResize = window.onresize;
	    	
	//     window.onresize = function () {
	// 		clearTimeout(resizeTimer);
	//         if (typeof oldResize === 'function') {
	//             oldResize();
	//         }

	// 		resizeTimer = setTimeout(function() {
	// 			func();
	// 		}, dur || 250);
	//     };
	// }


}());