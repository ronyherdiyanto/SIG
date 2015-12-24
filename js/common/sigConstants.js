angular.module('jemaat').service("SigConstants", function(){
	
	this.getBaptisanType = function() {
		return ['Dewasa','Sidi'];
	}
	
	this.getStatus = function() {
		return ['Baptisan','Simpatisan','Sidi'];
	}
	
	this.getMembershipRelationship = function() {
		return ['Kepala Keluarga','Orang Tua','Kakek','Nenek','Suami','Mertua','Istri','Menantu','Cucu','Anak','Saudara Kandung','Famili','Lainnya'];
	}
	
	this.getGender = function() {
		return ['Laki-laki','Perempuan'];
	}
	
	this.getBloodType = function() {
		return ['A','AB','B','O'];
	}
	
	this.getRhesus = function() {
		return ['Positive','Megatif'];
	}

	this.getAgreeDonor = function() {
		return ['Ya','Tidak','Lain-Lain'];
	}
	
	this.getEducation = function() {
		return ['SD','SMP','SMA','Universitas','Pasca Sarjana','Doctoral','Lain-Lain'];
	}
});