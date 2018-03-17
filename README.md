d3slider
========

v0.0.5

Not a cheeseburger, just a nifty d3 slider. Say *adios* to buggy Bootstrap sliders and hello to a d3-powered, mobile friendly axis slider. By Dave Johnson and Chris Wilson for TIME Magazine and open-sourced under the MIT license.

### Initial options

	var mySlider = slider(container, {
		domain: [0, 100],
		playButton: true,
		interval: 1,
		tickInterval: 2,
		value: 50,
		loop: true,
		onDrag: function(v){
			console.log(v)
		}
	});		

`container` is a CSS selector or HTML element that will house the slider, which will create its own svg. It will clear any existing content in the selector, so pass it an empty `div`.

## Main parameters
+ domain: The min and max values of the slides
+ playButton (boolean): Whether to include a play button to animate through the slider
+ interval: The value positions for the slider along the domain. This will usually be 1, but might be 4 for, say, a slider of presidential elections.
+ tickInterval: How often to place a tick and a label on the slider, as a multiple of the number of positions between the minimum and maximum of the domain.
+ loop: Whether to start over again when you reach the end when animating through with the button
+ value: Initial slider position. Defaults to first value in domain.
+ size: The radius of the thumbnail. Default is 12. Don't make it too small or it will be hard to catch on mobile.
+ onDrag: The callback that fires when the position of the slider changes.

## Extra parameters
+ margin: `{ left: 10, right: 10, top: 40, bottom: 10 }`, e.g. Normally we'll guess the appropriate values based on your other params. Careful messing with these values since you can cut off the thumbnail with small values.
+ speed: Milliseconds between stops on autoplay
+ locked: Whether the slider is manipulable
+ color: Hex color of thumb
+ snapToTick: boolean, whether to force user to the nearest tick value
+ tickValues: Specific values for ticks
+ textBox: Whether to display the value in the box over the slider

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