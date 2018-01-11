var myApp = angular.module('App',[]);

myApp.controller('myApp',['$scope', '$http', function ($scope, $http) {

    $http.get('json/persons.json').success(function(response) {
      $scope.persons = response;
    });

    $http.get('json/secondSprint.json').then(function(response){
      $scope.tasks = response.data;
    });

    $http.get('json/thirdSprint.json').then(function(response){
      $scope.ndates = response.data;
    });

    $scope.variables = {
      firstSprint: 'Sprint 1',
      secondSprint: 'Sprint 2',
      thirdSprint: 'Sprint 3',
      release: 'First release'
    }


    $scope.formattedAddress = function(maks){
      return maks.name + '  ' + maks.address;
    }


     $scope.formattedAddress1 = function(persons){
      return persons.developername + ', ' + persons.done;
    }


    $scope.test =   $scope.persons;


    $scope.maks = {
        name: 'Jon Doe',
        address: 'jondoe@mail.ru'
    }

}]);



/* myApp.directive('myDir', function(){
    return {
        restrict: 'AECM',
        templateUrl: 'directives/content.html',
        replace: true,
        scope: {
          personsObject: "=",
          formattedAddressFunction: "&"
        }
    }
}); */
