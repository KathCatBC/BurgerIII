var express = require("express");

var router = express.Router();

var model = require('../models');
var mysql = require("mysql");
// Create all our routes and set up logic within those routes where required.

router.get("/", function(req, res) {
	// get users & their orders.

	model.Customer.findAll({ }).then(function(data){
		res.render('index', { customers: data} )
	})
});


router.post("/create", function(req, res){
	// create a string of all the toppings
	// need to list everything out since can't use req.body

	model.Customer.create().then(function(){
		//get user number
	})
	// create user in user table
	// create burger in burger order

	// make sure they are linked


	var burgerdata = {
		
	}
	
	model.Burger.create(burgerdata).then(function() {
		res.redirect('/');
	}).catch(function(err) {
		// res.json(err);
		console.log(err)
	});
});


router.post("/create", function(req, res){
	// create a string of all the toppings
	// need to list everything out since can't use req.body

	// use this route if this is not the first burger in the order 
	// since we already have the customer id

	// copy the create from the /create route
	var burgerdata = {
		
	}
	
	model.Burger.create(burgerdata).then(function() {
		res.redirect('/');
	}).catch(function(err) {
		// res.json(err);
		console.log(err)
	});
});

router.put("/update/:id", function(req, res){
	var eaten = {
		picked_up: true,
	}
	model.Customer.update(eaten, {where: {id: req.params.id} }).then(function() {
		res.redirect('/');
	}).catch(function(err) {
		console.log(err)
	});
});


// Export routes for server.js to use.
module.exports = router;