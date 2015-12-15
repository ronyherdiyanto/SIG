angular.module('jemaat').controller('personalDataDetailController', PersonalDataDetailController);

function PersonalDataDetailController($scope, $http, $location, $stateParams,SigUtility) {
	this.initialize = function() {
		
		$scope.isDobOpen = false;
		
		$http.get(SigUtility.getBaseUrl() + 'jemaatRegister/' + $stateParams.idJemaat).success(
				function(response) {
					$scope.personDetail = response;
				});		

		$scope.open = function($event) {
			$scope.isDobOpen = true;
		};
		
		$scope.submitPublicInfo = function() {
			var req = {
					method : 'POST',
					url : SigUtility.getBaseUrl() + 'jemaatRegister/' + $scope.personDetail.idJemaat,
					headers : {
						'Content-Type' : 'application/json'
					},
					data : $scope.personDetail
				};
			
			$http(req).success(function(result) {
			});
		};
	}
	this.initialize();
}

