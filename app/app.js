var myApp = angular.module('App',[]);

myApp.controller('myApp',['$scope', '$http', function ($scope, $http) {

    $http.get('json/persons.json').then(function(response) {
      $scope.persons = response.data;
    });

    $http.get('json/secondSprint.json').then(function(response){
      $scope.tasks = response.data;
    });

    $http.get('json/thirdSprint.json').then(function(response){
      $scope.ndates = response.data;
    });

    $scope.firstSprint = 'Sprint 1';
    $scope.secondSprint = 'Sprint 2';
    $scope.thirdSprint = 'Sprint 3';
    $scope.release = 'First release';


    /* $scope.formattedAddress = function(persons){
      return persons.developername + ', ' + persons.done;
    } */

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
