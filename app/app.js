var myApp = angular.module('App',[]);

myApp.controller('myApp',['$scope', '$http', function ($scope, $http) {
    // $scope.sprints = {tasks:null};

    $scope.getInfo = function(filename){
      $http.get('json/' + filename).then(function(response) {
        $scope.sprints = response.data;
       });
    }
}]);
