const db = require("../models");

module.exports = {

  findDonations: function(req, res) {
    db.Donation
      .find({_creator: req.params.donor})
      .then(dbDonation => res.json(dbDonation))
      .catch(err => res.status(422).json(err))
  },

  findOneDonation: function(req, res) {
    db.Donation
      .findById(req.params.id)
      .then(dbDonation => res.json(dbDonation))
      .catch(err => res.status(422).json(err))
  },

  findOneAndUpdate: function(req, res) {
    db.Donation
      .findOneAndUpdate({_id: req.params.id}, {$set: {status: "donated"}}, {new: true})
      .then(dbDonation =>{
        console.log(dbDonation);
        res.json(dbDonation)
      })
      .catch(err => res.status(422).json(err))
  },

  createDonation: function(req, res) {
    db.Donation
      .create(req.body)
      .then(dbDonation =>{
        res.json(dbDonation);
        return db.Donor.findOneAndUpdate({_id: dbDonation._creator}, {$push: {donations:dbDonation._id}},{new:true});
      })
      //.then(dbDonation => res.json(dbDonation));
  },

  findActiveDonations: function(req, res) {
    console.log(req);
    db.Donation
      .find({status:"active"})
      .then(dbDonation => {
        res.json(dbDonation)
      })
      .catch(err => res.status(422).json(err))
  }
}
