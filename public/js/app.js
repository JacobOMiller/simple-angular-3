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
            })
            .state('httprequest',{
                url:'/httprequest',
                templateUrl:'templates/httprequest.html',
                controller:'MyApp.httpRequestController'
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

app.controller('MyApp.httpRequestController',[
    '$scope', '$http',
    function ($scope, $http){
        console.log('new controller for httpRequest');
        //post object to store post info
        $scope.post = {};
        $scope.postList = [];


        $scope.create = function (){
            console.log('trying to create a post',$scope.post);
            //make a call to the server
            $http ({
                url:'http://localhost:3000/posts',
                //use the post method because we want to
                //post / create data on the server
                method:'POST',
                //Specify the data that we want to save
                data:$scope.post
            })
            .success (function (response){
                console.log('this is the response' , response);
            })
            .error (function (response){
                console.error('this is the error' , response);
            })
        }


        $scope.readAll = function (){
            console.log('read all posts is working');

            //Make a call to grab all the posts objects
            $http ({
                url:'http://localhost:3000/posts',
                //use the post method because we want to
                //post / create data on the server
                method:'Get'
            })
            .success (function (response){
                console.log('this is the response' , response);
                $scope.postList = response;
            })
            .error (function (response){
                console.error('this is the error' , response);
            })
        }

        $scope.updatePost = function (){
            console.log('update post');

            $http ({
                url:'http://localhost:3000/posts/'+ $scope.post.id,
                //use the PUT method because we want to
                //update data on the server
                method:'PUT',
                //Specify the data that we want to save
                data:$scope.post
            })
            .success (function (response){
                console.log('this is the response' , response);
            })
            .error (function (response){
                console.error('this is the error' , response);
            })

        }
        $scope.deletePost = function (){
            console.log('delete post button is working');
            $http ({
                url:'http://localhost:3000/posts/'+ $scope.post.id,
                //use the PUT method because we want to
                //update data on the server
                method:'DELETE',
                //Specify the data that we want to save
                data:$scope.post
            })
            .success (function (response){
                console.log('this is the response' , response);
            })
            .error (function (response){
                console.error('this is the error' , response);
            })

        }
    }


    

]);
