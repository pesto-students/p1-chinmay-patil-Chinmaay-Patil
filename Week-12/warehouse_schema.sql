CREATE DATABASE WAREHOUSE;
USE WAREHOUSE;

CREATE TABLE CITIES( 
CITY_ID INTEGER PRIMARY KEY AUTO_INCREMENT ,
CITY CHAR(20) NOT NULL,
STATE CHAR(20) NOT NULL
);

CREATE TABLE WAREHOUSES(
WAREHOUSE_ID INTEGER PRIMARY KEY AUTO_INCREMENT, 
WAREHOUSE_NAME CHAR(30) NOT NULL,
CITY INT NOT NULL,
FOREIGN KEY (CITY) REFERENCES CITIES( CITY_ID )
);

CREATE TABLE STORES(
STORE_ID INTEGER PRIMARY KEY AUTO_INCREMENT,
STORE_NAME CHAR(20) NOT NULL, 
WAREHOUSE_ID INTEGER, 
FOREIGN KEY (WAREHOUSE_ID) REFERENCES WAREHOUSES( WAREHOUSE_ID )
);

CREATE TABLE CUSTOMER(
CUSTOMER_ID INTEGER PRIMARY KEY AUTO_INCREMENT , 
CUSTOMER_NAME CHAR(50) NOT NULL ,
ADDRESS VARCHAR(50) NOT NULL,
CITY CHAR(20) NOT NULL
);

CREATE TABLE ORDERS(
ORDER_ID INT PRIMARY KEY AUTO_INCREMENT,
ORDER_DATE DATE NOT NULL,
CUSTOMER_ID INT, 
FOREIGN KEY (CUSTOMER_ID) REFERENCES CUSTOMER( CUSTOMER_ID )
);
 
CREATE TABLE ITEMS(
ITEM_ID INTEGER PRIMARY KEY AUTO_INCREMENT,
DESCRIPTION TEXT,
WEIGHT DECIMAL(5,2) NOT NULL ,
COST DECIMAL(5,2) NOT NULL ,
CUSTOMER_ID INT, 
FOREIGN KEY (CUSTOMER_ID) REFERENCES CUSTOMER( CUSTOMER_ID )
);

CREATE TABLE ORDERED_ITEMS(
ORDER_ID INT,
FOREIGN KEY (ORDER_ID) REFERENCES ORDERS( ORDER_ID ),
ITEM_ID INT,
FOREIGN KEY (ITEM_ID) REFERENCES ITEMS( ITEM_ID )
);
CREATE TABLE STORED_ITEMS(
STORE_ID INT,
FOREIGN KEY (STORE_ID) REFERENCES STORES( STORE_ID ),
ITEM_ID INT,
FOREIGN KEY (ITEM_ID) REFERENCES ITEMS( ITEM_ID )
);
