(function() {
    'use strict';

    var app = angular.module('app');

    app.config(routeConfig);

    function routeConfig($stateProvider) {
        $stateProvider.state('index', {
            url: '/',
            templateUrl: '_template/list_movies.html',
            controller: 'MovieListController as mlc'
        }).state('list', {
            url: '/list',
            templateUrl: '_template/list_movies2.html',
            controller: 'MovieListController as mlc'
        }).state('add', {
            url: '/add',
            templateUrl: '_template/add_movie.html',
            controller: 'MovieListController as mlc'
        }).state('single', {
            url: '/viewMovie/:id',
            templateUrl: '_template/display_single_movie.html',
            controller: 'SingleMovieController as smc'
        })}

})();