(function () {
    'use strict';
    var app = angular.module('app');

    app.controller('SingleMovieController', ['MovieService','$stateParams',function (MovieService, $stateParams) {
        var test = $stateParams.id;

        this.getMovie = function(){
            return MovieService.getMovie($stateParams.id);
        },
        this.getTimes = function (n) {

            var ratings = [];
            for (var i = 0; i < n; i++) {
                ratings.push(n);
            }
            return ratings;
        }

    }]);
})();
