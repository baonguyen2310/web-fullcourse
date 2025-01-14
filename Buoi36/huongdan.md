# Khác biệt quan trọng giữa Store Procedure và Function trong SQL:
- Store Procedure: có thể thay đổi dữ liệu
- Function: không thể thay đổi dữ liệu


=> Store Procedure có thể gọi Function
Function không thể gọi Store Procedure

Function () {
    Procedure()
}

Procedure() {
    Function()
}


SELECT
- tabular: lấy 1 hoặc nhiều hàng dữ liệu
- scalar: lấy 1 giá trị duy nhất (số, chuỗi, ...)


int sum (int a, int b)
{

}

create function sumFunc (in a int, in b int)
returns int
begin
    declare sum int default 0
    set sum = (a + b)

    return sum
end