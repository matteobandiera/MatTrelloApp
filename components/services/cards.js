(function(){
    "use strict";
    
    angular
        .module("trelloApp")
        .factory('Card', function($firebaseArray, FIREBASE_URL, List){
        
            var Card = {
                all: function(){
                  var refCards = new Firebase(FIREBASE_URL + "/cards");
                  return $firebaseArray(refCards);  
                },
                byListId: function(id){
                    var refCards = new Firebase(FIREBASE_URL + "/cards").orderByChild("listId").equalTo(id);
                    return $firebaseArray(refCards);
                },
                add: function(card, listId){
                    var refCards = new Firebase(FIREBASE_URL + "/cards"),
                    cards = $firebaseArray(refCards);
                    cards.$add({
                        listId: listId,
                        name: card.name,
                        description: card.description,
                        authorId: null,
                    });
                },
                remove: function(card){
                    var refCards = new Firebase(FIREBASE_URL + "/cards"),
                    cards = $firebaseArray(refCards);
                    cards.$remove(card);
                }
            }
            
            return Card;
    });
     
})();