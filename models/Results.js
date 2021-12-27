const mongoose = require('../db/connection')

var Schema = mongoose.Schema;
var Result = new Schema({
  clientCount: {type: Number},
  jobCount: {type: Number},
  jobsDeletedCount: {type: Number},
  contractorCount: {type: Number},
  BRONX:{type: Number},
  QUEENS:{type: Number},
  BROOKLYN:{type: Number},
  MANHATTAN:{type: Number},
  STATEN_ISLAND:{type: Number},
  
});


let result = mongoose.model('Result', Result)
module.exports = result