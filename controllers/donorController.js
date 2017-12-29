const db = require("../models");

module.exports = {
  findDonor: function(req, res) {
    console.log("email: " , req.params.donor);
    db.Donor
      .find({"email": req.params.donor})
      .then(dbDonor => {
        console.log(dbDonor)
        console.log(req.params.donor);
        res.json(dbDonor)
      })
      .catch(err => res.json(422).json(err))
  },

  createDonor: function(req,res) {
    db.donor
      .create(req.body)
      .then(dbDonor => res.json(dbDonor))
      .catch(err => res.json(err));
  },
};
