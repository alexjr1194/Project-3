const User = require('../models/donor.js');
const router = require("express").Router();
const charityController = require("../controllers/charityController.js");
const donorController = require("../controllers/donorController.js");
const donationController = require("../controllers/donationController.js");

module.exports = function(app, passport){
	app.get('/', function(req, res){
		res.render('../client/public/index.html');
	});

	app.get('/login', function(req, res){
		res.render('../client/public/index.html', { message: req.flash('loginMessage') });
	});
	app.post('/login', passport.authenticate('local-login', {
		successRedirect: '/profile',
		failureRedirect: '/login',
		failureFlash: true
	}));

	app.get('/signup', function(req, res){
		res.render('../client/public/index.html', { message: req.flash('signupMessage') });
	});


	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect: '/',
		failureRedirect: '/signup',
		failureFlash: true
	}));

	app.get('/profile', isLoggedIn, function(req, res){
		res.render('../client/public/index.html', { user: req.user });
	});



	app.get('/:username/:password', function(req, res){
		var newUser = new User();
		newUser.local.username = req.params.username;
		newUser.local.password = req.params.password;
		console.log(newUser.local.username + " " + newUser.local.password);
		newUser.save(function(err){
			if(err)
				throw err;
		});
		res.send("Success!");
	});

	app.get('/logout', function(req, res){
		req.logout();
		res.redirect('/');
	})
};

function isLoggedIn(req, res, next) {
	if(req.isAuthenticated()){
		return next();
	}

	res.redirect('/login');
}









//
// router.route("/donor/:donor")
//   .get(donorController.findDonor)
//   .post(donorController.createDonor)
//
// router.route("/donor/populate/:donor")
//   .get(donorController.populatedDonor)
//
// router.route("/charity/:id")
//   .get(charityController.findCharity)
//   .post(charityController.createCharity)
//
// router.route("/donation")
//   .post(donationController.createDonation)
//
// router.route("/donation/:donor")
//   .get(donationController.findDonations)
//
// router.route("/donation/:charity/available")
//   .get(donationController.findActiveDonations)
//
// router.route("/donation/activedonation/:id")
//   .get(donationController.findOneDonation)
//   .put(donationController.findOneAndUpdate)
//
// module.exports = router;
