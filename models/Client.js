const mongoose = require('../db/connection')

var Schema = mongoose.Schema;
var Client = new Schema({
  ownerId: {type: Number},
  ownFirstName: { type: String },
  ownLastName: { type: String },
  ownBusinessName: { type: String },
  owner_s_house_number: { type: String },
  non_profit: { type: String },
  owner_shouse_street_name: { type: String },
  owner_sphone__: { type: String },
  
  clientJobs: [],
});


let client = mongoose.model('Client', Client)
module.exports = client