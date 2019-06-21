'use strict'
var Category = require('../../models/Category.js');

module.exports = (router) => {
	router.get('/', async (req, res) => {
		var category = new Category();
		var results = await category.readCategories();
		res.send(results);
	});

	router.post('/', async(req, res) => {
		var category = new Category(req.body.category_name);
		var result = await category.createCategory();
		res.send(result);
	});
}