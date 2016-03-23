(function(){
    'use strict';
    
    angular.module('trelloApp')
    .controller('BoardController', function($scope, $routeParams, $location, $window, Board, List, Card){
        
        $scope.boardId = $routeParams.id || getItem("board").$id;
        
        $scope.board = Board.byId($scope.boardId);
        $scope.lists = List.all($scope.boardId);
        $scope.cards = Card.all();
        
        $scope.addList = function(list){
            
            $scope.lists.$add({
                board: $scope.boardId,
                name: list.name,
                description: list.description
            });
            
            $scope.newList = {};    // reset new list data bind
            
            $scope.formList.$setPristine();     // reset pristine state for form
        }
        
        $scope.gotoAddCard = function(listId){
            setItem("listId", listId); 
            $location.path('addcard/' + listId);
        }
        
        $scope.removeCard = function(card){
            $scope.cards.$remove(card).then(function(ref){
                var alertId = "#alert-" + card.$id;
            console.log(alertId);
                $(alertId).show();
            });
        }
        
        /**
         * Resolve promise when first record is downloaded
         * Close loading screen
         */
        $scope.lists.$loaded(function() {
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
        
        
        $("#myAlert").alert();
    });
})();