// Requiring dependencies that are used in this component
// tells Browserify to add them to our bundle.
// Assign them to a variable to get access to the
// properties and methods within.
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
// Require AppView.js so that the view can be instantiated
// and shown in the onStart method below.
var AppView = require('./views/AppView');
// Require AppRouter so that the router can be instantiated.
var AppRouter = require('./routers/AppRouter');

// Extend the built-in Marionette Application Object.
var App = Marionette.Application.extend({
    // The region property is a built-in Marionette 3 attribute
    // that inserts the app view in the specified element. Note
    // that this is called "region" (singular) in the Application
    // object, but is called "regions" (plural) in views.
    region: '#app',

    // Defines the router used to trigger content change when a
    // user navigates.
    router: new AppRouter(),

    // The onStart method is a built-in event callback that is part of
    // Marionette's lifecycle (the order in which Marionette triggers
    // various built-in events). Any code you add in this function is
    // run when App.start() is called. This will be called in another
    // file called main.js.
    onStart: function() {
        // showView() is a built-in Marionette 3 method that shows a view.
        this.showView(new AppView());
        // Tell the router to start listening for navigation.
        Backbone.history.start();
    }
});

// Export and initialize the App component.
module.exports = new App();
