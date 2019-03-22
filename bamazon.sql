-- droping the data base if it exist that way we don't have conflicts
DROP DATABASE IF EXISTS bamazondb;
-- creating the database that we are going to be using 
CREATE DATABASE bamazondb;

-- specifying which datatbase we are using 
USE bamazondb;

-- creating the table inside the database that contains all of our information 
CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price INT default 10.4,
  stock_quantaty INT default 2,
  PRIMARY KEY (item_id)
);

-- putting in the products that im going to sell to customers 
INSERT INTO products (product_name, department_name, price, stock_quantaty)
VALUES ("apple watch", "electronics", 250.00, 20);
INSERT INTO products (product_name, department_name, price, stock_quantaty)
VALUES ("Beats by DRE", "electronics", 300.00, 20);
INSERT INTO products (product_name, department_name, price, stock_quantaty)
VALUES ("mac book", "electronics", 180.00, 20);
INSERT INTO products (product_name, department_name, price, stock_quantaty)
VALUES ("playstation 4", "electronics", 340.00, 20);
INSERT INTO products (product_name, department_name, price, stock_quantaty)
VALUES ("playstation 2", "electronics", 50.00, 5);
INSERT INTO products (product_name, department_name, price, stock_quantaty)
VALUES ("Three leg table", "furnature", 120.00, 20);
INSERT INTO products (product_name, department_name, price, stock_quantaty)
VALUES ("Sound mixer", "electronics", 400.00, 20);
INSERT INTO products (product_name, department_name, price, stock_quantaty)
VALUES ("Trigonometry Textbook", "Books", 80.00, 20);
INSERT INTO products (product_name, department_name, price, stock_quantaty)
VALUES ("Nerf Gun", "Toys", 80.00, 20);
INSERT INTO products (product_name, department_name, price, stock_quantaty)
VALUES ("slingshot", "toys", 5.00, 20);
