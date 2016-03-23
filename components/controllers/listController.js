(function(){
    'use strict';
    
    angular.module('trelloApp')
    .controller('ListController', function($scope, $routeParams, $location, $window, List, Card){
        
        $scope.card =  {};
        $scope.listId = $routeParams.id;
        $scope.list = List.byId($scope.listId);
        $scope.cards = Card.all();
        
        
        $scope.addCard = function(card, listId){
            Card.add(card, listId);
            $scope.card = {};
            $scope.newCard.$setPristine();
            $window.history.back();
        }
        
        
        /**
         * Resolve promise when first record is downloaded
         * Close loading screen
         */
        $scope.cards.$loaded(function() {
            $("body").addClass("loaded");
        });
    });
})();