var Marionette = require('backbone.marionette');
var navItemTemplate = require('../../templates/navItemTemplate.hbs');

module.exports = Marionette.View.extend({

    tagName: 'li',

    className: 'side-links',

    template: navItemTemplate

});
