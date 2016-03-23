(function(){
    "use strict";
    
    angular
        .module("trelloApp")
        .factory('List', function($firebaseArray, FIREBASE_URL){
            
            var refLists = new Firebase(FIREBASE_URL + "/lists"),
                lists = $firebaseArray(refLists);
            var List = {
                all: function(id){
                    var refList = new Firebase(FIREBASE_URL + "/lists").orderByChild("board").equalTo(id);
                    return $firebaseArray(refList);
                },
                byId: function(listId){
                    
                    return lists.$getRecord(listId);
                },
                add: function(list){
                    
                }
            }
            
            return List;
    });
     
})();