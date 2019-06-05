'use strict'
var DB = require('../config/configDB.js');
var db = new DB();
var connection = db.getConnection();

module.exports = class Customer {
  constructor(owner, customer_name, phone, street, number, postal_code, district, county, state, email, RFC, business_name, latitude, longitude, type, notes, created, updated, qr, status) {
    this.owner = owner;
    this.customer_name = customer_name;
    this.phone = phone;
    this.street = street;
    this.number = number;
    this.postal_code = postal_code;
    this.district = district;
    this.county = county;
    this.state = state;
    this.email = email;
    this.RFC = RFC;
    this.business_name = business_name;
    this.latitude = latitude;
    this.longitude = longitude;
    this.type = type;
    this.notes = notes;
    this.created = created;
    this.updated = updated;
    this.qr = qr;
    this.status = status;
  }

  createCustomer() {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO Customers SET ?', {owner: this.owner, customer_name: this.customer_name, phone: this.phone, street: this.street, number: this.number, postal_code: this.postal_code, district: this.district, county: this.county, state: this.state, email: this.email, RFC: this.RFC, business_name: this.business_name, latitude: this.latitude, longitude: this.longitude, type: this.type, notes: this.notes, created: this.created, updated: this.updated, qr: this.qr, status: this.status}, (error, results, fields) => {
        if(error) throw error;
        resolve(results);
      });
    });
  }

  readCustomers() {
    return new Promise((resolve, reject) => {
      connection.query('SELECT customer_id, owner, customer_name, phone, street, number, postal_code, district, county, state, email, RFC, business_name, latitude, longitude, type, notes, created, updated, qr, status FROM Customers', (error, results, fields) => {
        if(error) throw error;
        resolve(results);
      });
    });
  }

  updateCustomer(customer_id) {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE Customers SET owner = ?, customer_name = ?, phone = ?, street = ?, number = ?, postal_code = ?, district = ?, county = ?, state = ?, email = ?, RFC = ?, business_name = ?, latitude = ?, longitude = ?, type = ?, notes = ?, created = ?, updated = ?, qr = ?, status = ? WHERE customer_id = ?', [this.owner, this.customer_name, this.phone, this.street, this.number, this.postal_code, this.district, this.county, this.state, this.email, this.RFC, this.business_name, this.latitude, this.longitude, this.type, this.notes, this.created, this.updated, this.qr, this.status, customer_id], (error, results, fields) => {
        if(error) throw error;
        resolve(results);
      });
    })
  }
}
