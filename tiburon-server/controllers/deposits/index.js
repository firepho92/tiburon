'use strict'
var Deposit = require('../../models/Deposit.js');

module.exports = (router) => {
	router.get('/', async (req, res) => {
		var deposit = new Deposit();
		var results;
		if(req.query.customer !== undefined)
			results = await deposit.readDepositsByCustomer(req.query.customer);
		else
			results = await deposit.readDeposits();
		res.send(results);
	});

	router.post('/', async(req, res) => {
		var deposit = new Deposit(req.body.deposit_date, req.body.payment_type, req.body.customer, req.body.ammount);
		var result = await deposit.createDeposit();
		res.send(result);
	});
}