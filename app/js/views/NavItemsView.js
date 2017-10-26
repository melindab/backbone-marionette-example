var $ = require('jquery');
var Marionette = require('backbone.marionette');
var NavItemView = require('./NavItemView');
var RoutesCollection = require('../collections/RoutesCollection');

// CollectionView is a Marionette object that automatically
// iterates through the array and adds each item to the view.
module.exports = Marionette.CollectionView.extend({
    // All child views will be rendered
    // within the element specified as el.
    el: '#nav-mobile',

    // childView is a built-in Marionette attribute.
    // It specifies the view that will be used for
    // all the child elements.
    childView: NavItemView,

    // collection is a built-in Marionette attribute
    // that declares the collection to be used.
    collection: new RoutesCollection()
});
