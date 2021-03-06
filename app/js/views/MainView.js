var Marionette = require('backbone.marionette');
var mainTemplate = require('../../templates/mainTemplate.hbs');
var MainContent = require('../models/MainContent');
var Radio = require('backbone.radio');

module.exports = Marionette.View.extend({

    el: '#main-region',

    template: mainTemplate,

    // The model property is a built-in Backbone attribute
    // that defines the model that contains the view's data.
    model: new MainContent(),

    // Backbone Radio lets different modules communicate
    // through a global object, the channel.
    channel: Radio.channel('app'),

    // The built-in Backbone initialize method is
    // called when the instance is created.
    initialize: function() {
        var that = this;

        this.channel.on('navigate', function(page) {
            // When a navigate event is triggered from the
            // AppController, set the activeContent attribute
            // on the model. Navigation occurs before the
            // content is retrieved, so the value is stored
            // to be looked up after the fetch finishes.
            that.model.setActiveContent(page);
            // Render the view if content has been fetched.
            if (that.model.get('content')) {
                that.render();
            }
        });

        // The fetch method is built into Backbone models.
        // A successful call will populate the model.
        // The Backbone fetch method returns a promise
        // so it can be chained with done(), fail(), etc.
        this.model.fetch()
            .fail(function() {
                that.model.setActiveContent('error');
            })
            .always(function() {
                that.render();
            });
    }
});
