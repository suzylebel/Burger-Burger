DROP DATABASE IF EXISTS Burger_db;
CREATE database Burger_db;

USE Burger_db;

CREATE TABLE Burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(30) NULL,
    devoured BOOLEAN default 0
    PRIMARY KEY (id)
)



