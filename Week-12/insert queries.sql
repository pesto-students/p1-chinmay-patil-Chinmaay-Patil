-- insert queries for data 

-- cities
 insert into cities (city,state) values ('Mumbai','Maharashtra');
insert into cities (city,state) values ('Delhi','Delhi');
insert into cities (city,state) values ('Bengaluru','Karnataka');
insert into cities (city,state) values ('Ahmedabad','Gujarat');
insert into cities (city,state) values ('Hyderabad','Telangana');
insert into cities (city,state) values ('Chennai','Tamil Nadu');
insert into cities (city,state) values ('Kolkata','West Bengal');
insert into cities (city,state) values ('Pune','Maharashtra');
insert into cities (city,state) values ('Jaipur','Rajasthan');
insert into cities (city,state) values ('Surat','Gujarat');
insert into cities (city,state) values ('Lucknow','Uttar Pradesh');
insert into cities (city,state) values ('Kanpur','Uttar Pradesh');
insert into cities (city,state) values ('Nagpur','Maharashtra');
insert into cities (city,state) values ('Patna','Bihar');
insert into cities (city,state) values ('Indore','Madhya Pradesh');
insert into cities (city,state) values ('Thane','Maharashtra');
insert into cities (city,state) values ('Bhopal','Madhya Pradesh');
insert into cities (city,state) values ('Visakhapatnam','Andhra Pradesh');
insert into cities (city,state) values ('Vadodara','Gujarat');
insert into cities (city,state) values ('Firozabad','Uttar Pradesh');
insert into cities (city,state) values ('Ludhiana','Punjab');
insert into cities (city,state) values ('Rajkot','Gujarat');
insert into cities (city,state) values ('Agra','Uttar Pradesh');
insert into cities (city,state) values ('Siliguri','West Bengal');
insert into cities (city,state) values ('Nashik','Maharashtra');
insert into cities (city,state) values ('Faridabad','Haryana');
insert into cities (city,state) values ('Patiala','Punjab');
insert into cities (city,state) values ('Meerut','Uttar Pradesh');
insert into cities (city,state) values ('Kalyan-Dombivali','Maharashtra');
insert into cities (city,state) values ('Vasai-Virar','Maharashtra');
insert into cities (city,state) values ('Varanasi','Uttar Pradesh');
insert into cities (city,state) values ('Srinagar','Jammu and Kashmir');
insert into cities (city,state) values ('Dhanbad','Jharkhand');
insert into cities (city,state) values ('Jodhpur','Rajasthan');
insert into cities (city,state) values ('Amritsar','Punjab');
insert into cities (city,state) values ('Raipur','Chhattisgarh');
insert into cities (city,state) values ('Allahabad','Uttar Pradesh');
insert into cities (city,state) values ('Coimbatore','Tamil Nadu');
insert into cities (city,state) values ('Jabalpur','Madhya Pradesh');
insert into cities (city,state) values ('Gwalior','Madhya Pradesh');
insert into cities (city,state) values ('Vijayawada','Andhra Pradesh');
insert into cities (city,state) values ('Madurai','Tamil Nadu');
insert into cities (city,state) values ('Guwahati','Assam');
insert into cities (city,state) values ('Chandigarh','Chandigarh');
insert into cities (city,state) values ('Hubli-Dharwad','Karnataka');
insert into cities (city,state) values ('Amroha','Uttar Pradesh');
insert into cities (city,state) values ('Moradabad','Uttar Pradesh');
insert into cities (city,state) values ('Gurgaon','Haryana');
insert into cities (city,state) values ('Aligarh','Uttar Pradesh');


-- warehouses
insert into warehouses (warehouse_name,location) values ('depot','nashik');
insert into warehouses (warehouse_name,location) values ('depot','mumbai');
insert into warehouses (warehouse_name,location) values ('magazine','nashik');
insert into warehouses (warehouse_name,location) values ('depot','nashik');
insert into warehouses (warehouse_name,location) values ('storage','mumbai');
insert into warehouses (warehouse_name,location) values ('magazine','mumbai');
insert into warehouses (warehouse_name,location) values ('storage','mumbai');
insert into warehouses (warehouse_name,location) values ('repository','mumbai');
insert into warehouses (warehouse_name,location) values ('depository','Pune');
insert into warehouses (warehouse_name,location) values ('repository','mumbai');
insert into warehouses (warehouse_name,location) values ('depository','mumbai');
insert into warehouses (warehouse_name,location) values ('magazine','mumbai');
insert into warehouses (warehouse_name,location) values ('magazine','mumbai');
insert into warehouses (warehouse_name,location) values ('depot','mumbai');
insert into warehouses (warehouse_name,location) values ('magazine','mumbai');
insert into warehouses (warehouse_name,location) values ('repository','mumbai');
insert into warehouses (warehouse_name,location) values ('storage','nashik');
insert into warehouses (warehouse_name,location) values ('magazine','mumbai');
insert into warehouses (warehouse_name,location) values ('depot','mumbai');



-- customer
insert into customer (customer_name,address,city) values ('Flavianus','4562 Cimmaron Road','nashik');
insert into customer (customer_name,address,city) values ('Josefina','1687 Fulton Street','nashik');
insert into customer (customer_name,address,city) values ('Cunigund','2163 Kuhl Avenue','mumbai');
insert into customer (customer_name,address,city) values ('Geraint','3807 Heavner Avenue','mumbai');
insert into customer (customer_name,address,city) values ('Cándido','4562 Cimmaron Road','nashik');
insert into customer (customer_name,address,city) values ('Chrysostom','1687 Fulton Street','nashik');
insert into customer (customer_name,address,city) values ('Mareks','2163 Kuhl Avenue','nashik');
insert into customer (customer_name,address,city) values ('Aada','3807 Heavner Avenue','Pune');
insert into customer (customer_name,address,city) values ('Muhammed','4562 Cimmaron Road','Pune');
insert into customer (customer_name,address,city) values ('Oren','1687 Fulton Street','nashik');
insert into customer (customer_name,address,city) values ('Mr.patil','2163 Kuhl Avenue','Pune');
insert into customer (customer_name,address,city) values ('','3807 Heavner Avenue','nashik');
UPDATE orders SET item_id = 2 where order_id = 1 ;
UPDATE orders SET item_id = 1 where order_id = 2 ;
UPDATE orders SET item_id = 5 where order_id = 3 ;
UPDATE orders SET item_id = 5 where order_id = 4 ;
UPDATE orders SET item_id = 1 where order_id = 5 ;
UPDATE orders SET item_id = 2 where order_id = 6 ;
UPDATE orders SET item_id = 5 where order_id = 7 ;
UPDATE orders SET item_id = 2 where order_id = 8 ;
UPDATE orders SET item_id = 1 where order_id = 9 ;
UPDATE orders SET item_id = 1 where order_id = 10 ;
UPDATE orders SET item_id = 2 where order_id = 11 ;
UPDATE orders SET item_id = 5 where order_id = 12 ;
UPDATE orders SET item_id = 5 where order_id = 13 ;
UPDATE orders SET item_id = 1 where order_id = 14 ;
UPDATE orders SET item_id = 5 where order_id = 15 ;
UPDATE orders SET item_id = 5 where order_id = 16 ;
UPDATE orders SET item_id = 2 where order_id = 17 ;
UPDATE orders SET item_id = 2 where order_id = 18 ;
UPDATE orders SET item_id = 1 where order_id = 19 ;
UPDATE orders SET item_id = 2 where order_id = 20 ;



-- orders
insert into orders (order_date,customer_id)values('2022-08-12','2');
insert into orders (order_date,customer_id)values('2022-09-01','4');
insert into orders (order_date,customer_id)values('2022-08-12','5');
insert into orders (order_date,customer_id)values('2022-09-01','9');
insert into orders (order_date,customer_id)values('2022-06-01','7');
insert into orders (order_date,customer_id)values('2022-08-12','4');
insert into orders (order_date,customer_id)values('2022-06-01','3');
insert into orders (order_date,customer_id)values('2022-06-01','4');
insert into orders (order_date,customer_id)values('2022-08-12','5');
insert into orders (order_date,customer_id)values('2022-06-01','6');


-- items
insert into items (description,weight,cost,customer_id)  values ('gfhdf','90','25','2');
insert into items (description,weight,cost,customer_id)  values ('hggdfhdgfhdgfhdgfh','56','21','4');
insert into items (description,weight,cost,customer_id)  values ('dgfh','15','25','5');
insert into items (description,weight,cost,customer_id)  values ('gfhdf','23','2','7');
insert into items (description,weight,cost,customer_id)  values ('hggdfhdgfhdgfhdgfh','58','3','9');
insert into items (description,weight,cost,customer_id)  values ('gd','95','6','5');
insert into items (description,weight,cost,customer_id)  values ('fhg','34','5','2');
insert into items (description,weight,cost,customer_id)  values ('dh','72','468','3');
insert into items (description,weight,cost,customer_id)  values ('dghdgh','98','64','8');
insert into items (description,weight,cost,customer_id)  values ('g','26','684','2');
insert into items (description,weight,cost,customer_id)  values ('fhg','52','64','1');
insert into items (description,weight,cost,customer_id)  values ('gd','33','64','1');
insert into items (description,weight,cost,customer_id)  values ('hgdhdgfhdgfhgdhg','55','6','9');


-- stores
insert into stores (store_name,warehouse_id)values('Adelina Anthelm','8');
insert into stores (store_name,warehouse_id)values('Arnoud Abraão','1');
insert into stores (store_name,warehouse_id)values('Håkan Nunziatina','9');
insert into stores (store_name,warehouse_id)values('Elias Kaylynn','5');
insert into stores (store_name,warehouse_id)values('Noy Jaime','1');
insert into stores (store_name,warehouse_id)values('Ahmad Tagwanibisan','9');
insert into stores (store_name,warehouse_id)values('Uche Aldo','5');
insert into stores (store_name,warehouse_id)values('Venkat Lapo','3');
insert into stores (store_name,warehouse_id)values('Dasha Slavka','5');
insert into stores (store_name,warehouse_id)values('Quidel Gualberto','5');
insert into stores (store_name,warehouse_id)values('Anja Khufu','7');
insert into stores (store_name,warehouse_id)values('Larissa Énna','1');
insert into stores (store_name,warehouse_id)values('Tobit Geertje','3');
insert into stores (store_name,warehouse_id)values('Ashton Rajkumari','9');
insert into stores (store_name,warehouse_id)values('Jure Martyn','1');
