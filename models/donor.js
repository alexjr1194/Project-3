const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const donorSchema = new Schema({
  first_name: {type: String, required: true},
  last_name: {type: String, required: true},
  id_number: {type: String, required: true},
  address:{type: String, required: true},
  zip:{type: String, required: true},
  state: {type: String, required: true},
  phone_number: {type: String, required: true},
  email: {type: String, required: true},
  status: {type: String}
},{collection: 'Donor'});

const Donor = mongoose.model("Donor", donorSchema);

module.exports = Donor;
