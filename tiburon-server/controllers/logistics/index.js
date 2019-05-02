'use strict'
var points = [
	{customer: 2, checked: false},
	{customer: 1, checked: false}
];

module.exports = (router) => {
	router.get('/', async (req, res) => {
		res.send(points);
	});

	router.post('/', async(req, res) => {
		points.push(req.body.point);
		res.send(true);
	});
}