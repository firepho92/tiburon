'use strict'
var Customer = require('../../models/Customer.js');

module.exports = (router) => {
	router.get('/', async (req, res) => {
		var customer = new Customer();
		var results = await customer.readCustomers();
		res.send(results);
	});

	router.post('/', async(req, res) => {
		var customer = new Customer(req.body.customer_name, req.body.phone, req.body.address, req.body.latitude, req.body.longitude, req.body.status);
		var result = await customer.createCustomer();
		res.send(result);
	});
}