var Backbone = require('backbone');

module.exports = Backbone.Collection.extend({

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
