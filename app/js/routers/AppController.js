var Marionette = require('backbone.marionette');
var Radio = require('backbone.radio');

// The methods the router uses in AppRoutes are contained
// in the controller. The controller can just be a regular
// object, but using Marionette.Object provides access to
// all of its built-in utilities.
module.exports = Marionette.Object.extend({
    // channel is a custom property we are setting
    // to easily access the Radio channel.
    channel: Radio.channel('app'),

    // If a user navigates to the base url of the site,
    // page 1 will be shown.
    showDefault: function() {
        this.channel.trigger('navigate', 'page-1');
    },

    // The router passes the route to showPage, which triggers
    // the navigation event.
    showPage: function( page ) {
        this.channel.trigger('navigate', page);
    }
});
