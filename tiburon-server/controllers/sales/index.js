'use strict'
var Sale = require('../../models/Sale.js');

module.exports = (router) => {
	router.get('/', async (req, res) => {
		var sale = new Sale();
		var results = await sale.readSales();
		res.send(results);
	});

	router.post('/', async(req, res) => {
		var sale = new Sale(req.body.sale_date, req.body.customer, req.body.product, req.body.ammount);
		var result = await sale.createSale();
		res.send(result);
	});
}