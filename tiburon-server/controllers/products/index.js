'use strict'
var Product = require('../../models/Product.js');

module.exports = (router) => {
	router.get('/', async (req, res) => {
		var product = new Product();
		var results = await product.readProducts();
		res.send(results);
	});

	router.post('/', async(req, res) => {
		var product = new Product(req.body.product_name, req.body.cost_price, req.body.selling_price, req.body.description, req.body.stock);
		var result = await product.createProduct();
		res.send(result);
	});
}