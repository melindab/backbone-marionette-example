var Marionette = require('backbone.marionette');
var mainTemplate = require('../../templates/mainTemplate.hbs');
var MainContent = require('../models/MainContent');
var Radio = require('backbone.radio');

module.exports = Marionette.View.extend({

    el: '#main-region',

    template: mainTemplate,

    // The model property is a built-in Backbone attribute.
    // Initialize the MainContent model.
    model: new MainContent(),

    channel: Radio.channel('app'),

    // The initialize method is called when the instance is created.
    initialize: function() {
        var that = this;

        this.channel.on('navigate', function(page) {
            that.model.setActiveContent(page);
            that.render();
        });

        // The fetch method is built into Backbone models.
        // A successful call will populate the model.
        this.model.fetch()
            .always(function() {
                that.render();
            });
    }
});
