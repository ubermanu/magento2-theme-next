/**
 * Add the ability to prevent default action on modal trigger.
 * If the trigger element is a link, the default action will be prevented.
 *
 * @mixin
 */
define([
    'jquery',
], function ($) {
    'use strict';

    const modalWidgetMixin = {
        toggleModal: function (event) {
            if (event && event instanceof $.Event) {
                event.preventDefault();
            }

            this._super();
        }
    };

    return function (targetWidget) {
        $.widget('mage.modal', targetWidget, modalWidgetMixin);
        return $.mage.modal;
    }
});
