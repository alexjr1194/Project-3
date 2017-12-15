const db = require("../models");

module.exports = {
  findDonor: function(req, res) {
    db.Donor
      .find({"email": "test_donor@testdonor.com"})
      .then(dbDonor => res.json(dbDonor))
      .catch(err => res.json(422).json(err))
  },

  createDonor: function(req,res) {
    db.donor
      .create(req.body)
      .then(dbDonor => res.json(dbDonor))
      .catch(err => res.json(err));
  },
};
