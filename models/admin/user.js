var orm = require(process.cwd() +"/common/model"),
	Seq = orm.Seq;


module.exports = {
    model:{
        firstName: Seq().STRING,
        lastName: Seq().STRING
    },
    options:{
        freezeTableName: true
    }
}
