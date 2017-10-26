var Backbone = require('backbone');

// Collection is a Backbone object, not Marionette.
// A collection is an object that contains an array of models.
module.exports = Backbone.Collection.extend({
    // Note: The routes are hardcoded here, but the data could also be fetched
    // via HTTP Request in the same way as was done in the MainContent Model.
    initialize: function() {
        this.set([
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
        ]);
    }
});
