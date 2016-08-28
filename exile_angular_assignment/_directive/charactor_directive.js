(function() {
    'use strict';

    var app = angular.module('app');

    app.controller('MainCtrl', function (AddMovieController,$scope) {
        $scope.mandat = { name: "John", surname: "Doe", person: { id: 1408, firstname: "sams" } };
        $scope.addItem = function (character) {
            $scope.add();
            alert(character);

            //Add new customer to directive scope
            $scope.items.push({
                name: 'New Directive Controller Item'
            });
        };
    });


    app.directive('character1', ['MovieService',function ( MovieService) {

            var template = '<div class="form-group">' +
            '<label class="control-label col-sm-2" for="role">Role:</label>' +
            '<div class="col-sm-2"><input type="text" class="form-control" id="role" placeholder="Enter title" ng-model="role"></div>' +
            '<label class="control-label col-sm-1" for="actor">Actor:</label>' +
            '<div class="col-sm-3">' +
            '<input type="text" class="form-control" id="actor" placeholder="Enter title" ng-model="name"></div>' +
            '<button type="button" class="btn btn-default" ng-click="addItem()">&nbspAdd&nbsp</button></div>' +
            '<ul><li ng-repeat="character in charactors">{{ ::character }}</li></ul>';

        return {
            restrict: 'EA', //Default in 1.3+
            transclude: true,
            scope: {
                characters: '=',
                add: '&'
            },
            controller: 'MainCtrl',
            template: template
        }
    }]);
})();
