require([
    'jquery',
    'mage/translate',
    'Magento_Ui/js/modal/modal',
    'matchMedia',
    'domReady!'
], function ($, $t, modal, mediaCheck) {
    'use strict';

    const filterBlock = $('.block.filter');
    const toolbar = $('.toolbar-products:first');

    const filterButton = $('<button/>', {
        class: 'action secondary filter',
        text: $t('Filter'),
        'data-role': 'navigation-filters'
    });

    if (filterBlock.length) {
        mediaCheck({
            media: '(max-width: 767px)',
            entry: function () {
                filterBlock.modal({
                    type: 'slide',
                    responsive: true,
                    innerScroll: true,
                    restoreOnDestroy: true,
                    title: $t('Filter'),
                    trigger: '[data-role=navigation-filters]',
                    buttons: [],
                });
                filterButton.appendTo(toolbar);
            },
            exit: function () {
                if (filterBlock.modal('instance')) {
                    filterBlock.modal('destroy');
                }
                filterButton.remove();
            }
        });
    }
});
