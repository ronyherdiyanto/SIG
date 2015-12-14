var routerApp = angular.module('jemaat', ['ui.router','ui.bootstrap']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
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

routerApp.controller('personalDataDetailController', PersonalDataDetailController);
routerApp.controller('personalDataController', PersonalDataController);


function PersonalDataDetailController($scope, $http, $location, $stateParams) {
	this.initialize = function() {
		$http.get("http://localhost:8081/jemaatRegister/" + $stateParams.idJemaat).success(
				function(response) {
					$scope.personDetail = response;
				});		
		
		$scope.submitPublicInfo = function() {
			var req = {
					method : 'POST',
					url : 'http://localhost:8081/jemaatRegister/',
					headers : {
						'Content-Type' : 'application/json'
					},
					data : $scope.personalDetail
				};
			
			$http(req).success(function(result) {
				console.log(result);
			});
		}
	}
	this.initialize();
}

function PersonalDataController($scope, $http, $location) {
	var self = this;
	
	this.clearSelection = function() {
		$scope.personalDatas.forEach(function(person) {
			if (person.status == 'active') {
				person.status = '';
			}
		});		
	}
	
	this.mapModelToDTO = function(person, index) {
		person.index = index;
		if (index == 0) {
			person.status = 'active';
		}else {
			person.status = '';
		}
	}
	
	this.initialize = function() {
		$scope.minDate = new Date();
		
		$scope.jemaat = {
				firstName : '',
				lastName :'',
				status : '',
				memberRelationship : '',
				notes : '',
				nickName : '',
				dateOfBirth : '',
				birthPlace :'',
				etnic :'',
				gender : '',
				bloodType : '',
				rhesus : '',
				agreeDonor : '',
				donorNotes : '',
				homeAddress : '',
				homePhone : '',
				officePhone : '',
				mobilePhone : '',
				email : '',
				lastEducation : '',
				educationNotes : '',
				major : '',
				title : '',
				specialization : ''
		};
		
		$scope.setSelected = function(person) {
			self.clearSelection($scope);
			person.status = 'active';
		};

		$scope.submit = function() {
			console.log('submitted from Personal data');
			var req = {
				method : 'POST',
				url : 'http://localhost:8081/jemaatRegister/',
				headers : {
					'Content-Type' : 'application/json'
				},
				data : $scope.jemaat
			};

			$http(req).success(function(result) {
				self.mapModelToDTO(result,$scope.personalDatas.length);
				$scope.personalDatas.push(result);
			});
		};
		
		$http.get("http://localhost:8081/jemaatRegister").success(function(response) {
					var i = 0;
					response.forEach(function(person) {
						self.mapModelToDTO(person, i);
						console.log(person);
						i++;
					});
					$scope.personalDatas = response;
				});
	}

	this.initialize();
};