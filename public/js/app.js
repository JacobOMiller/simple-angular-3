"use strict";

var app = angular.module('MyApp',['ui.router']);

app.config([
    '$stateProvider',
    function ($stateProvider){
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl:'templates/home.html',
                controller:'MyApp.HomeController'
            })
            .state('about',{
                url:'/about',
                templateUrl:'templates/about.html'
            })
            .state('contact',{
                url:'/contact',
                templateUrl:'templates/contact.html'
            });
    }
])

//create a homepage controller
app.controller('MyApp.HomeController',[
    //list the dependencies for this controller
    '$scope',
    //provide a callback to run once all the dependencies
    //have been created.
    function ($scope){
        console.log('the home controller has loaded');
        //the scope object acts as a public area that is
        //available to markup the page and other objects
        //or services.
        $scope.name = 'bob';
        $scope.age = 45;
        $scope.nameList = ['susan' , 'jane' , 'larry', 'joe','frank'];

        $scope.increaseAge = function (){
            console.log('increaseAge');
            $scope.age++;
        }
        $scope.addListItem = function (){
            console.log('add list item');

            $scope.nameList.push($scope.name);

        }

    }
]);
