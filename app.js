(function(){
	
	"use strict";
	
	angular
		.module( "trelloApp", ["ngRoute", "firebase"])
        .constant( "DATA_URL", "./mattrello-boards.json")
        .constant( "FIREBASE_URL", "https://mattrello.firebaseio.com/")
		.config(function($routeProvider, $locationProvider){
		    //$locationProvider.html5Mode(true);
        
			$routeProvider
                .when('/',{
                    templateUrl: "./components/views/boards.html",
                    controller: "MainController",
                })
                .when('/boards/:id',{
                    templateUrl: "./components/views/show-board.html",
                    controller: "BoardController",
                })
                .when("/addcard/:id", {
                    templateUrl: "./components/views/add-card.html",
                    controller: "ListController",
                });
		
		});
		
})();