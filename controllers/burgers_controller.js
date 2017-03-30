var express = require("express");

var router = express.Router();

var model = require('../models');
var mysql = require("mysql");
// Create all our routes and set up logic within those routes where required.

router.get("/", function(req, res) {
	model.Burger.findAll({ }).then(function(data){
		res.render('index', { burgers: data} )
	})
});


router.post("/create", function(req, res){
	// create a string of all the toppings
	// need to list everything out since can't use req.body
	var burgerdata = {
		burger_name: req.body.burgername
	}
	
	model.Burger.create(burgerdata).then(function() {
		res.redirect('/order');
	}).catch(function(err) {
		// res.json(err);
		console.log(err)
	});
});

router.post("/createlast", function(req, res){
	// create a string of all the toppings
	// need to list everything out since can't use req.body
	// pop up modal then redirect to 
	var burgerdata = {
		burger_name: req.body.burgername
	}
	
	model.Burger.create(burgerdata).then(function() {
		// populate modal & pop it up
		res.redirect('/');
	}).catch(function(err) {
		// res.json(err);
		console.log(err)
	});
});


// router.put("/update/:id", function(req, res){
// 	var eaten = {
// 		picked_up: true,
// 	}
// 	model.Customer.update(eaten, {where: {id: req.params.id} }).then(function() {
// 		res.redirect('/');
// 	}).catch(function(err) {
// 		console.log(err)
// 	});
// });


// Export routes for server.js to use.
module.exports = router;