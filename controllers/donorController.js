const db = require("../models");

module.exports = {
  findDonor: function(req, res) {
    console.log("email: " , req.params.donor);
    db.Donor
      .find({"email": req.params.donor})
      //.populate('donations')
      .then(dbDonor => {
        console.log(dbDonor)
        console.log(req.params.donor);
        res.json(dbDonor)
      })
      .catch(err => res.json(422).json(err))
  },

  populatedDonor: function(req, res) {
    db.Donor
      .find({"email": req.params.donor})
      .populate('donations')
      .then(dbDonor => {
        console.log(dbDonor);
        res.json(dbDonor);
      })
  },

  createDonor: function (req, res) {
    console.log(req.body);
    db.Donor
      .create(req.body)
      .then(dbDonor => {
        console.log(req.body, dbdonor);
        res.json(dbDonor)
      })
      .catch(err => res.json(err));
  },
};
