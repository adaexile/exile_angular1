(function () {
    'use strict';
    var app = angular.module('app');

    app.controller('AddMovieController', ['MovieService','$scope',function (MovieService, $scope) {
        var self = this;

        self.movie = {};
        self.movie.name;
        self.movie.description;
        self.movie.director;
        self.movie.released;
        self.movie.language;
        self.movie.ratings;
        self.movie.characters= [];


        $scope.charactors = [];


        this.getMovie = function(){
            return MovieService.getMovie($stateParams.id);
        },
        this.getTimes = function (n) {

                var ratings = [];
                for (var i = 0; i < n; i++) {
                    ratings.push(n);
                }
                return ratings;
        },
        this.addMovie = function(){
            //self.movie.character =  $scope.charactors;
            MovieService.addMovie(self.movie);
            MovieService.go("/")
        },

        self.addItem = function (character) {
            var customer = {};
            customer[$scope.role] = $scope.name;
            //Add new customer to directive scope
            $scope.charactors.push(customer);
            self.movie.characters.push(customer);
            MovieService.addCharacter(customer);

        };

        $scope.addItem = function (character) {
            var cust = {};
            cust[character.character.role] = character.character.actor;
            $scope.charactors.push(cust);
            self.movie.characters.push(cust);
            MovieService.addCharacter(cust);
        };

    }]);

    app.directive('character', ['MovieService',function ( MovieService) {

        var template = '<div class="form-group">' +
            '<label class="control-label col-sm-2" for="role">Role:</label>' +
            '<div class="col-sm-2"><input type="text" class="form-control" id="role" placeholder="Enter title" ng-model="character.role"></div>' +
            '<label class="control-label col-sm-1" for="actor">Actor:</label>' +
            '<div class="col-sm-3">' +
            '<input type="text" class="form-control" id="actor" placeholder="Enter title" ng-model="character.actor"></div>' +
            '<button type="button" class="btn btn-default" ng-click="addItem({character})">&nbspAdd&nbsp</button></div>' +
            '<ul class="list-group">' +
            '<li class="list-group-item" ng-repeat="charactor in charactors">' +
            '<label class="control-label">{{charactor}}</label></li>' +
            '</ul>';

        return {
            restrict: 'EA', //Default in 1.3+
            transclude: true,
            scope: {
                characters: '=',
                add: '&'
            },
            controller: 'AddMovieController',
            template: template
        }
    }]);


})();