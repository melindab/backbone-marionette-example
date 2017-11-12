var Marionette = require('backbone.marionette');
var AppController = require('./AppController');

// AppRouter is a Marionette object that extends Backbone.Router.
// It is used in this application to trigger the code that shows
// the appropriate content when the user navigates to a page.
module.exports = Marionette.AppRouter.extend({
    // The controller property is a built-in Marionette attribute
    // that specifies the methods used by appRoutes below.
    controller: new AppController(),

    // The key for each key/value pair in appRoutes is the route
    // fragment, and the value is the method that will be called
    // in the controller when that route is matched. The colon
    // preceeding ':page' means that it is not a literal route
    // fragment. It is basically a parameter called "page" that
    // will match any URL component between slashes. If the user
    // navigates to anywhere other than the base url, it will call
    // the showPage method.
    appRoutes: {
        '': 'showDefault',
        ':page': 'showPage'
    }
});
