(function(){
    "use strict";
    
    angular
        .module("trelloApp")
        .factory('Board', function($firebaseArray, FIREBASE_URL){
           // reference to firebase 
           var ref = new Firebase(FIREBASE_URL);
           var  refBoards = new Firebase(FIREBASE_URL + "/boards"),
                refLists = new Firebase(FIREBASE_URL + "/lists"),
                refCard = new Firebase(FIREBASE_URL + "/cards");
           
           var  boards = $firebaseArray(refBoards),
                lists = $firebaseArray(refLists),
                cards = $firebaseArray(refCard);
                
            var Board = {
                all: boards,
                
                byId: function(id){
                    return boards.$getRecord(id);
                }
            }
            return Board;
        });
})();