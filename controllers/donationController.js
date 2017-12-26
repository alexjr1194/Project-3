const db = require("../models");

module.exports = {
  findDonations: function(req, res) {
    db.donation
      .find({_creator: req.params.donor})
      .then(dbDonation => res.json(dbDonation))
      .catch(err => res.status(422).json(err))
  },

  findOneDonation: function(req, res) {
    db.donation
      .findById({req.params.id})
      .then(dbDonation => res.json(dbDonation))
      .catch(err => res.status(422).json(err))
  }

  createDonation: function(req, res) {
    db.donation
      .create(req.body)
      .then(dbDonation => res.json())
  }
}
