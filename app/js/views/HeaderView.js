var Marionette = require('backbone.marionette');
var headerTemplate = require('../../templates/headerTemplate.hbs');
var NavItemsView = require('./NavItemsView');

module.exports = Marionette.View.extend({
    el: '#header-region',

    template: headerTemplate,

    regions: {
        navItemsRegion: '#nav-mobile'
    },

    // The ui hash is a built-in Marionette attribute that allows
    // easy access to elements in the view using the getUI method.
    ui: {
        menuButton: '.button-collapse'
    },

    onRender: function() {
        this.showChildView('navItemsRegion', new NavItemsView());
        // The getUI method is built into Marionette. It gets the element
        // specified as "menuButton" in the ui hash in the same way it could
        // be accessed with jQuery using $('.button-collapse'). The sideNav
        // function is part of Materialize. It will turn the element into a
        // slide-out menu.
        this.getUI('menuButton').sideNav();
    }
});
