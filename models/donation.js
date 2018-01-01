const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const donationSchema = new Schema({
  today_date: {type: String, required: true},
  name: {type: String, required: true},
  quantity: {type: String, required: true},
  prepared_on:{type: String, required: true},
  shelf_life:{type: String, required: true},
  ingredients: {type: String, required: true},
  locations: {type: String, required: true},
  should_know: {type: String, required: true},
  photo: {type: String}
},{collection: 'Donation'});

const Donation = mongoose.model("Donation", donationSchema);

module.exports = Donation;