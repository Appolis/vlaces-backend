/**
 * Created by default on 10/5/2015.
 */
"use strict";

angular.module("app").config( function($provide){
    $provide.decorator("$exceptionHandler", ["$delegate", function($delegate){
        return function(exception, cause){
            $delegate(exception, cause);
            alert(exception.message);
        };
    }]);

});