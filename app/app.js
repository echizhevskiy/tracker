var myApp = angular.module('App',[]);

myApp.controller('myApp',['$scope', '$http', function ($scope, $http) {
    var response = {};

    $scope.getInfo = function(filename){
      var obj = { content:null };
      var promise = $http.get('json/' + filename);
      promise.then(function(response) {
          obj.content = response;
        //   $scope.persons = response;
          console.log(response);
          console.log(obj.content);
       });
      return obj.content;
    }

    $scope.testHello = function(){
     var obj1 = { content:null };
     obj1.content = [
       { "developername":"Ivan", "tasknumber" : "1.1", "date" : "27.01.2018", "done":true },
       { "developername":"Anton", "tasknumber" : "1.3", "date" : "01.02.2018", "done":false},
       { "developername":"Vladimir", "tasknumber" : "1.5", "date" : "13.05.2018", "done":false },
       { "developername":"Alexander", "tasknumber" : "1.6", "date" : "7.02.2018", "done":true }
     ];
   console.log(obj1.content);
   console.log(obj1);
     return obj1.content;
   }


    /*  $scope.a = getInfo('persons.json'); var aaaaaa = getIn  fo('persons.json'); */
}]);
