/**
 * Created by default on 10/5/2015.
 */
"use strict";

angular.module("vFramework").controller("vFrameworkController",
    ["$scope", "$window", "$timeout",
        function($scope, $window, $timeout){
            $scope.isMenuVisible = true;
            $scope.isMenuButtonVisible = true;

            $scope.$on("v-menu-item-selected-event", function(evt, data){
                $scope.routeString = data.route;
            });

            $($window).on("resize.vFramework", function(){
                $scope.$apply(function(){
                    checkWidth();
                });
            });

            $scope.$on("$destroy", function(){
                $($window).off("resize.vFramework");
            });

            var checkWidth = function(){
                var width = Math.max( $($window).width(), $window.innerWidth );
                $scope.isMenuVisible = (width >= 768);
                $scope.isMenuButtonVisible = !$scope.isMenuVisible;
            };

            $timeout( function(){
                checkWidth();
            }, 0);
        }
    ]);