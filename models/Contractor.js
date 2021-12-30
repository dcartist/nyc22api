const mongoose = require('../db/connection')

var Schema = mongoose.Schema;
var Contractor = new Schema({
  conLicense:{ type: String },
  job__: { type: String },
  conFirstName: { type: String },
  conLastName: { type: String },
  professional_cert: { type: String },
  contractorJobs: [],
  
});


let contractor = mongoose.model('Contractor', Contractor)
module.exports = contractor