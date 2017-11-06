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
    // view has rendered. The parent should be rendered before rendering the child
    // views. In the region specified above as headerRegion, a new HeaderView
    // instance will be rendered (and so on for the other two regions).
    onRender: function() {
        this.showChildView('headerRegion', new HeaderView());
        this.showChildView('mainRegion', new MainView());
    }
});
