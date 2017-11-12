var Backbone = require('backbone');

// Model is a Backbone object, not Marionette.
module.exports = Backbone.Model.extend({
    // The url property is a built-in Backbone attribute
    // that indicates the location of the data (in this
    // case, the mockable url). Make sure to replace this
    // url with the url from your account.
    url: 'http://demo#######.mockable.io/content',

    // Setting defaults sets default attributes on the model.
    // The key/value pairs in the fetched JSON fetched from the
    // url above will also be added as attributes to the model
    // if the call is successful. If an attribute in the JSON
    // has the same name as a default, it will overwrite it.
    defaults: {
        // Because initial navigation occurs before the content
        // is fetched, the string indicating the route is stored
        // as the value of activePage. Then, once the content is
        // fetched, activeContent can be determined during rendering.
        activePage: null,
        // activeContent is the content that mainTemplate
        // will display in place of {{{ activeContent }}}.
        activeContent: function() {
            var calledFailed = this.activePage === 'error';
            var pageNotFound = this.activePage && this.content && !this.content[this.activePage];
            var contentExists = this.activePage && this.content && this.content[this.activePage];

            if (contentExists) {
                return this.content[this.activePage];
            }

            if (calledFailed || pageNotFound) {
                return this.error;
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
