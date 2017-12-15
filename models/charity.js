const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const charitySchema = new Schema({
  name: {type: String, required: true},
  org_id_number: {type: String, required: true},
  address:{type: String, required: true},
  zip:{type: String, required: true},
  state: {type: String, required: true},
  phone_number: {type: String, required: true},
  email: {type: String, required: true},
  status: {type: String}
},{collection: 'Charity'});

const Charity = mongoose.model("Charity", charitySchema);

module.exports = Charity;
