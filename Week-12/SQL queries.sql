
use warehouse;

-- item that has minimum weight
SELECT * FROM ITEMS WHERE WEIGHT=(SELECT MIN(WEIGHT) FROM ITEMS);

-- different warehouses in “Pune”
SELECT * FROM WAREHOUSES WHERE LOCATION ='PUNE';

-- the details of items ordered by a customer “Mr. Patil”
SELECT * FROM ITEMS I LEFT JOIN CUSTOMER C ON I.CUSTOMER_ID = C.CUSTOMER_ID  WHERE CUSTOMER_NAME='MR.PATIL';

--  item which is ordered for a minimum number of times.
SELECT * FROM ORDERS WHERE ITEM_ID =(SELECT MIN(ITEM_ID) FROM ORDERS);

--  the detailed orders given by each customer
SELECT * FROM ORDERS I  JOIN CUSTOMER C ON I.CUSTOMER_ID = C.CUSTOMER_ID ORDER BY I.CUSTOMER_ID;

--   Warehouse which has maximum stores
SELECT * FROM WAREHOUSES WHERE WAREHOUSE_ID = (SELECT   WAREHOUSE_ID FROM STORES  GROUP BY WAREHOUSE_ID  ORDER BY COUNT(WAREHOUSE_ID ) DESC LIMIT 1);
