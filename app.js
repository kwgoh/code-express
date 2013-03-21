var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'Edit me';
  $scope.log = function(msg, value) {
    console.log(msg, value);
  };
});
