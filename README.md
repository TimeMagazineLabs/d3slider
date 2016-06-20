d3slider
========

Not a cheeseburger, just a nifty d3 slider. Say adios to buggy bootstrap sliders and hello to d3 axis slider.

### Initial options

	var mySlider = slider(container, {
		domain: [0, 100],
		playButton: true,
		interval: 1,
		tickInterval: 2,
		loop: true,
		onDrag: function(v){
			updateSlide(v)
		}
	});		

+ domain: The min and max values of the slides
+ playButton (boolean): Whether to include a play button to animate through the slider
+ interval: The value positions for the slider along the domain. This will usually be 1, but might be 4 for, say, a slider of presidential elections.
+ tickInterval: How often to place a tick and a label on the slider, as a multiple of the number of positions between the minimum and maximum of the domain.
+ loop: Whether to start over again when you reach the end when animating through with the button
+ onDrag: The callback that fires when the position of the slider changes.

### Methods

### Generating CSS

	npm install
	lessc styles.less > d3slider.css
