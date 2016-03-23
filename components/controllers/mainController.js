(function(){
	
	'use strict';
	
	angular
		.module('trelloApp')
		.controller('MainController',function($scope, $location, $window, Board){
			
            /*Board.boards().then(function(data){
                $scope.boards = data;
            });*/
            
            $scope.boards = Board.all;
            $scope.board = {};
            
            $scope.cardPriorities = [
                {value: "low-priority", name: "Low"},
                {value: "normal-priority", name: "Normal"},
                {value: "high-priority", name: "Urgent"}
            ];
            
            /**
             * Go to board
             */
            $scope.goToBoard = function(board) {
                setItem("board", board); 
                $location.path('boards/' + board.$id);
            }
            /**
             * Add a new board
             */
            $scope.addBoard = function(board) {
                $scope.boards.$add({
                    name: board.name,
                    description: board.description
                });
                
                $scope.board = {};  // reset new board obj
                
                $scope.newBoard.$setPristine(); // reset form to pristine state
            }
            /**
             * Resolve promise when first record is downloaded
             * Close loading screen
             */
            $scope.boards.$loaded(function() {
                $("body").addClass("loaded");
            });
            
            /**
             * Local Storage managment
             */
            function normalizeKey(key){
                return "matrello_" + key;
            }
            /**
             * Set local storage item
             */
            function setItem(key, value) {
                var nkey = normalizeKey(key);
                
                $window.localStorage.setItem( nkey, angular.toJson(value));
            }
            
            function getItem(key) {
                var nkey = normalizeKey(key);
                return angular.fromJson($window.localStorage.getItem(nkey));
            }
		});
	
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        });
})();