/**
 * Created by default on 10/5/2015.
 */
"use strict";

angular.module("vMenu").directive("vMenu", function(){
    return {
        scope:{

        },
        transclude: true,
        templateUrl: "ext-modules/vMenu/vMenuTemplate.html",
        controller: "vMenuController",
        link: function(scope, el, attr){
        }
    };
});