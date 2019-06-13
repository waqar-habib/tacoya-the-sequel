CREATE DATABASE IF NOT EXISTS tacoya_db;
USE tacoya_db;

-- If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS takos;

-- Create the tacos table
CREATE TABLE takos (
    id int NOT NULL AUTO_INCREMENT,
    taco_name varchar(255) NOT NULL,
    picked_up BOOL DEFAULT false,
    PRIMARY KEY (id)
);