USE shopee_suabai

-- CRUD: CREATE, READ, UPDATE, DELETE

-- CREATE
INSERT INTO Categories (CategoryID, ParentCategoryID, CategoryName) VALUES ('5', '3', 'Ao');

-- READ
SELECT * 
FROM Categories;

SELECT CategoryName 
FROM Categories;

-- UPDATE
UPDATE Categories 
SET ParentCategoryID = '2'
WHERE CategoryID = '5'

-- DELETE
DELETE FROM Categories
WHERE CategoryName = 'Ao';