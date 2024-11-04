// Nextjs

// Redering: tạo file html
// Có 2 môi trường rendering: server (cách 1, 2) (tạo html trên server), client (cách 3) (tạo html từ js bằng trình duyệt)

// Dữ liệu thì luôn thay đổi

// Cách 1: Static generation (tạo tĩnh): ở server, npm run build ra các file html tĩnh, gửi cho client
// (không liên quan đến dữ liệu, không được gọi api có dữ liệu thay đổi)
// Ví dụ: <h1>Hello</h1>


// Cách 2: Server-side Rendering (tạo mỗi khi người dùng gọi request): ở server, gọi api lấy dữ liệu, tạo file html từ dữ liệu đó, gửi cho client
// (có liên quan đến dữ liệu)
// => Cache tốt => Nhanh


// Cách 3: Client-side Rendering: server gửi javascript và html layout cho người dùng, trên trình duyệt của người dùng, js chạy tạo ra các thẻ html rồi chèn các thẻ này vào html layout. Đây là hành vi mặc định của React

// Ví dụ: server chỉ trả về <ul></ul>, và 1 đoạn js
// Trên client, js được thực thi, gọi api lấy dữ liệu, tạo ra các thẻ <li> chèn vào trong <ul>


// THEO MẶC ĐỊNH, NEXTJS LÀ RENDER PHÍA SERVER
// NHỮNG COMPONENT NÀO CÓ 'use client' THÌ RENDER PHÍA CLIENT
// NHỮNG COMPONENT SỬ DỤNG USESTATE, USEEFFECT (CỦA REACT) THÌ ĐƯỢC XỬ LÝ Ở PHÍA CLIENT, CHO NÊN PHẢI GÁN 'USE CLIENT' ĐỂ NEXTJS BIẾT COMPONENT NÀY LÀ COMPONENT ĐƯỢC RENDER BẰNG CÁCH 3