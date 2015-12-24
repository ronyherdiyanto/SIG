var orm = require(process.cwd() +"/common/model"),
	Seq = orm.Seq;

module.exports = {
    model:{
    	idKeanggotaanGereja: {primaryKey: true, type: Seq().INTEGER, autoIncrement: true },
    	idJemaat: {foreignKey: true, type: Seq().INTEGER},
        baptisanChildDate: Seq().STRING,
        churchName : Seq().STRING,
        baptisanDewasa : Seq().STRING,
        baptisanDate : Seq().STRING,
        baptisanDwsJemaat : Seq().STRING,
        pendetaName : Seq().STRING,
        churchAddress : Seq().STRING,
        pendetaBaptDws : Seq().STRING,
        churchAddressBaptDws : Seq().STRING
    },
    options:{
        freezeTableName: true
    }
}
