var orm = require(process.cwd() + "/common/model");

var singleton = function() {
	var self = this;
	
	this.mapDTOtoModel = function(familyData) {
		var newFamilyData = {
				idJemaat: familyData.idJemaat,
		        fatherName: familyData.fatherName,
		        motherName : familyData.motherName,
		        wifehusbandName : familyData.wifehusbandName,
		        weddingDate : familyData.weddingDate
			};
		return newFamilyData;
	}
	
	this.setupService = function(app) {
		app.post('/familyData/:idJemaat', function(req, res) {
			console.log(req.params.idJemaat);
			var familyData = req.body;
			var oFamilyData = orm.model("familyData");
			var newFamilyData = self.mapDTOtoModel(familyData);
			
			oFamilyData.update(
					newFamilyData,
					{
						where : {idJemaat : req.params.idJemaat}
					}
			);
		});
		
		app.get('/familyData/:idJemaat', function(req, res) {
			var oFamilyData = orm.model("familyData");
			oFamilyData.findById(req.params.idJemaat).then(function(result) {
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