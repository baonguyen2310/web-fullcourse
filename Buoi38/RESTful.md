1. REST (Representational State Transfer): Tập hợp các nguyên tắc viết API
- Representational (Biểu diễn tài nguyên): Không trả về bản gốc của tài nguyên, mà là trả về biểu diễn của nó: JSON, XML
- State (Trạng thái): Stateless (Không có trạng thái): không giữ kết nối liên tục, mỗi lần kết nối đều độc lập
/login
/delete-user: request chứa thông tin xác thực (token)
Mỗi request HTTP phải chứa đầy đủ thông tin cần thiết
- Transfer (trao đổi dữ liệu qua HTTP): sử dụng các phương thức HTTP: GET, POST, PUT, DELETE, PATCH


2. RESTful API: là các API tuân thủ các nguyên tắc REST

3. Các nguyên tắc REST:

3.1. Sử dụng HTTP Method đúng cách:
GET /users
POST /users
PUT /users/:id
PATCH /users/:id
DELETE /users/:id
GET /users/:id

3.2. Thiết kế URL thân thiện
- Dùng danh từ số nhiều cho tài nguyên
SAI: DELETE /delete-users/:id: HTTP Method đã có hành động
- Nếu có quan hệ giữa các tài nguyên:
GET /cart/:id/products : lấy danh sách sản phẩm trong cart_id...
Ví dụ: /cart/1/products : lấy danh sách sản phẩm trong giỏ hàng có ID = 1
- Filter (Lọc), Sort (Sắp xếp), Page (Phân trang)
Ví dụ Lọc: GET /books?author=Khanh&category=comic : Lọc theo cột author và category
Ví dụ Sắp xếp: GET /books?sort=published_date&order=desc : Sắp xếp theo cột published_date thứ tự ASC (DESC)
GET /books?sortby=published_date&orderby=desc
GET /books?sort=-published_date
Ví dụ Phân trang: GET /products?page=1&limit=10 : Lấy danh sách 10 sản phẩm ở trang 1
GET /products?page=1&offset=10
GET /products?cursor=abc&limit=10

3.3. Sử dụng status code HTTP hợp lý:
200 OK - Thành công
201 Created - Tạo mới thành công
204 No Content - Xoá thành công, không trả về nội dung
400 Bad request - Yêu cầu sai
401 Unauthorized - Chưa xác thực
403 Forbidden - Xác thực rồi, nhưng không có quyền truy cập
404 Not found - Không tìm thấy tài nguyên
500 Internal Server Error - Lỗi server

3.4. Trả về JSON có cấu trúc hợp lý:
- request success:
{
    "status": "success",
    "data": {...},
    "message": "created user success"
}


- request failed:
{
    "status": "error",
    "data": null,
    "message": "missing product_name"
}

3.5. Có tài liệu API rõ ràng: Swagger
- Thủ công
- Tự động

3.6. API có version