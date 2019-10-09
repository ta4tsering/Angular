/* chapter1/controller.js */
'use strict';
/*controller */

var helloWorldControllers=angular.module('helloWorldControllers', []);

helloWorldControllers.controller('MainCtrl', ['$scope',function MainCtrl($scope){
                                             $scope.message="Hello World, Mr.Tashi Tsering";
    }]);
helloWorldControllers.controller('ShowCtrl', ['$scope',function ShowCtrl($scope){
                                             $scope.message="Show the World";
    }]);
