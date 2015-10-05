/**
 * Created by default on 10/5/2015.
 */
"use strict";

angular.module("vFramework")
    .directive("vFramework", function(){
        return {
            transclude: true,
            scope: {
                title: '@',
                subtitle: '@',
                iconFile: '@'
            },
            controller: "vFrameworkController",
            templateUrl: "ext-modules/vFramework/vFrameworkTemplate.html"

        };
    });