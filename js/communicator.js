angular.module('communicator', [])
.factory('communicatorService', function($rootScope) {
    var communicatorService = {};
    
    communicatorService.size = '';
    communicatorService.city = '';

    communicatorService.changeSize = function(size) {
        this.size = size;
        this.broadcastSize();
    };

    communicatorService.changeCity = function(city) {
        this.city = city;
        this.broadcastCity();
    };

    communicatorService.broadcastSize = function() {
        $rootScope.$broadcast('handleBroadcastSize');
    };

    communicatorService.broadcastCity = function() {
        $rootScope.$broadcast('handleBroadcastCity');
    };

    return communicatorService;
});