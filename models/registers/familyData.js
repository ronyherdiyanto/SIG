var orm = require(process.cwd() +"/common/model"),
	Seq = orm.Seq;

module.exports = {
    model:{
    	idFamilyData: {primaryKey: true, type: Seq().INTEGER, autoIncrement: true },
    	idJemaat: {foreignKey: true, type: Seq().INTEGER},
        fatherName: Seq().STRING,
        motherName : Seq().STRING,
        wifehusbandName : Seq().STRING,
        weddingDate : Seq().STRING,
    },
    options:{
        freezeTableName: true
    }
}
