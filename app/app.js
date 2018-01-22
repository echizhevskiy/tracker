
var myApp = angular.module('App',[]);

myApp.controller('myApp',['$scope', '$http', function ($scope, $http) {
    $scope.getInfo = function(filename){
      $http.get('json/' + filename).then(function(response) {
        $scope.sprints = response.data;
       });
    }

    $scope.addnewdeveloper = function(name, number, adate, status, idname){
        $scope.sprints[idname].tasks.push({developername: name, tasknumber: number, date: adate, done: status});
      //  $http.post('json/persons.json', {developername: name, tasknumber: number, date: adate, done: status});

      $http({
        url: 'json/persons.json',
        method: "POST",
        data: {developername: name, tasknumber: number, date: adate, done: status}
      });
    }

}]);
