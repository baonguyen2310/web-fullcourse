1. Nếu lưu jwt token trong local storage => có thể dùng js lấy token (tấn công XSS)
API thiết kế chung cho web, app mobile, app desktop vì nhận token bằng json, truyền bằng http header
=> Linh hoạt
=> Kém bảo mật hơn cookie http only

2. Lưu jwt token trong cookie http only => không thể dùng js lấy token
cookie được gửi kèm với mỗi request của từng domain tự động => Bị tấn công CSRF (gỉa mạo yêu cầu trên nhiều trang)
API thiết kế cho web

=> csrf token
+ sameSite strict