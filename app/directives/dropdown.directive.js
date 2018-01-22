myApp.directive('selectDropDown', function(){
  return  {
    scope: {
        selectOptions: '=',
        selectedName: '='
    },
    restrict: 'E',
    templateUrl: 'directives/dropdown.html',
    link: function(scope, element, attr){
        scope.showOptions = false;
        scope.toggleOptions = function(scope, element, attr){
          scope.showOptions = !scope.showOptions;
        }
        scope.selectOption = function(option){
          scope.selectedName = option;
        }
    }

  }
});
