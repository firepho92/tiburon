create database tiburon;
use tiburon;

create table if not exists Personal (
  personal_id int not null auto_increment,
  personal_name varchar(140),
  alias varchar(30),
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

create table if not exists Waste (
  waste_id int not null auto_increment,
  product int,
  personal int,
  quantity float,
  waste_date varchar(50),
  description varchar(140),
  primary key(waste_id),
  foreign key(product) references Products(product_id),
  foreign key(personal) references Personal(personal_id)
);

create table if not exists Customers (
  customer_id int not null auto_increment,
  customer_name varchar(50),
  phone varchar(20),
  address varchar(50),
  status boolean,
  qr boolean,
  primary key(customer_id)
);

create table if not exists Sales(
  sale_id int not null auto_increment,
  sale_date varchar(50),
  customer int,
  product int,
  ammount float,
  cash boolean,
  primary key(sale_id),
  foreign key(customer) references Customers(customer_id),
  foreign key(product) references Products(product_id)
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


