define(['ko', 'uiComponent'], function (ko, Component) {
    'use strict';
    return Component.extend({
        defaults: {
            template: 'Van_Slider/vslider'
        },
        initialize: function (config) {
            console.log(config.items);
            this._super();
        },

    });
});
