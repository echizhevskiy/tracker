
var myApp = angular.module('App',[]);

myApp.controller('myApp',['$scope', '$http', 'myService', function ($scope, $http, myService) {
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


    $scope.testname = myService.getInfo();

}]);


myApp.service('myService',['$http', function($http){

  var serf = this;
  this.getInfo = function(filename){
    $http.get('json/' + filename).then(function(response) {
      this.sprints = response.data;
     });
     return serf.sprints;
  }

}]);
