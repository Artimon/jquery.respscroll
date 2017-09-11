# jQuery.respscroll

Scroll only when necessary and with a controlled speed. No need to worry about responsive scrolling conditions any more.

Only scrolls when your target is (partially) off screen. Pages may also get long on mobile devices, making scroll animations based on a duration very fast. Hence jQuery.respscroll allows to define the time to take for crossing one screen until the target is reached.

## Setup

Just add the file after you include jquery.
```html
<script src="js/vendor/jquery.respscroll.js"></script>
```

## Usage

```js
$(element).respscroll(options);
```

### _element_

The target element to scroll the document to.

### _options_

The `duration` parameter will overwrite the `speed` parameters. These options are available:

* __duration__: Disabled by default. The duration of the animation. Pass `0` for an immediate jump.
* __vhDuration__: Used instead of `duration` and defines how fast one screen of distance to the `target` will be covered. This prevents extremely fast movements on long pages. Default is `400`.
* __offset__: Can be used to scroll above/below the technical `target` position. Default `0`.
* __partialInView__: Scroll to the `target` even if it is already partial in the view. Turn to false to only scroll to the `target` when it is completely off the view. Default `true`.
* __easing__: Scroll easing defaults to the jQuery animation default.
* __complete()__: Callback after the animation finished.

## Example

```js
$('#target').respscroll({
    vhDuration: 600, // ~600ms duration per view height of distance.
    offset: -30, // Stop 30px above target.
    partialInView: false, // Only when not in view at all.
    easing: 'easein', // Use easein transition.
    complete: function () {
        console.log('We arrived at our target destination.');
    }
});
```
