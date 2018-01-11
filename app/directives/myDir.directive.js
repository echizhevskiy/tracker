myApp.directive('myDir', function(){
    return {
        restrict: 'AECM',
        templateUrl: 'directives/content.html',
        replace: true,
        scope: {
          persons: "="          
        }
    }
});
