# NOSQL

https://www.w3schools.com/mongodb/mongodb_query_operators.php
https://mongoosejs.com/docs/api/array.html

# Sự khác nhau giữa NoSQL và SQL
1. SQL: ngôn ngữ truy vấn có cấu trúc: bảng và quan hệ giữa các bảng: cấu trúc chặt chẽ, schema cố định
NoSQL: lưu trữ dữ liệu theo dạng tài liệu (document): JSON, XML, BSON, ...: cấu trúc linh hoạt, schema động

2. SQL: db => table => row
MongoDB: db => collection => document
2 document trong cùng 1 collection không cần phải có cấu trúc giống nhau

3.
SQL: có thể dùng sequelize ORM (Object Relational Mapping)
MongoDBL: có thể dùng mongoose ODM (Object Data Modeling)

4.
SQL: ứng dụng vào các hệ thống cần ACID (Atomicity, Consistency, Isolation, Durability): cần đảm bảo tính toàn vẹn dữ liệu
NoSQL: ứng dụng vào các hệ thống cần sự mở rộng (scalability) và hiệu suất cao (performance) (BASE: Basically Available, Soft state, Eventually consistent)

5.
mongoose: MVC:
- Model: Định nghĩa Collection (Schema)
- Service: Thao tác với Collection

mongodb-community: db
mongosh: shell
mongodb compass: GUI


6. 2 cách thiết kế Mongodb
- Embedded Document: nhúng document con vào document cha
- Reference Document: lưu _id của document cha vào document con


Ví dụ:
Trong SQL: 1 Category thì n Product
Product {
    id: 1,
    name: 'Product 1',
    categoryId: 1 (references Category)
}

Trong NoSQL:
- Reference Document:
Category {
    _id: 1,
    name: 'Category 1'
}
Product {
    _id: 1,
    name: 'Product 1',
    categoryId: 1 (references Category)
}

- Embedded Document:
Category {
    _id: 1,
    name: 'Category 1',
    products: [
        {
            _id: 1,
            name: 'Product 1'
        },
        {
            _id: 2,
            name: 'Product 2'
        }
    ]
}

Comment {
    _id: 1,
    content: 'Comment 1',
    user: {
        _id: 1,
        name: 'User 1'
    },
    relies: [
        {
            _id: 2,
            content: 'Comment 2'
        },
        {
            _id: 3,
            content: 'Comment 3'
        }
    ]
}