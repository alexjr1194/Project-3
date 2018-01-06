const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const donationSchema = new Schema({

  _creator: {type: Schema.Types.ObjectId, ref: "Donor"},
  todayDate: {type: String, required: true},
  preparedOn: {type: String, required: true},
  name: {type: String, required: true},
  quantity: {type: String, required: true},
  preparedTime: {type: String, required: true},
  shelfLife: {type: String, required: true},
  ingredients: {type: String, required: true},
  location: {type: String, required: true},
  photo: {type: String, required: true},
  shouldKnow: {type: String}
  status:{type: String, default: "active"}
})

const Donation = mongoose.model("Donation", donationSchema);

module.exports = Donation;
