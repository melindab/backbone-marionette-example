var $ = require('jquery');
var Marionette = require('backbone.marionette');
var Radio = require('backbone.radio');
var NavItemView = require('./NavItemView');
var RoutesCollection = require('../collections/RoutesCollection');

module.exports = Marionette.CollectionView.extend({

    el: '#nav-mobile',

    channel: Radio.channel('app'),

    childView: NavItemView,

    collection: new RoutesCollection(),

    ui: {
        navItem: 'a'
    }

});
