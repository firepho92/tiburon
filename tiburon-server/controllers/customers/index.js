'use strict'
var Customer = require('../../models/Customer.js');

module.exports = (router) => {
	router.get('/', async (req, res) => {
		var customer = new Customer();
		var results = await customer.readCustomers();
		res.send(results);
	});

	router.post('/', async (req, res) => {
		var customer = new Customer(req.body.owner, req.body.customer_name, req.body.phone, req.body.street, req.body.number, req.body.postal_code, req.body.district, req.body.county, req.body.state, req.body.email, req.body.RFC, req.body.business_name, req.body.latitude, req.body.longitude, req.body.type, req.body.notes, req.body.created, req.body.updated, req.body.qr, req.body.status);
		var result = await customer.createCustomer();
		res.send(result);
	});

	router.put('/' , async (req, res) => {
		var customer = new Customer(req.body.owner, req.body.customer_name, req.body.phone, req.body.street, req.body.number, req.body.postal_code, req.body.district, req.body.county, req.body.state, req.body.email, req.body.RFC, req.body.business_name, req.body.latitude, req.body.longitude, req.body.type, req.body.notes, req.body.created, req.body.updated, req.body.qr, req.body.status);
		var result = await customer.updateCustomer(req.body.customer_id);
		res.send(result);
	})
}