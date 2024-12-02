- Js: Ngôn ngữ lập trình
- Js có thể chạy trên 2 môi trường: Trình duyệt và Nodejs
- NodeJs: Môi trường chạy Js
- ReactJs: Thư viện Js
- NextJs: Framework sử dụng ReactJs => Dùng làm frontend
- ExpressJs: Framework sử dụng NodeJS => Dùng làm backend


* Thiết kế CSDL:
Ví dụ:
user = {
    userId,
    username,
    password,
    createdAt,
    phone,
    email,
    address,
    firstname,
    lastname
}

product = {
    product_id,
    product_name,
    price,
    category,
    brand,
    stock,
    description,
    url_image,
    tag,
    keyword,
    rating
}


* Kiểm thử:
Ví dụ: Hàm login
INPUT     |       EXPECT        |      OUTPUT
khanh,123           true                true
khanh,abc            false               false

=> Hàm login đúng với 2 testcases


INPUT     |       EXPECT        |      OUTPUT
khanh,123           true                true
khanh,abc           false               true

=> Hàm login đúng với 1/2 testcases