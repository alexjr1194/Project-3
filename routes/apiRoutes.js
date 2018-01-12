const User = require('../models/donor.js');
const router = require("express").Router();
const charityController = require("../controllers/charityController.js");
const donorController = require("../controllers/donorController.js");
const donationController = require("../controllers/donationController.js");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './client/public/images')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
})

const uploading = multer({
  storage: storage
})

router.post('/imageupload', uploading.single('file'), function(req, res) {
  console.log(req.file)
  res.json("file uploaded")
})



router.route("/donor/:donor")
  .get(donorController.findDonor)

router.route('/createdonor')
  .post(donorController.createDonor)

router.route('/createcharity')
  .post(charityController.createCharity)

router.route("/donor/populate/:donor")
  .get(donorController.populatedDonor)

router.route("/charity/:id")
  .get(charityController.findCharity)

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
