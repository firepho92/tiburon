'use strict'
var DB = require('../config/configDB.js');
var db = new DB();
var connection = db.getConnection();

module.exports = class Product {
  constructor(product_name, cost_price, selling_price, description, stock, category, status) {
    this.product_name = product_name;
    this.cost_price = cost_price;
    this.selling_price = selling_price;
    this.description = description;
    this.stock = stock;
    this.category = category;
    this.status = status;
  }

  createProduct() {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO Products SET ?', {product_name: this.product_name, cost_price: this.cost_price, selling_price: this.selling_price, description: this.description, stock: this.stock, category: this.category, status: this.status}, (error, results, fields) => {
        if(error) throw error;
        resolve(results);
      })
    })
  }
//falta hacer el inner join del read
  readProducts() {
    return new Promise((resolve, reject) => {
      connection.query('SELECT product_id, product_name, cost_price, selling_price, description, stock, category_id, category_name, status FROM Products INNER JOIN Categories ON Products.category = Categories.category_id', (error, results, fields) => {
        if(error) throw error;
        resolve(results);
      })
    })
  }

  updateProduct(product_id) {
    return new Promise((resolve, reject) => {
      connection.query('Update Customers SET cost_price = ?, selling_price = ?, description = ?, stock = ?, category = ?, status = ?', [this.cost_price, this.selling_price, this.description, this.stock, product_id], (error, results, fields) => {
        if(error) throw error;
        resolve(results);
      });
    });
  }
}

