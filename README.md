d3slider
========

Not a cheeseburger, just a nifty d3 slider. Say adios to buggy bootstrap sliders and hello to d3 axis slider.

### Initial options

	var mySlider = slider(container, {
		domain: [0, 100],
		playButton: true,
		interval: 1,
		tickInterval: 2,
		value: 50,
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
+ value: Initial slider position. Defaults to first value in domain.
+ onDrag: The callback that fires when the position of the slider changes.

<<<<<<< HEAD
Still experimental, more options to come. 

## LICENSE
MIT
=======
### Methods

### Generating CSS

	npm install
	lessc styles.less > d3slider.css
>>>>>>> e35ca2ae6599fcf8c97809f4f8a897824e6b1e19
