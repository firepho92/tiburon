'use strict'
var DB = require('../config/configDB.js');
var db = new DB();
var connection = db.getConnection();

module.exports = class Customer {
  constructor(customer_name, phone, address, latitude, longitude, status) {
    this.customer_name = customer_name;
    this.phone = phone;
    this.address = address;
    this.latitude = latitude;
    this.longitude = longitude;
    this.status = status;
  }

  createCustomer() {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO Customers SET ?', {customer_name: this.customer_name, phone: this.phone, address: this.address, latitude: this.latitude, longitude: this.longitude, status: this.status}, (error, results, fields) => {
        if(error) throw error;
        resolve(results);
      });
    });
  }

  readCustomers() {
    return new Promise((resolve, reject) => {
      connection.query('SELECT customer_id, customer_name, phone, address, latitude, longitude, status FROM Customers', (error, results, fields) => {
        if(error) throw error;
        resolve(results);
      });
    });
  }
}
