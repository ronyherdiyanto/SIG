var orm = require(process.cwd() + "/common/model");

var singleton = function() {
	var self = this;
	
	this.mapDTOtoModel = function(jemaat) {
		var newJemaat = {
				firstName : jemaat.firstName,
				lastName : jemaat.lastName,
				status : jemaat.status,
				memberRelationship : jemaat.memberRelationship,
		        notes : jemaat.notes,
		        nickName : jemaat.nickName,
		        dateOfBirth : jemaat.dateOfBirth,
		        birthPlace : jemaat.birthPlace,
		        etnic : jemaat.etnic,
		        gender : jemaat.gender,
				bloodType : jemaat.bloodType,
				rhesus : jemaat.rhesus,
				agreeDonor : jemaat.agreeDonor,
				donorNotes : jemaat.donorNotes,
				homeAddress : jemaat.homeAddress,
				homePhone : jemaat.homePhone,
				officePhone : jemaat.officePhone,
				mobilePhone : jemaat.mobilePhone,
				email : jemaat.email,
				lastEducation : jemaat.lastEducation,
				educationNotes : jemaat.educationNotes,
				major : jemaat.major,
				title : jemaat.title,
				specialization : jemaat.specialization
					
			};
		return newJemaat;
	}
	
	this.setupService = function(app) {
		app.post('/jemaatRegister', function(req, res) {
			var jemaat = req.body;
			var oJemaat = orm.model("jemaat");
			var newJemaat = self.mapDTOtoModel(jemaat); 

			oJemaat.build(newJemaat).save().then(function(result) {
				res.send(result);
			});

			
		});

		app.get('/jemaatRegister', function(req, res) {
			var oJemaat = orm.model("jemaat");
			oJemaat.findAll().then(function(result) {
				res.send(result);
			});
		});		
		
		app.get('/jemaatRegister/:idJemaat', function(req, res) {
			var oJemaat = orm.model("jemaat");
			oJemaat.findById(req.params.idJemaat).then(function(result) {
				res.send(result);
			});
		});		
	}
	
};

singleton.instance = null;

singleton.getInstance = function(){
    if(this.instance === null){
        this.instance = new singleton();
    }
    return this.instance;
}

module.exports = singleton.getInstance();