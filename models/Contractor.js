const mongoose = require('../db/connection')

var Schema = mongoose.Schema;
var Contractor = new Schema({
  jobId: { type: Number },
  ownerId: {type: Number},
  conLicense:{ type: String },
  job__: { type: String },
  conFirstName: { type: String },
  conLastName: { type: String },
  professional_cert: { type: String },
  jobs: [],
  
});


let contractor = mongoose.model('Contractor', Contractor)
module.exports = contractor