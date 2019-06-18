DROP DATABASE IF EXISTS stambdb_local;

CREATE DATABASE stambdb_local;

USE stambdb_local;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL,
  password VARCHAR (50) NOT NULL,
  last VARCHAR (50) NOT NULL,
  first VARCHAR (50) NOT NULL,
  PRIMARY KEY (id)
);


insert into users (username, email, password, last, first, createdAt, updatedAt)
values ('tpolk', 'tpolk@anywhere.com','password', 'Tamami', 'Polk', sysdate(), sysdate());




