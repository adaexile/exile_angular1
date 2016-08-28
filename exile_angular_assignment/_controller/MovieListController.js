(function () {
    'use strict';

    var app = angular.module('app');

    app.controller('MovieListController', ['MovieService', function (MovieService) {

        this.getAllMovies = function () {
            return MovieService.getAllMovies();
        }, this.getTimes = function (n) {

            var ratings = [];
            for (var i = 0; i < n; i++) {
                ratings.push(n);
            }
            return ratings;
        }
    }]);
})();