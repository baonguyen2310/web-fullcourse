USE Shopee;

CREATE TABLE User (
	userId varchar(20) PRIMARY KEY,
    username varchar(50) NOT NULL,
    password varchar(50) NOT NULL,
    email varchar(50)
);

INSERT INTO User (userId, username, password, email) VALUES ("khanh01", "khanh", "123", "khanh@gmail.com");
INSERT INTO User (userId, username, password) VALUES ("khanh02", "khanh2", "456");

DROP TABLE Category;

CREATE TABLE Category (
	categoryId varchar(20) PRIMARY KEY,
    categoryName varchar(50) NOT NULL
);

INSERT INTO Category (categoryId, categoryName) VALUES ("C01", "Phu kien");

CREATE TABLE Product(
	productId varchar(20) PRIMARY KEY,
    productName varchar(50) NOT NULL,
    price decimal NOT NULL,
    categoryId varchar(20) NOT NULL,
    FOREIGN KEY (categoryId) REFERENCES Category (categoryId)
);


CREATE TABLE Cart(
	cartId varchar(20) PRIMARY KEY,
	userId varchar(20),
	FOREIGN KEY (userId) REFERENCES User(userId)
);


CREATE TABLE Cart_Product(
	cartId varchar(20),
	productId varchar(20),
	quantity int NOT NULL,
	PRIMARY KEY (cartId, productId),
	FOREIGN KEY (cartId) REFERENCES Cart(cartId),
	FOREIGN KEY (productId) REFERENCES Product(ProductId)
);












