USE shopee_suabai

SELECT * FROM Products p 

SELECT COUNT(*) FROM Products

SELECT  CONCAT('YOUR PARAMETER ', 1, ' IS NOT EXISTS!!!') AS 'ERROR'

SELECT 1 FROM Products


SELECT * FROM Products p WHERE ProductName LIKE '%tay%'

-- PROCEDURE

CREATE PROCEDURE CreateOrder (
	IN OrderID VARCHAR(20),
	IN UserID VARCHAR(20),
	IN TotalAmount DECIMAL(10,3)
)
BEGIN
	INSERT INTO Orders (OrderID, UserID, TotalAmount) VALUES (OrderID, UserID, TotalAmount);	
END

SHOW PROCEDURE STATUS

CALL CreateOrder('2', '1', 100000)


UPDATE Orders SET TotalAmount = 
Price (Products)
Quantity (Order_Detail)
ProductId (Order_Detail)


CREATE PROCEDURE CalculateTotalAmount (
	IN order_id VARCHAR(20)
)
BEGIN
	DECLARE total DECIMAL(10,3);
	
	SET total = IFNULL((SELECT SUM(Price * Quantity)
	FROM Products AS p
	INNER JOIN Order_Detail AS o ON p.ProductID = o.ProductID
	WHERE OrderID = order_id), 0);

	UPDATE Orders
	SET TotalAmount = total
	WHERE OrderID = order_id;
END

CALL CalculateTotalAmount('1')


-- function

create function sumFunc2 (in a int, in b int)
returns int
begin
    declare sum int default 0;
    set sum = (a + b);
   
   UPDATE Orders
	SET TotalAmount = 20000
	WHERE OrderID = '1';

    return sum;
end



select sumFunc2(1, 2)


-- VIEW

CREATE VIEW ProductsInCart AS
SELECT p.ProductID, p.ProductName, p.CategoryID, c1.CategoryName, c2.CartID
FROM
	Products p
	INNER JOIN Categories c1 ON p.CategoryID = c1.CategoryID
	INNER JOIN Cart_Detail c2 ON p.ProductID = c2.ProductID
WHERE CartID = 1

SELECT * FROM ProductsInCart


-- Trigger
CREATE TRIGGER after_order_detail_insert
AFTER INSERT ON Order_Detail
FOR EACH ROW
BEGIN 
	DECLARE total DECIMAL(10,3);
	
	SET total = (SELECT SUM(Price * Quantity)
	FROM Products AS p
	INNER JOIN Order_Detail AS o ON p.ProductID = o.ProductID
	WHERE OrderID = NEW.OrderID);

	UPDATE Orders
	SET TotalAmount = total
	WHERE OrderID = NEW.OrderID;
END


-- IN

SELECT *
FROM Order_Detail
WHERE ProductID IN (
	SELECT ProductID 
    FROM Products 
    WHERE stock > 0
)

-- EXISTS
SELECT SupplierName
FROM Suppliers
WHERE EXISTS (SELECT ProductName FROM Products WHERE Products.SupplierID = Suppliers.supplierID AND Price < 20);

-- CASE
SELECT OrderID, Quantity,
CASE
    WHEN Quantity > 30 THEN "The quantity is greater than 30"
    WHEN Quantity = 30 THEN "The quantity is 30"
    ELSE "The quantity is under 30"
END AS TypeOfQuantity
FROM Order_Detail;

