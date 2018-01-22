myApp.directive('selectDropDown', function(){
  return  {
    scope: {
        selectOptions: '=',
        selectedName: '='
    },
    transclude: true,
    restrict: 'E',
    templateUrl: 'directives/dropdown.html',
    link: function(scope, element, attr){
        scope.selectOption = function(option){
          
        }
    }

  }
});
