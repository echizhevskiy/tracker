
var myApp = angular.module('App',[]);

myApp.controller('myApp',['$scope', '$http', 'myService', function ($scope, $http, myService, countryservice) {
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


    $scope.testname = myService.sprints;

    $scope.testname1 = myService.getInfo('persons.json');

    $scope.test = myService.variablename;

    countryservice.getallcountries().success(function(data) {
       $scope.countries = data;
    });


}]);


myApp.service('myService',['$http', function($http){

  var serf = this;
  this.getInfo = function(filename){
     return $http.get('json/' + filename).then(function(response) {
       return response.data;
      });
  }

  $http.get('json/persons.json').then(function(response) {
    this.sprints = response.data;
    console.log(this.sprints);
    this.variablename = this.sprints;
    console.log(this.variablename);
   });


}]);


myApp.service('countryservice', function ($http,countryservice) {
  this.getallcountries = function () {
      return $http.get('json/persons.json');
  }
});
