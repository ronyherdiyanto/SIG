var orm = require(process.cwd() +"/common/model"),
	Seq = orm.Seq;

module.exports = {
    model:{
        idJemaat: {primaryKey: true, type: Seq().INTEGER, autoIncrement: true },
        firstName: Seq().STRING,
        lastName : Seq().STRING,
        status : Seq().STRING,
        memberRelationship : Seq().STRING,
        notes : Seq().STRING,
        nickName : Seq().STRING,
        dateOfBirth : Seq().STRING,
        birthPlace : Seq().STRING,
        etnic : Seq().STRING,
        gender : Seq().STRING,
        
        bloodType : Seq().STRING,
        rhesus : Seq().STRING,
        agreeDonor : Seq().STRING,
        donorNote : Seq().STRING,
        
        homeAddress : Seq().STRING,
        homePhone : Seq().STRING,
        officePhone : Seq().STRING,
        mobilePhone : Seq().STRING,
        email : Seq().STRING,
        
        lastEducation : Seq().STRING,
        educationNotes : Seq().STRING,
        major : Seq().STRING,
        title : Seq().STRING,
        specialization : Seq().STRING
    },
    options:{
        freezeTableName: true
    }
}
