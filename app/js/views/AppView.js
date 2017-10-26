var Marionette = require('backbone.marionette');
var appTemplate = require('../../templates/appTemplate.hbs');
var HeaderView = require('./HeaderView');
var MainView = require('./MainView');

module.exports = Marionette.View.extend({
    // The el property is a built-in Backbone attribute that scopes the module.
    el: '#app',

    // The template property is a built-in Backbone attribute that states which
    // template file should be used for the view.
    template: appTemplate,

    // The regions property is a built-in Marionette attribute that declares which
    // elements will hold the various regions on the page.
    regions: {
        headerRegion: '#header-region',
        mainRegion: '#main-region'
    },

    // The onRender method is a Marionette event callback that is called after the
    // view has rendered. We want to wait until the parent is rendered before we
    // render the child views. In the region we specified above as headerRegion,
    // we will render a new HeaderView instance (and so on for the other two regions).
    onRender: function() {
        this.showChildView('headerRegion', new HeaderView());
        this.showChildView('mainRegion', new MainView());
    }
});
