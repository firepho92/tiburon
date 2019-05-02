'use strict'


module.exports = (router) => {
	
	router.post('/', async(req, res) => {
		console.log(req.body.user + ' ' + req.body.password)
		//var customer = new Customer(req.body.customer_name, req.body.phone, req.body.address, req.body.latitude, req.body.longitude, req.body.status);
		//var result = await customer.createCustomer();
		res.send(result);
	});
}