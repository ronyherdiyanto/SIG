angular.module('jemaat').controller('familyDataController', FamilyDataController);

function FamilyDataController($scope, $http, $location,SigUtility,$stateParams) {
	$scope.isWeddingDateOpen = false;

	$scope.openWeddingDate = function($event) {
		$scope.isWeddingDateOpen = true;
	};
	
	$scope.submitFamilyData = function() {
		var req = {
				method : 'POST',
				url : SigUtility.getBaseUrl() + 'familyData/' + $scope.familyData.idJemaat,
				headers : {
					'Content-Type' : 'application/json'
				},
				data : $scope.familyData
			};
		
		$http(req).success(function(result) {
		});
	};

	
	this.initialize = function() {
		$http.get(SigUtility.getBaseUrl() + 'familyData/' + $stateParams.idJemaat).success(
				function(response) {
					$scope.familyData = response;
				});		
	};
	
	this.initialize();
}
