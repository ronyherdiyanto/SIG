angular.module('jemaat').controller('churchMembershipController', ChurchMembershipController);

function ChurchMembershipController($scope, $http, $location, $stateParams,SigUtility,SigConstants) {
	
	$scope.baptisanType = SigConstants.getBaptisanType();
	$scope.isBaptisanDateOpen = false;
	$scope.isBaptisanChildDateOpen = false;
		
	$scope.openBaptisanDate = function() {
		$scope.isBaptisanDateOpen = true;
	};
	
	$scope.openBaptisanChildDate = function() {
		$scope.isBaptisanChildDateOpen = true;
	};
	
	$scope.submitChurchMembership = function() {
		var req = {
				method : 'POST',
				url : SigUtility.getBaseUrl() + 'churchMembership/' + $scope.churchMembership.idJemaat,
				headers : {
					'Content-Type' : 'application/json'
				},
				data : $scope.churchMembership
			};
		
		$http(req).success(function(result) {
		});
	};
	
	this.initialize = function() {
		$http.get(SigUtility.getBaseUrl() + 'churchMembership/' + $stateParams.idJemaat).success(
				function(response) {
					$scope.churchMembership = response;
				});		
		
	};
	
	this.initialize();

};

