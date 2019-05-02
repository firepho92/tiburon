'use strict'
var DB = require('../config/configDB.js');
var db = new DB();
var connection = db.getConnection();

module.exports = class Product {
  constructor(product_name, cost_price, selling_price, description, stock) {
    this.product_name = product_name;
    this.cost_price = cost_price;
    this.selling_price = selling_price;
    this.description = description;
    this.stock = stock;
  }

  createProduct() {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO Products SET ?', {product_name: this.product_name, cost_price: this.cost_price, selling_price: this.selling_price, description: this.description, stock: this.stock}, (error, results, fields) => {
        if(error) throw error;
        resolve(results);
      })
    })
  }

  readProducts() {
    return new Promise((resolve, reject) => {
      connection.query('SELECT product_id, product_name, cost_price, selling_price, description, stock, status from Products', (error, results, fields) => {
        if(error) throw error;
        resolve(results);
      })
    })
  }

}

