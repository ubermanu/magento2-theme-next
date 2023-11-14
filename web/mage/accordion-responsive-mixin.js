/**
 * Add responsive support to the native accordion.
 *
 * @mixin
 */
define([
    'jquery',
    'matchMedia',
], function ($, mediaCheck) {
    'use strict';

    const widgetMixin = {
        options: {
            responsive: false,
            mediaBreakpoint: '(max-width: 767px)',
        },

        /**
         * @private
         */
        _create: function () {
            if (this.options.responsive) {
                mediaCheck({
                    media: this.options.mediaBreakpoint,
                    entry: this._super.bind(this),
                    exit: $.proxy(function () {
                        if (this.contents) {
                            this.contents.show();
                        }
                        this._destroy();
                    }, this)
                });
            } else {
                this._super();
            }
        },
    }

    return function () {
        $.widget('mage.accordion', $.mage.accordion, widgetMixin);
        return $.mage.accordion;
    };
});
