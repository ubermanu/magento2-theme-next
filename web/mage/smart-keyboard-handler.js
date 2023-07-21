/**
 * Disable the smart keyboard handler, in favor of the browser's native
 * :focus-visible pseudo-class.
 */
define(function () {
    'use strict';

    return {
        apply: () => {},
        focus: () => {},
    };
});
