'use strict'
let Auth = require('../../models/Auth.js');

module.exports = (router) => {
	
	router.post('/', async(req, res) => {
		let auth = new Auth(req.body.alias);
		let response = await auth.login(req.body.password);
		console.log(response);
		res.send(response);
	});
}