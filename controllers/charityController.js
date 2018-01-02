const db = require("../models");

module.exports = {
  findCharity: function(req, res) {
    console.log(req.params.id);
    db.Charity
      .find({"email": req.params.id })
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
