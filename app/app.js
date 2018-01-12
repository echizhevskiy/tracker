var myApp = angular.module('App',[]);

myApp.controller('myApp',['$scope', '$http', function ($scope, $http) {
    var response = { };

     $scope.getInfo = function(filename){
       $http.get('json/' + filename).success(function(response) {
         $scope.persons = response;
          console.log($scope.persons);
       });
      return response;
    }

    $scope.getInfo('persons.json');

}]);
