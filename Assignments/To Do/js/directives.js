/**
 * Created by danielgraff1 on 1/7/16.
 */
(function () {
    'use strict';

    angular.module('homeDirectives', [])

            .directive('tdEmptylist', tdEmptylist) // td-emptylist
            .directive('tdRepeat', tdRepeat);

    function tdEmptylist() {
        return {
            restrict: 'E',
            template: '<div ng-hide="filteredItems.length">Time to relax</div>'
        };
    }

    function tdRepeat() {
        return {
            restrict: 'E',
            templateUrl: 'templates/tdRepeat.html'
        };
    }

    
}());