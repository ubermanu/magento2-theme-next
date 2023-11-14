/**
 * Example:
 *
 * <div data-mage-init='{linkBlock: {"fromSelector": ".action.primary"}}'>
 *     <h3>Lorem Ipsum</h3>
 *     <a href="#" class="action primary">Link</a>
 *     <a href="#" class="action secondary">Link 2</a>
 * </div>
 *
 * When the block itself is clicked, the click action is forwarded to
 * the primary button.
 *
 * When the secondary button is clicked, it behaves normally.
 */

define([
    'jquery',
    'domReady!'
], function ($) {
    'use strict';

    const defaultConfig = {
        fromSelector: 'a:first-child',
        ariaRole: 'link',
    };

    return function (config, element) {
        config = $.extend({}, defaultConfig, config);

        const from = $(element).find(config.fromSelector);

        if (from.length === 0) {
            console.warn('linkBlock: no target found', element, config);
            return;
        }

        $(element)
            .attr('role', config.ariaRole)
            .attr('tabindex', 0);

        from.attr('tabindex', '-1');

        $(element).on('click', function () {
            from.get(0).click();
        });
    };
});
