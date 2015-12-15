angular.module('jemaat').config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        .state('personalData', {
        	 templateUrl: '/personalData',
        	 controller : 'personalDataController'
        })
        .state('personalData.detail', {
        	url: '/personalDataDetail?idJemaat',
        	templateUrl: '/personalDataDetail',
       	 	controller : 'personalDataDetailController'
        });
});

