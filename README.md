d3slider
========

Not a cheeseburger, just a nifty d3 slider. Say adios to buggy bootstrap sliders and hello to d3 axis slider.

The current options are:

	var mySlider = slider(container, {
		domain: [0, 100],
		playBtn: true,
		snapToTick: false,
		tickInterval: 1,
		labelInterval: 5,
		onDrag: function(v){
			updateSlide(v)
		}
	});		


Still experimental, more options to come. 