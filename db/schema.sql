Drop database if exists burger_db;
create database burger_db;
use burger_db;
Create table burger(
  id int primary key auto_increment not null,
  burger_name varchar(50) not null,
  devoured bool not null
);