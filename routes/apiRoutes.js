const User = require('../models/donor.js');
const router = require("express").Router();
const charityController = require("../controllers/charityController.js");
const donorController = require("../controllers/donorController.js");
const donationController = require("../controllers/donationController.js");



router.route("/donor/:donor")
  .get(donorController.findDonor)

router.route('/donor')
  .post(donorController.createDonor)

router.route("/donor/populate/:donor")
  .get(donorController.populatedDonor)

router.route("/charity/:id")
  .get(charityController.findCharity)
  .post(charityController.createCharity)

router.route("/donation")
  .post(donationController.createDonation)

router.route("/donation/:donor")
  .get(donationController.findDonations)

router.route("/donation/:charity/available")
  .get(donationController.findActiveDonations)

router.route("/donation/activedonation/:id")
  .get(donationController.findOneDonation)
  .put(donationController.findOneAndUpdate)

module.exports = router;
