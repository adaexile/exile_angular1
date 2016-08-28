(function() {
    'use strict';

    var app = angular.module('app');

    // register a dataService
    app.service('MovieService', movieService);

    function movieService($location) {
        var self = this;
        self.characters = [];
        var lastId = 3;

         var movies = [
            {
                'id': 1,
                'name': 'The Matrix',
                'description': 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
                'director': 'Frank Darabont',
                'released': 1999,
                'language': 'English',
                'characters': [{'Neo': 'Keanu Reeves'}, {'Morpheus': 'Laurence Fishburne'}, {'Trinity': 'Carrie-Anne Moss'}, {'Smith': 'Hugo Weaving'}],
                'ratings':4
            },
            {
                'id': 2,
                'name': 'The Shawshank Redemption',
                'description': 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
                'director': 'Frank Darabont',
                'released': 1994,
                'language': 'English',
                'characters': [{'Neo': 'Keanu Reeves'}, {'Morpheus': 'Laurence Fishburne'}, {'Trinity': 'Carrie-Anne Moss'}, {'Smith': 'Hugo Weaving'}],
                'ratings':5
            },
            {
                'id': 3,
                'name': 'The Dark Knight ',
                'description': 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.',
                'director': 'Frank Darabont',
                'released': 1972,
                'language': 'English',
                'characters': [{'Neo': 'Keanu Reeves'}, {'Morpheus': 'Laurence Fishburne'}, {'Trinity': 'Carrie-Anne Moss'}, {'Smith': 'Hugo Weaving'}],
                'ratings':3
            }];

        var currentMovie = movies[0];

        self.getAllMovies = function() {
            return movies;
        };

        self.addMovie = function(movie) {
            movie.id = ++lastId;
            movie.characters = self.characters;
            movies.push(movie);
        };

        self.getMovie = function(id) {
            for(var m in movies)
            {
                if( movies[m].id == id){
                    currentMovie = movies[m];
                    return new Array(movies[m]);
                }
            }
            return null;
        };
        self.getEditingMovie = function(){
            return currentMovie;
        };

        self.go = function ( path ) {
            $location.path( path );
        };

        self.addCharacter = function (character) {
            self.characters.push(character);
        };

        // self.setMovie = function (movie) {
        //     self.movie.name = movie.name;
        //     self.movie.description = movie.description;
        //     self.movie.director = movie.director;
        //     self.movie.released = movie.released;
        //     self.movie.language = movie.language;
        //     self.movie.ratings = movie.ratings;
        // }


    }


})();