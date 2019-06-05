'use strict'

var DB = require('../config/configDB.js');
var db = new DB();
var connection = db.getConnection()

module.exports = class Auth {
	constructor(alias) {
		this.alias = alias;
	}

	login(password) {
		return new Promise((resolve, reject) => {
			connection.query('SELECT personal_id, personal_name, password, administrator from Personal WHERE alias = ? ', this.alias, (error, results, fields) => {
				if(error) throw error;
				if(results.length === 0){
					resolve([]);
				} else {
					let person = results[0];
					if(password === person.password)
						resolve(results);
					else
						resolve([]);
				}
			});
		});
	}
}