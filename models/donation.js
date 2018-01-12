const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const donationSchema = new Schema({
  _creator: {type: Schema.Types.ObjectId, ref: "Donor"},
  _charity: {type: Schema.Types.ObjectId, ref: "Charity"},
  todayDate: {type: Date, default: Date.now},
  name: {type: String, required: true},
  quantity: {type: String, required: true},
  preparedTime: {type: String, required: true},
  preparedOn: {type:Date, default: Date.now},
  shelfLife: {type: String, required: true},
  ingredients: {type: String, required: true},
  address: {type: String, required: true},
  photo: {type: String, required: true},
  status:{type: String, default: "active"},
  shouldKnow: {type:String}
})

const Donation = mongoose.model("Donation", donationSchema);

module.exports = Donation;
