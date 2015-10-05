/**
 * Created by default on 10/5/2015.
 */
"use strict";

angular.module("vMenu").controller("vMenuController",
    ["$scope", "$rootScope",
        function($scope, $rootScope){

            this.getActiveElement = function(){
                return $scope.activeElement;
            };

            this.setActiveElement = function (el) {
                $scope.activeElement = el;
            };

            this.setRoute = function(route){
                $rootScope.$broadcast("v-menu-item-selected-event", { route: route } );
            };
        }
    ]);