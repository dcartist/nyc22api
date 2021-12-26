const mongoose = require('../db/connection')

var Schema = mongoose.Schema;
var Result = new Schema({
  clientCount: {type: Number},
  jobCount: {type: Number},
  jobsDeletedCount: {type: Number},
  contractorCount: {type: Number},
  
});


let result = mongoose.model('Result', Result)
module.exports = result