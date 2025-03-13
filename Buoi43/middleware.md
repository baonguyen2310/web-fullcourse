# Middleware (Phần mềm trung gian): chặn request trước khi nó đến controller

- Middleware là một hàm có 3 tham số: req, res, next
- Middleware có thể chặn request hoặc thay đổi request
- Middleware có thể chuyển request sang route khác


Cách sử dụng middleware:

Cách 1: Middleware sẽ chặn tất cả routes bên dưới nó
Cách 2: Middleware sẽ chặn route cụ thể