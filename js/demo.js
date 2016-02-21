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
  	$scope.languages = [
  		 {
  			name:"English",
  		 	code:'en'
  		 },
	 	 {
	 	 	name:"Français",
  		 	code:'fr'
  		 } 
  		 ,
  		 {
  		 	name:"Español",
  		 	code:'es'
  		 }
  	];
    
  	$scope.changeSize = function(size) {
  		$scope.size=size;
      	$scope.isXL=(size==='xl');
      	communicatorService.changeSize($scope.size);
    }

    $scope.changeCity = function (city) {
      communicatorService.changeCity(city);
    }

    $scope.languageSelected = function (lang) {
    	communicatorService.changeLang(lang.code);
      	$scope.selectedFlag = lang.code;
    }

  }]
  );