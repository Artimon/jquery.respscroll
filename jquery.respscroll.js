/* global window, jQuery */

(function (window, $) {

	'use strict';

	var $document = $(document),
		$window = $(window),
		defaults = {
			duration: undefined,
			vhDuration: 400,
			offset: 0,
			partialInView: true,
			easing: undefined,
			complete: function () {}
		};

	/**
	 * @param {jQuery} $element
	 * @param {boolean} fullyInView
	 * @returns {boolean}
	 */
	function isElementInView($element, fullyInView) {
		var pageTop = $window.scrollTop(),
			pageBottom = pageTop + $window.height(),
			elementTop = $element.offset().top,
			elementBottom = elementTop + $element.height();

		return fullyInView
			? (pageTop < elementTop) && (pageBottom > elementBottom)
			: (elementTop <= pageBottom) && (elementBottom >= pageTop);
	}

	/**
	 * @param options
	 */
	$.fn.respscroll = function (options) {
		var duration,
			distance,
			top;

		options = $.extend({}, defaults, options);

		if (isElementInView(this, options.partialInView)) {
			return;
		}

		top = this.offset().top + options.offset;
		duration = options.duration;

		if (duration === undefined) {
			distance = Math.abs(
				this.offset().top - $document.scrollTop()
			);

			duration = options.vhDuration * (distance / $window.height());
		}

		$('html, body').animate(
			{ scrollTop: top },
			duration,
			options.easing,
			options.complete
		);
	};

})(window, jQuery);
