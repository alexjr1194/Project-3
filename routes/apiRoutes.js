const router = require("express").Router();
const charityController = require("../controllers/charityController.js");
const donorController = require("../controllers/donorController.js");

router.route("/donor")
  .get(donorController.findDonor)
  .post(donorController.createDonor)

router.route("/charity")
  .get(charityController.findCharity)
  .post(charityController.createCharity)

module.exports = router;
