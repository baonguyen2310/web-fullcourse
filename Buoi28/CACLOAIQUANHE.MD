3 LOẠI QUAN HỆ:

- QUAN HỆ 1-1

Ví dụ 1: User - UserInfo
User: userId, username, password, email
UserInfo: userId, address, phone, gender

1 User thì có 1 UserInfo
1 UserInfo thì có 1 User

Ví dụ 2: User - Cart: 1-1


- QUAN HỆ 1-N

Ví dụ 1: 1 User có nhiều lần Gửi tiết kiệm
        1 lần gửi tiết kiệm thì có 1 User
        User 1 - N GuiTietKiem


- QUAN HỆ N-N: luôn thêm bảng trung gian giữa mối quan hệ N-N

Ví dụ 1: 1 Cart thì có nhiều Product
        1 Product thì có trong nhiều Cart

        Cart N - N Product