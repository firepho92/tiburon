'use strict'
var DB = require('../config/configDB.js');
var db = new DB();
var connection = db.getConnection();

module.exports = class Deposit {
  constructor(deposit_date, payment_type, customer, ammount) {
    this.deposit_date = deposit_date;
    this.payment_type = payment_type;
    this.customer = customer;
    this.ammount = ammount;
  }

  createDeposit() {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO Deposits SET ?', {deposit_date: this.deposit_date, payment_type: this.payment_type, customer: this.customer, ammount: this.ammount}, (error, results, fields) => {
        if(error) throw error;
        resolve(results);
      });
    });
  }

  readDeposits() {
    return new Promise((resolve, reject) => {
      connection.query('SELECT deposit_id, deposit_date, payment_type, customer, ammount FROM Deposits', (error, results, fields) => {
        if(error) throw error;
        resolve(results);
      });
    });
  }

  readDepositsByCustomer(customer_id) {
    return new Promise((resolve, reject) => {
      connection.query('SELECT deposit_id, deposit_date, payment_type, customer_name, ammount FROM Deposits INNER JOIN Customers ON Deposits.customer = Customers.customer_id WHERE customer = ' + customer_id, (error, results, fields) => {
        if(error) throw error;
        resolve(results);
      });
    });
  }
}
