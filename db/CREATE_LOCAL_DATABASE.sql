DROP DATABASE IF EXISTS stambdb_local;

CREATE DATABASE stambdb_local;

USE stambdb_local;

CREATE TABLE Users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL,
  password VARCHAR (50) NOT NULL,
  first VARCHAR (50) NOT NULL,
  last VARCHAR (50) NOT NULL,
  email VARCHAR (50) NOT NULL,
  confirmit VARCHAR (50) NULL,
  phone VARCHAR (10) NULL,
  createdAt DATETIME NOT NULL,
  updatedAt DATETIME NOT NULL,
  PRIMARY KEY (id)
);


insert into users (username, password, first, last, email, confirmit, phone, createdAt, updatedAt)
values ('tpolk', 'password', 'Tamami', 'Polk', 'tpolk@anywhere.com', 'password', '2147701208', sysdate(), sysdate());




