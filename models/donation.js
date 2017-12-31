const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const donationSchema = new Schema({
  _creator: {type: Schema.Types.ObjectId, ref: "Donor"},
  date: {type: Date, default: Date.now},
  donation_description: {type: String, required: true},
  quantity: {type: String, required: true},
  prepared_time: {type: String, required: true},
  shelf_life: {type: String, required: true},
  ingredients: {type: String, required: true},
  location: {type: String, required: true},
  photo_url: {type: String, required: true},
  status:{type: String, default: "active"}
})

const Donation = mongoose.model("Donation", donationSchema);

module.exports = Donation;
