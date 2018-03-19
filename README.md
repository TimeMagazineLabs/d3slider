d3slider
========
Not a cheeseburger, just a nifty d3 slider. Say *adios* to buggy Bootstrap sliders and hello to a d3-powered, mobile friendly axis slider. By Dave Johnson and Chris Wilson for TIME Magazine and open-sourced under the MIT license.

v0.0.6 [![Build Status](https://travis-ci.org/TimeMagazine/d3slider.svg?branch=master)](https://travis-ci.org/TimeMagazine/d3slider)

### Initial options

	var mySlider = slider(container, {
		domain: [0, 100],
		playButton: true,
		interval: 1,
		tickInterval: 10,
		value: 50,
		loop: true,
		onDrag: function(v){
			console.log(v)
		}
	});		

`container` is a CSS selector or HTML element that will house the slider, which will create its own div with the class `d3slider` and create an `svg` object inside.

## Main parameters
+ `domain`: The min and max values of the slides
+ `value`: Initial slider position. Defaults to first value in domain.
+ `onDrag`: The callback that fires when the position of the slider changes.
+ `playButton`: Boolean. Whether to include a play button to animate through the slider
+ `loop`: Whether to start over again when you reach the end when animating through with the button
+ `interval`: The value positions for the slider along the domain. This will often be 1, but might be 4 for, say, a slider of presidential elections. Leave this undefined if you want floating values
+ `tickInterval`: How often to place a tick and a label on the slider, as a multiple of the number of positions between the minimum and maximum of the domain.
+ `playInterval`: How far to advanced when you animate the slider. Defaults to `interval`, which defaults to `1`, and falls back on 20 steps if there is no `interval`.
+ `tickValues`: Specific values for ticks
+ `format`: A function that accepts the value of the tick and returns a label
+ `snapToTick`: boolean, whether to force user to the nearest tick value
+ `textBox`: Whether to display the value in the box over the slider
+ `onResize(width)`: A function to call if the window size changes
+ `onFinish`: A function to call when the tick reaches the end
+ `speed`: Milliseconds between stops on autoplay
+ `locked`: Whether the slider is manipulable
+ `size`: The radius of the thumbnail. Default is 12. Don't make it too small or it will be hard to catch on mobile.
+ `color`: Hex color of thumb
+ `margin`: `{ left: 25, right: 20, top: 20, bottom: 0 }`, e.g. Normally we'll guess the appropriate values based on your other params. Careful messing with this since you can cut off the thumbnail with small values.

## Properties
+ `height`: The current height
+ `width`: The current width
+ `axis`: The d3 axis object
+ `scale`: The d3 scale object
+ `domain`: The domain as an array

## Methods
+ `setValue(value, fire_callback)`: Set the value of the slider. Unless `fire_callback === false`, will fire the `onDrag` function
+ `getValue()`: Get the current value of the slider
+ `playing()`: Whether the slider is currently playing 
+ `start(v)`: Start the animation. Optional `v` sets the value first				
+ `stop()`: Stop the animation
+ `lock()`: Freeze the slider
+ `unlock()`: Unfreeze the slider
+ `setButtonColor`: Change the color of the thumbnail. Only needed if you want to change according to the value or a behavior

## Building

This module uses [Webpack](https://webpack.js.org/) to compile the source into the two files in the [`dist`](/dist) directory, which can be included in an HTML file the old-fashion way.

	<script src="./dist/d3slider.min.js"></script>
	<script>
		var slider = d3slider.d3slider;
		// initialize
	</script>

The files [`dist/d3slider.js`](dist/d3slider.js) (with comments and source maps) and [`dist/d3slider.min.js`](dist/d3slider.js) (minified, much smaller) are always up-to-date. If you make any modifications and need to recompile, just run `npm run build` and `npm run minify` from the root directory after running `npm install`.

If you want to `require` or `import` the module and compile it as part of a larger project, you do **not** have to run `npm install`. Just include it in your Node environment:

	const d3slider = require('d3slider').d3slider;	

## LICENSE
[MIT](LICENSE.md)