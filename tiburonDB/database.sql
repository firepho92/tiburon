create database tiburon;
use tiburon;

create table if not exists Personal (
  personal_id int not null auto_increment,
  personal_name varchar(140),
  alias varchar(30) unique,
  password varchar(28),
  administrator boolean,
  primary key(personal_id)
);

create table if not exists Categories (
  category_id int not null auto_increment,
  category_name varchar(45),
  primary key(category_id)
);

create table if not exists Products (
  product_id int not null auto_increment,
  product_name varchar(50),
  cost_price float,
  selling_price float,
  description varchar(140),
  stock float,
  category int,
  status boolean,
  primary key(product_id),
  foreign key(category) references Categories(category_id)
);

create table if not exists Customers (
  customer_id int not null auto_increment,
  owner varchar(50),
  customer_name varchar(50),
  phone varchar(20),
  street varchar(50),
  number varchar(8),
  postal_code int,
  district varchar(40),
  county varchar(40),
  state varchar(40),
  email varchar(60),
  RFC varchar(40),
  business_name varchar(120),
  latitude decimal(16, 13),
  longitude decimal(16, 13),
  type varchar(20),
  notes varchar(140),
  created varchar(50),
  updated varchar(50),
  qr boolean,
  status boolean,
  primary key(customer_id)
);

create table if not exists MovementType(
  movementType_id int not null auto_increment,
  movement varchar(40),
  primary key(movementType_id)
);

create table if not exists Movements(
  sale_id int not null auto_increment,
  sale_date varchar(50),
  customer int,
  person int,
  product int,
  ammount float,
  selling_price float,
  cost_price float,
  IVA boolean,
  cash boolean,
  movementType int,
  sale_type boolean,
  description varchar(140),
  primary key(sale_id),
  foreign key(customer) references Customers(customer_id),
  foreign key(person) references Personal(personal_id),
  foreign key(product) references Products(product_id),
  foreign key(movementType) references MovementType(movementType_id)
);

create table if not exists Payments(
    payment_id int not null auto_increment,
    ammount float,
    date varchar(50),
    description varchar(140),
    primary key(payment_id)
);
/*
  payment_type refers whether it is cash or deposit
  }
*/

create table if not exists Deposits(
  deposit_id int not null auto_increment,
  deposit_date varchar(50),
  payment_type boolean,
  customer int,
  ammount float,
  primary key(deposit_id),
  foreign key(customer) references Customers(customer_id)
);

insert into Personal(personal_name, alias, password, administrator) values('Alexandro Isaac Aguilar Zárate', 'firepho', '940220', 1);
insert into categories(category_name) values('botella');
insert into Categories(category_name) values('barril');
insert into categories(category_name) values('wearables');
insert into Products(product_name, cost_price, selling_price, description, stock, category, status) values('Blonde Ale', 0, 35, 'botella 355ml', 100, 3, 1);
insert into Products(product_name, cost_price, selling_price, description, stock, category, status) values('Blonde Ale', 0, 35, 'botella 355ml', 100, 3, 1);
insert into Products(product_name, cost_price, selling_price, description, stock, category, status) values('Red Ale', 0, 35, 'botella 355ml', 100, 3, 1);
insert into Products(product_name, cost_price, selling_price, description, stock, category, status) values('Citra Pale Ale', 0, 35, 'botella 355ml', 100, 3, 1);
insert into Products(product_name, cost_price, selling_price, description, stock, category, status) values('Imperial Stout', 0, 35, 'botella 355ml', 100, 3, 1);
insert into Products(product_name, cost_price, selling_price, description, stock, category, status) values('Double IPA', 0, 35, 'botella 355ml', 100, 3, 1);
insert into Products(product_name, cost_price, selling_price, description, stock, category, status) values('Triple IPA', 0, 35, 'botella 355ml', 100, 3, 1);
insert into Products(product_name, cost_price, selling_price, description, stock, category, status) values('Nitro Coffee Porter', 0, 35, 'botella 355ml', 100, 3, 1);
insert into Products(product_name, cost_price, selling_price, description, stock, category, status) values('Coffee Blonde', 0, 35, 'botella 355ml', 100, 3, 1);
insert into Products(product_name, cost_price, selling_price, description, stock, category, status) values('Belgian Blonde', 0, 35, 'botella 355ml', 100, 3, 1);
insert into Products(product_name, cost_price, selling_price, description, stock, category, status) values('Pale Ale', 0, 35, 'botella 355ml', 100, 3, 1);
insert into Products(product_name, cost_price, selling_price, description, stock, category, status) values('Baltic Porter', 0, 35, 'botella 355ml', 100, 3, 1);