SQL chia thành 5 loại ngôn ngữ

1. DDL (Data Definition Language) - Ngôn ngữ định nghĩa dữ liệu
Ví dụ:
CREATE
ALTER
DROP
TRUNCATE TABLE tên_bảng: xoá toàn bộ dữ liệu nhưng vẫn giữ cấu trúc bảng

2. DML (Data Manipulation Language) - Ngôn ngữ thao tác dữ liệu
INSERT INTO
UPDATE tên_bảng SET tên_cột = giá_trị WHERE điều_kiện
DELETE FROM tên_bảng WHERE điều_kiện

3. DQL (Data Query Language) - Ngôn ngữ truy vấn dữ liệu
SELECT tên_cột FROM tên_bảng...

https://giangtester.com/thu-tu-run-cau-lenh-sql/


4. DCL (Data Control Language) - Ngôn ngữ điều khiển dữ liệu
GRANT
REVOKE

5. TCL (Transaction Control Language) - Ngôn ngữ điều khiển giao dịch
BEGIN
COMMIT
ROLLBACK

Chuyển 50k từ người A sang người B:

BEGIN TRANSACTION:
SELECT sotientrongtaikhoan FROM users WHERE userName = 'A'
UPDATE users SET sotientrongtaikhoan = sotientrongtaikhoan - 50 WHERE userName = 'A'
UPDATE users SET sotientrongtaikhoan = sotientrongtaikhoan + 50 WHERE userName = 'B'
END