USE shopee_suabai


SELECT ProductID, ProductName FROM Products WHERE CategoryID = 1

SELECT ProductID, ProductName FROM Products WHERE CategoryID = 1 OR 1 = 1

SELECT ProductID, ProductName FROM Products WHERE CategoryID = 1
UNION
SELECT UserID, Password FROM User



SELECT p.ProductID, p.ProductName, p.CategoryID, c1.CategoryID, c1.CategoryName, c2.CartID
FROM
	Products p
	INNER JOIN Categories c1 ON p.CategoryID = c1.CategoryID
	INNER JOIN Cart_Detail c2 ON p.ProductID = c2.ProductID
WHERE CartID = 1
	

-- Lấy tên sản phẩm, giá sản phẩm, danh mục sản phẩm trong 1 cartID
-- ProductName : Products
-- Price : Products
-- CategoryName: Categories
-- cartID: Cart_Detail


-- Tương ứng với nhóm (GROUP BY) sẽ có các hàm tổng hợp (Count, Sum)

SELECT CategoryID, Count(ProductID) AS SLSanPham
FROM Products
GROUP BY CategoryID
ORDER BY SLSanPham DESC
LIMIT 1

SELECT CategoryID, Count(ProductID) SLSanPham
FROM Products
WHERE Price > 2000 -- lọc trước
GROUP BY CategoryID

SELECT CategoryID, Count(ProductID) SLSanPham
FROM Products
GROUP BY CategoryID
HAVING SLSanPham > 1 -- lọc cho mỗi nhóm

/*
 APIs:
- Lấy danh sách sản phẩm trong giỏ hàng của 1 userId
- Lấy danh sách sản phẩm trong thuộc 1 categoryId
- Lấy danh sách sản phẩm dựa trên rating
- Lấy danh sách sản phẩm dựa trên price (min, max)
WHERE Price >= min AND Price <= max

GET
api/products?min=5000&max=10000

const {min, max} = req.query

- Lấy tổng tiền sản phẩm của 1 giỏ hàng của 1 userId
- Lấy danh sách sản phẩm nhưng sắp xếp theo giá từ thấp đến cao / từ cao đến thấp / rating từ thấp đến cao / rating từ cao đến thấp

*/	
	
	