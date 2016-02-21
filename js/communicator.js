angular.module('communicator', [])
.factory('communicatorService', function($rootScope) {
    var communicatorService = {};
    
    communicatorService.size = '';
    communicatorService.city = '';
    communicatorService.lang = '';

    communicatorService.changeSize = function(size) {
        this.size = size;
        this.broadcastSize();
    };

    communicatorService.changeCity = function(city) {
        this.city = city;
        this.broadcastCity();
    };

    communicatorService.changeLang = function(lang) {
        this.lang = lang;
        this.broadcastLang();
    };

    communicatorService.broadcastSize = function() {
        $rootScope.$broadcast('handleBroadcastSize');
    };

    communicatorService.broadcastCity = function() {
        $rootScope.$broadcast('handleBroadcastCity');
    };

    communicatorService.broadcastLang = function() {
        $rootScope.$broadcast('handleBroadcastLang');
    };

    return communicatorService;
});