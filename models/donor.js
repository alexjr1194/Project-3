const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const bcrypt = require('bcrypt');
const donorSchema = mongoose.Schema({
  local: {
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    id_number: {type: String, required: true},
    address:{type: String, required: true},
    zip:{type: String, required: true},
    state: {type: String, required: true},
    phone_number: {type: String, required: true},
    status: {type: Boolean, default: false},
    donations: [
      {
        type: Schema.Types.ObjectId,
        ref: "Donation"
      }
    ]
  }
}, {collection: 'Donor'});

// donorSchema.methods.generateHash = function(password){
// 	return bcrypt.hashSync(password, bcrypt.genSaltSync(9));
// }
//
// donorSchema.methods.validPassword = function(password){
// 	return bcrypt.compareSync(password, this.local.password);
// }

const Donor = mongoose.model("Donor", donorSchema);

module.exports = Donor;
