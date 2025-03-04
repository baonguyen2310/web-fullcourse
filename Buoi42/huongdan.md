- npm i bcrypt: hash password (1 chiều)
- npm i jsonwebtoken: tạo jwt

Luồng V1

# Sign up:
1. Nhận username, password
2. Kiểm tra username có tồn tại => nếu có đăng ký thất bại
3. Đăng ký: hash password => tạo user mới


# Login:
1. Nhận username, password
2. Kiểm tra username có tồn tại không => không có thì fail
3. So sánh password với hash_password trong cơ sở dữ liệu bằng bcrypt.compare => nếu không bằng thì fail
4. Nếu bằng thì login thành công
5. Muốn giữ được trạng thái login thì phải gửi cho client 1 token (jsonwebtoken - jwt), ký token bằng secretKey (nếu là đối xứng), hoặc privateKey (nếu là mã hoá bất đối xứng): jwt.sign


# Mỗi lần client gửi request (ví dụ đổi avatar), gửi kèm jwt 
=> server xác thực jwt này để biết có phải đúng là user đó hay không
xác thực bằng secretKey (nếu là đối xứng), hoặc publicKey (nếu là mã hoá bất đối xứng): jwt.verify
xác thực thông qua middleware


# Frontend: Login => nhận token => lưu token lại
Mỗi lần gửi request, gửi kèm token
Nếu server trả về xác thực token thất bại => Chuyển trang sang trang login