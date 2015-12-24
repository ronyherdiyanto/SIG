angular.module('jemaat').config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        .state('personalData', {
        	 url: '/personalData?typePage',
        	 templateUrl: '/personalData',
        	 controller : 'personalDataController'
        })
        .state('personalData.detail', {
        	url: '/personalDataDetail?idJemaat',
        	templateUrl: '/personalDataDetail',
       	 	controller : 'personalDataDetailController'
        })
	    .state('personalData.churchMembership', {
	    	url: '/churchMembership?idJemaat',
	    	templateUrl: '/churchMembership',
	   	 	controller : 'churchMembershipController'
	   	 	
	    })
	    .state('personalData.familyData', {
	    	url: '/familyData?idJemaat',
	    	templateUrl: '/familyData',
	   	 	controller : 'familyDataController'
	   	 	
	    });
});

