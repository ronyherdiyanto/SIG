var orm = require(process.cwd() +"/common/model"),
	Seq = orm.Seq;

module.exports = {
    model:{
        idJemaat: {type : Seq().STRING, primaryKey : true},
        firstName: Seq().STRING,
        lastName : Seq().STRING,
        status : Seq().STRING,
        memberRelationship : Seq().STRING,
        notes : Seq().STRING,
        nickName : Seq().STRING,
        dateOfBirth : Seq().STRING,
        etnic : Seq().STRING
    },
    options:{
        freezeTableName: true
    }
}
