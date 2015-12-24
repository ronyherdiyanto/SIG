var orm = require(process.cwd() + "/common/model");

var singleton = function() {
	var self = this;
	
	this.mapDTOtoModel = function(churchMembership) {
		var newChurchMembership = {
				idJemaat : churchMembership.idJemaat,
				baptisanChildDate: churchMembership.baptisanChildDate,
		        churchName : churchMembership.churchName,
		        baptisanDewasa : churchMembership.baptisanDewasa,
		        baptisanDate : churchMembership.baptisanDate,
		        baptisanDwsJemaat : churchMembership.baptisanDwsJemaat,
		        pendetaName : churchMembership.pendetaName,
		        churchAddress : churchMembership.churchAddress,
		        pendetaBaptDws : churchMembership.pendetaBaptDws,
		        churchAddressBaptDws : churchMembership.churchAddressBaptDws
			};
		return newChurchMembership;
	}
	
	this.getNewChurchMembership = function(oldIdJemaat) {
		var churchMembership = {
				idJemaat : oldIdJemaat,
				baptisanChildDate: '',
		        churchName : '',
		        baptisanDewasa : '',
		        baptisanDate : '',
		        baptisanDwsJemaat : '',
		        pendetaName : '',
		        churchAddress : '',
		        pendetaBaptDws : '',
		        churchAddressBaptDws : ''
		};
		return churchMembership;
	}
	
	this.setupService = function(app) {
		app.post('/churchMembership/:idJemaat', function(req, res) {
			console.log(req.params.idJemaat);
			var churchMembership = req.body;
			var oChurchMembership = orm.model("keanggotaanGereja");
			var newChurchMembership = self.mapDTOtoModel(churchMembership);
			
			oChurchMembership.update(
					newChurchMembership,
					{
						where : {idJemaat : req.params.idJemaat}
					}
			);
		});
		
		app.get('/churchMembership/:idJemaat', function(req, res) {
			var oChurchMembership = orm.model("keanggotaanGereja");
			oChurchMembership.findById(req.params.idJemaat).then(function(result) {
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