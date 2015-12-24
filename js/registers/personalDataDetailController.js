angular.module('jemaat').controller('personalDataDetailController', PersonalDataDetailController);

function PersonalDataDetailController($scope, $http, $location, $stateParams,SigUtility,SigConstants) {
	
	$scope.isDobOpen = false;
	
	$scope.statuses = SigConstants.getStatus();

	$scope.membershipRelationship = SigConstants.getMembershipRelationship();

	$scope.gender = SigConstants.getGender();

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

	this.initialize = function() {
		$http.get(SigUtility.getBaseUrl() + 'jemaatRegister/' + $stateParams.idJemaat).success(
				function(response) {
					$scope.personDetail = response;
				});		

		$scope.open = function($event) {
			$scope.isDobOpen = true;
		};
	}
	this.initialize();
}

