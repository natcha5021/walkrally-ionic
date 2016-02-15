angular.module('starter.controllers', [])

.controller('mapCtrl', function($scope) {})

.controller('userscoreCtrl', function($scope) {

})



.controller('rankCtrl', function($scope) {

})


.controller('goCtrl', ['$scope', '$location',function($scope, $location) {
    $scope.goNext = function (hash) { 
$location.path(hash);}

}])

