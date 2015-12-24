angular.module('jemaat').controller('personalDataController', PersonalDataController);

function PersonalDataController($scope, $http, $location,SigUtility,$stateParams,SigConstants) {
	var self = this;

	$scope.statuses = SigConstants.getStatus();

	$scope.membershipRelationship = SigConstants.getMembershipRelationship();

	$scope.gender = SigConstants.getGender();

	$scope.bloodType = SigConstants.getBloodType();

	$scope.rhesus = SigConstants.getRhesus();

	$scope.agreeDonor = SigConstants.getAgreeDonor();

	$scope.education = SigConstants.getEducation();

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
	
	$scope.isDobOpen = false;
	
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
	
	$scope.setSelected = function(person) {
		self.clearSelection($scope);
		person.status = 'active';
	};
	
	$scope.open = function($event) {
		$scope.isDobOpen = true;
	};
	
	$scope.submit = function() {
		var req = {
			method : 'POST',
			url : SigUtility.getBaseUrl() + 'jemaatRegister/',
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
	
	this.initialize = function() {
		switch($stateParams.typePage) {
			case 'personDetail':
				$scope.personalDataRoute = 'personalData.detail';
				break;
			case 'churchMembership' :
				$scope.personalDataRoute = 'personalData.churchMembership';
				break;
			case 'familyData' :
				$scope.personalDataRoute = 'personalData.familyData';
				break;
		};
		
		$http.get(SigUtility.getBaseUrl() + 'jemaatRegister').success(function(response) {
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