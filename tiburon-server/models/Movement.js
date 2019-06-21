'use strict'

var DB = require('../config/configDB.js');
var db = new DB();
var connection = db.getConnection()

module.exports = class Movement {
  constructor(movement_date, customer, person, product, ammount, selling_price, cost_price, IVA, cash, movementType, sale_type, description) {
    this.movement_date = movement_date;
    this.customer = customer;
    this.person = person;
    this.product = product;
    this.ammount = ammount;
    this.selling_price = selling_price;
    this.cost_price = cost_price;
    this.IVA = IVA;
    this.cash = cash;
    this.movementType = movementType;
    this.sale_type = sale_type;
    this.description = description;
  }

  createMovement() {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO Movements SET ?', {sale_date: this.movement_date, customer: this.customer, person: this.person, product: this.product, ammount: this.ammount, selling_price: this.selling_price, cost_price: this.cost_price, IVA: this.IVA, cash: this.cash, movementType: this.movementType, sale_type: this.sale_type, description: this.description}, (error, results, fields) => {
        if(error) throw error;
        resolve(results);
      });
    });
  }

  readMovements(movementType) {
    let queries = [
      'SELECT sale_id, sale_date, ammount, Movements.description, personal_name, product_name, movement FROM Movements INNER JOIN Personal ON movements.person = Personal.personal_id INNER JOIN Products ON movements.product = Products.product_id INNER JOIN MovementType ON Movements.movementType = movementType_id WHERE movementType = 1 ORDER BY sale_id ASC',
      'SELECT sale_id, sale_date, ammount, Movements.description, personal_name, product_name, movement FROM Movements INNER JOIN Personal ON movements.person = Personal.personal_id INNER JOIN Products ON movements.product = Products.product_id INNER JOIN MovementType ON Movements.movementType = movementType_id WHERE movementType = 2 ORDER BY sale_id ASC',
      'SELECT sale_id, sale_date, ammount, Movements.description, customer_name, personal_name, product_name, movement FROM Movements INNER JOIN Customers ON Movements.customer = Customers.customer_id INNER JOIN Personal ON movements.person = Personal.personal_id INNER JOIN Products ON movements.product = Products.product_id INNER JOIN MovementType ON Movements.movementType = movementType_id WHERE movementType = 3 ORDER BY sale_id ASC',
      'SELECT sale_id, sale_date, ammount, Movements.selling_price, product, Movements.cost_price, IVA, cash, sale_type, Movements.description, customer_name, personal_name, product_name, movement FROM Movements INNER JOIN Customers ON Movements.customer = Customers.customer_id INNER JOIN Personal ON movements.person = Personal.personal_id INNER JOIN Products ON movements.product = Products.product_id INNER JOIN MovementType ON Movements.movementType = movementType_id WHERE movementType = 4 ORDER BY sale_id ASC',
      'SELECT sale_id, sale_date, ammount, Movements.description, personal_name, product_name, movement FROM Movements INNER JOIN Personal ON movements.person = Personal.personal_id INNER JOIN Products ON movements.product = Products.product_id INNER JOIN MovementType ON Movements.movementType = movementType_id WHERE movementType = 5 ORDER BY sale_id ASC',
    ];
    return new Promise((resolve, reject) => {
      connection.query(queries[movementType], (error, results, fields) => {
        if(error) throw error;
        resolve(results);
      });
    });
  }

  readMovementsByCustomer(customer) {
    return new Promise((resolve, reject) => {
      connection.query('SELECT sale_id, sale_date, ammount, Movements.product, Movements.selling_price, Movements.cost_price, IVA, cash, sale_type, Movements.description, customer_name, personal_name, product_name, movement FROM Movements INNER JOIN Customers ON Movements.customer = Customers.customer_id INNER JOIN Personal ON movements.person = Personal.personal_id INNER JOIN Products ON movements.product = Products.product_id INNER JOIN MovementType ON Movements.movementType = movementType_id WHERE Movements.customer = ' + customer + ' AND Movements.movementType = 4 ORDER BY sale_id ASC', (error, results, fields) => {
        if(error) throw error;
        resolve(results);
      });
    });
  }
}
