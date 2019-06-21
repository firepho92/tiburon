'use strict'
var DB = require('../config/configDB.js');
var db = new DB();
var connection = db.getConnection();

module.exports = class Customer {
  constructor(category_name) {
    this.category_name = category_name;
  }

  createCategory() {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO Categories SET ?', {category_name: this.category_name}, (error, results, fields) => {
        if(error) throw error;
        resolve(results);
      });
    });
  }

  readCategories() {
    return new Promise((resolve, reject) => {
      connection.query('SELECT category_id, category_name FROM Categories', (error, results, fields) => {
        if(error) throw error;
        resolve(results);
      });
    });
  }

  updateCategory(category_id) {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE Categories SET category_name WHERE category_id = ?', [this.category_name, category_id], (error, results, fields) => {
        if(error) throw error;
        resolve(results);
      });
    })
  }
}
