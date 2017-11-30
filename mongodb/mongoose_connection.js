var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27500/medical', { useMongoClient: true });

var contact_structure = {
    email: String,
    cell: String,
}

var contact_schema = new mongoose.Schema(contact_structure, {
    _id: false
});

var drugs_structure = {
    drug: String,
    usage: Number,
}
var drugs_schema = new mongoose.Schema(drugs_structure, {
    _id: false
});

var patient_structure = {
    name: String,
    gender: String,
    contact: contact_schema,
    medical: drugs_schema
}

var patient_schema = new mongoose.Schema(patient_structure);

var PATIENTCLASS = mongoose.model('patient', patient_schema);

module.exports = PATIENTCLASS;