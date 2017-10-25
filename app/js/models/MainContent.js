var Backbone = require('backbone');

// Model is a Backbone object. Make sure you
// type Backbone.Model and not Marionette.Model.
module.exports = Backbone.Model.extend({
    // The url property is a built-in Backbone attribute.
    // Set the location of the resource here (in this case,
    // the mockable url). Make sure to replace this url with
    // the url from your account.
    url: 'http://demo#######.mockable.io/content',

    defaults: {
        activePage: null,
        activeContent: function() {
            // Check that activatePage is set so we don't show
            // an error before the call has succeeded or failed.
            if (this.activePage) {
                if (this.content && this.content[this.activePage]) {
                    // If the content exists, set it as active.
                    return this.content[this.activePage];
                } else {
                    // If the call fails or the content does not
                    // exist, show an error.
                    return this.error;
                }
            }
        },
        error: '<h2>Error</h2><div>This is error content.</div>'
    },

    setActiveContent: function(page) {
        this.set('activePage', page);
    }
});
