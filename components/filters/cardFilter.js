(function(){
    "use strict";
    
    angular
        .module("trelloApp")
        .filter("onList", function(){
           return function(data, listId){
               if(angular.isArray(data)){
                   var filtered = data.filter(function(value, index){
                       if("listId" in value && value.listId == listId)
                            return true;
                            
                       else
                            return false;
                   });
                   return filtered;
               } else {
                   return data;
               }
           } 
        });
})();