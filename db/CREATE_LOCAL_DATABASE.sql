DROP DATABASE IF EXISTS stambdb_local;

CREATE DATABASE stambdb_local;

USE stambdb_local;

CREATE TABLE Users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL,
  password VARCHAR (50) NOT NULL,
  fullname VARCHAR (50) NOT NULL,
  email VARCHAR (50) NOT NULL,
  share BOOLEAN NOT NULL,
  title VARCHAR(30) NULL,
  mystory VARCHAR (255) NULL,
  createdAt DATETIME NOT NULL,
  updatedAt DATETIME NOT NULL,
  PRIMARY KEY (id)
);


insert into users (username, password, fullname, email, share, title, mystory, createdAt, updatedAt)
values ('tpolk', 'password', 'Tamami Polk', 'tpolk@anywhere.com', 0, 'My Title', 'My Story', sysdate(), sysdate());




