angular.module('demoArea', [])
.directive('demoArea', function () {
  return {
    restrict: 'E',
    controller: 'DemoCtrl',
    templateUrl: 'html/demoArea.html'
  };
})
.controller('DemoCtrl', [
  '$scope',
  'communicatorService',
  function ($scope, communicatorService) {
  	$scope.isXL=true;
  	$scope.selectedLanguage;
  	$scope.languages = ["English", "Français", "Español"];
    
  	$scope.changeSize = function(size) {
  		$scope.size=size;
      	$scope.isXL=(size==='xl');
      	communicatorService.changeSize($scope.size);
    }

    $scope.changeCity = function (city) {
      communicatorService.changeCity(city);
    }

  }]
  );