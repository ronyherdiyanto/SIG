var orm = require(process.cwd() + "/common/model");

module.exports = function(app) {

	app.post('/jemaatRegister', function(req, res) {
		var regs = req.body.regs;
		
		createJemaat(regs);
		
		res.send('Creates Jemaats');
	});
	
	function createJemaat(regs) {
		var oJemaat = orm.model("jemaat");
		var newJemaat = {
			idJemaat : regs.id,
			firstName : regs.firstName,
			lastName : regs.lastName
		};

		oJemaat.build(newJemaat).save();
	}
	
}