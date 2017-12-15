const db = require("../models");

module.exports = {
  findCharity: function(req, res) {
    db.Charity
      .find({"email": "tes_charity@testcharity.com" })
      .then(dbCharity => res.json(dbCharity))
      .catch(err => res.status(422).json(err));
  },

  createCharity: function(req, res) {
    db.Charity
      .create(req.body)
      .then(dbCharity => res.json(dbCharity))
      .catch(err => res.json(err));
  }
}
