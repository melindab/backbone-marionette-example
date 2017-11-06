var $ = require('jquery');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var NavItemView = require('./NavItemView');

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

    // The collection property is a built-in Marionette attribute
    // that declares the collection to be used. Note that
    // Backbone.Collection is a Backbone object, not Marionette.
    // A collection is an object that contains an array of models.
    // The array of items is being passed in to the collection
    // directly here, but it could also be fetched via HTTP request.
    // Every item will automatically be converted to a Backbone model.
    // A model contains all the data for a view. It has a lot of
    // built-in properties and methods that facilitate the getting
    // and setting of data.
    collection: new Backbone.Collection([
        {
            "href": "page-1",
            "text": "Page 1"
        },
        {
            "href": "page-2",
            "text": "Page 2"
        },
        {
            "href": "page-3",
            "text": "Page 3"
        }
    ])
});
