(function () {
    'use strict';

    var app = angular.module('app',['ui.router']);

    app.controller('ApplicationController', ['$state', appController]);


    function appController($state) {
        var vm = this;
        vm.title = 'Movie Database';

        $state.go('index');

        vm.changeText = function () {
            vm.changedTextStr = 'This Text got changed';
        };

        vm.submitForm = function () {
            vm.num = vm.num + 50;
        };
    }

})();