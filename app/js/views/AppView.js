var Marionette = require('backbone.marionette');
// This template will describe the DOM structure of the parent view.
var appTemplate = require('../../templates/appTemplate.hbs');
// HeaderView and MainView will be child views.
var HeaderView = require('./HeaderView');
var MainView = require('./MainView');

// Marionette.View is built upon Backbone.View.
// It describe how data will be displayed.
module.exports = Marionette.View.extend({
    // The el property is a built-in Backbone attribute that defines which
    // element is the parent element of the view's html. If it is not defined,
    // the parent element will be a div.
    el: '#app',

    // The template property is a built-in Backbone attribute that allows a template
    // function or file to be used to create the structure of the page.
    template: appTemplate,

    // The regions property is a built-in Marionette attribute that declares which
    // elements will hold the various sub-views on the page.
    regions: {
        headerRegion: '#header-region',
        mainRegion: '#main-region'
    },

    // The onRender method is a Marionette event callback that is called after the
    // view has rendered. The parent should be rendered before rendering the child
    // views, so showChildView is not called on the child views until onRender.
    // In the region specified above as headerRegion, a new HeaderView instance will
    // be rendered (and so on for the other two regions). Marionette automatically
    // renders the views, so you don't need to call render like you do in Backbone
    // unless you need to force a re-render.
    onRender: function() {
        this.showChildView('headerRegion', new HeaderView());
        this.showChildView('mainRegion', new MainView());
    }
});
