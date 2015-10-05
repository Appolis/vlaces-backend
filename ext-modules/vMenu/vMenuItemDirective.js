/**
 * Created by default on 10/5/2015.
 */
"use strict";

angular.module("vMenu").directive("vMenuItem", function(){
    return {
        require: "^vMenu",
        scope: {
            label: '@',
            icon: "@",
            route: '@'
        },
        templateUrl: "ext-modules/vMenu/vMenuItemTemplate.html",
        link: function (scope, el, attr, ctrl) {
            el.on('click', function(evt){
                evt.stopPropagation();
                evt.preventDefault();
                scope.$apply( function(){

                    scope.isActive = function(){
                        return el === ctrl.getActiveElement();
                    };
                    ctrl.setActiveElement(el);
                    ctrl.setRoute(scope.route);
                });
            });
        }
    };
});