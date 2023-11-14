/**
 * Add the ability to restore the original position of the element
 * that has been moved to the modal.
 *
 * @mixin
 */
define([
    'jquery',
], function ($) {
    'use strict';

    const modalWidgetMixin = {
        options: {
            restoreOnDestroy: false,
        },

        /**
         * @inheritdoc
         */
        _create: function () {
            this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            };
            this._super();
        },

        /**
         * @private
         */
        _destroy: function () {
            this._super();

            if (!this.options.restoreOnDestroy) {
                return;
            }

            // Close before destroying
            this.closeModal();
            if (this.overlay) {
                this._destroyOverlay();
            }

            // Remove events
            if (this.options.trigger) {
                $(document).off('click', this.options.trigger);
            }

            this._off(this.modal.find(this.options.modalCloseBtn), 'click');
            this._off(this.element, 'openModal closeModal');

            // Restore original position
            const originalPosition = this.originalPosition,
                next = originalPosition.parent.children().eq(originalPosition.index);

            // Don't try to place the dialog next to itself
            if (next.length && next[0] !== this.element[0]) {
                next.before(this.element);
            } else {
                originalPosition.parent.append(this.element);
            }

            // Remove the modal element
            this.modal[0].remove();
        }
    };

    return function (targetWidget) {
        $.widget('mage.modal', targetWidget, modalWidgetMixin);
        return $.mage.modal;
    };
});
