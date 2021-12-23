// var mongoose = require("mongoose");
const mongoose = require('../db/connection')

var Schema = mongoose.Schema;
var Job = new Schema({
  jobId: { type: Number },
  ownerId: {type: Number},
  job__: { type: String },
  borough: { type: String },
  street_name: { type: String },
  city: { type: String },
  state: { type: String },
  zip: { type: String },
  lot: { type: String },
  job_type: { type: String },
  job_status: { type: String },
  job_status_descrp: { type: String },
  landmarked: { type: String },
  plumbing: { type: String },
  propType: { type: String },
  adult_estab: { type: String },
  other: { type: String },
  paid: { type: String },
  fully_paid: { type: String },
  approved: { type: String },
  fully_permitted: { type: String },
  initial_cost: { type: String },
  total_est__fee: { type: String },
  fee_status: { type: String },
  enlargement_sq_footage: { type: String },
  proposed_height: { type: String },
  proposed_dwelling_units: { type: String },
  zoning_dist1: { type: String },
  propNum: { type: String },
  street_name: { type: String },
  jobDescr: { type: String },
  signoff_date: { type: String },
  building_class: { type: String },
});


let job = mongoose.model('Job', Job)
module.exports = job