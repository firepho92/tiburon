'use strict'

var DB = require('../config/configDB.js');
var db = new DB();
var connection = db.getConnection()

module.exports = class Sale {
  constructor(sale_date, customer, product, ammount) {
    this.sale_date = sale_date;
    this.customer = customer;
    this.product = product;
    this.ammount = ammount;
  }

  createSale() {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO Sales SET ?', {sale_date: this.sale_date, customer: this.customer, product: this.product, ammount: this.ammount}, (error, results, fields) => {
        if(error) throw error;
        resolve(results);
      });
    });
  }

  readSales() {
    return new Promise((resolve, reject) => {
      connection.query('SELECT sale_id, sale_date, customer, product, ammount FROM Sales', (error, results, fields) => {
        if(error) throw error;
        resolve(results);
      });
    });
  }
}
