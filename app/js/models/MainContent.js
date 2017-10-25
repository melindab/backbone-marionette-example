var Backbone = require('backbone');

// Model is a Backbone object, not Marionette.
module.exports = Backbone.Model.extend({
    // The url property is a built-in Backbone attribute.
    // Set the location of the resource here (in this case,
    // the mockable url). Make sure to replace this url with
    // the url from your account.
    url: 'http://demo#######.mockable.io/content',

    // Setting defaults sets these attributes on the model.
    // The content object fetched from the url above will
    // also be added to the model if it is successful.
    defaults: {
        // Because initial navigation occurs before the
        // content is fetched, we store the string indicating
        // the route as the value of activePage. Then, once
        // the content is fetched, activeContent is determined
        // during rendering.
        activePage: null,
        // activeContent is the content that mainTemplate
        // will display in place of {{{ activeContent }}}.
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
        // activePage is set whenever there is navigation.
        // This is called in MainView.
        this.set('activePage', page);
    }
});
