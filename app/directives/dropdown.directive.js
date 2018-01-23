myApp.directive('selectDropDown', function(){
  return  {
    scope: {
        selectOptions: '=',
        selectMenu: '=',
        selectSubmenu: '='
    },
    transclude: true,
    restrict: 'AE',
    templateUrl: 'directives/dropdown.html',
    link: function(scope, element, attr){
        scope.showOptions = false;
        scope.toggleOptions = function(){
            scope.showOptions = !scope.showOptions;
        }
    }

  }
});
