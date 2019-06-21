'use strict'
var Product = require('../../models/Product.js');

module.exports = (router) => {
	router.get('/', async (req, res) => {
		var product = new Product();
		var results = await product.readProducts();
		res.send(results);
	});

	router.post('/', async(req, res) => {
		var product = new Product(req.body.product_name, req.body.cost_price, req.body.selling_price, req.body.description, req.body.stock, req.body.category, req.body.status);
		var result = await product.createProduct();
		res.send(result);
	});

	router.put('/', async(req, res) => {
		var product = new Product(req.body.product_name, req.body.cost_price, req.body.selling_price, req.body.description, req.body.stock, req.body.category, req.body.status);
		var result = await product.updateProduct(req.body.product_id);
		res.send(result);
	})

	router.put('/' , async (req, res) => {
		var customer = new Customer(req.body.owner, req.body.customer_name, req.body.phone, req.body.street, req.body.number, req.body.postal_code, req.body.district, req.body.county, req.body.state, req.body.email, req.body.RFC, req.body.business_name, req.body.latitude, req.body.longitude, req.body.type, req.body.notes, req.body.created, req.body.updated, req.body.qr, req.body.status);
		var result = await customer.updateCustomer(req.body.customer_id);
		res.send(result);
	})
}