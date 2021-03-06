var Marionette = require('backbone.marionette');
var navItemTemplate = require('../../templates/navItemTemplate.hbs');

module.exports = Marionette.View.extend({
    // The tagName property is a built-in Backbone attribute that
    // can be used to declare what kind of element should be used
    // as the containing element. Since this is a child view of
    // NavItemsView, the containing li element will be inserted
    // inside the el defined in NavItemsView.
    tagName: 'li',

    // The className property is a built-in Backbone attribute that can
    // be used to define the classes to be set on the containing element.
    className: 'side-links',

    template: navItemTemplate
});
