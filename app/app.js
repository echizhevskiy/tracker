
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

    $scope.menuLists = [
      {
        "id": 1,
        "menu": "realease 1",
        "submenu": [
          {
            'id': 1,
            'name': "sprint-1.1",
            'sprintsubmenu': [{
              'id': 1,
              'name': "sprint tasks 1.1.1"
            },
            {
              'id': 2,
              'name': "sprint tasks 1.1.2"
            }
            ]
           },
          {
            'id': 2,
            'name': "sprint-1.2",
            'sprintsubmenu': [{
              'id': 1,
              'name': "sprint tasks 1.2.1"
            },
            {
              'id': 2,
              'name': "sprint tasks 1.2.2"
            }
          ]
          }
        ]
      },
      {
        'id': 2,
        "menu": "realease 2",
        "submenu": [
          {
            'id': 1,
            'name': "sprint-2.1",
            'sprintsubmenu': [{
              'id': 1,
              'name': "sprint tasks 2.1.1"
            },
            {
              'id': 2,
              'name': "sprint tasks 2.1.2"
            }
            ]
            },
          {
            'id': 2,
            'name': "sprint-2.2",
            'sprintsubmenu': [{
              'id': 1,
              'name': "sprint tasks 2.2.1"
            },
            {
              'id': 2,
              'name': "sprint tasks 2.2.2"
            }
            ]
          }
        ]
      },
    ];

    $scope.countriesList = ["India", "Africa", "France", "asas"];
    $scope.selectedName = "India";

}]);
