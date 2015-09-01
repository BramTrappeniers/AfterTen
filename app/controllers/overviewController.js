'use strict';

define(['app'], function (app) {

    var injectParams = [];

    var OverviewController = function () {
        console.log('Loading overview ...');
    };

    OverviewController.$inject = injectParams;

    app.register.controller('OverviewController', OverviewController);

});