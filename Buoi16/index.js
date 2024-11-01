// 1. Vanilla JS (js thuần): cần hàm render, update DOM mỗi khi có sự thay đổi về state, không tái sử dụng code
// 2. ReactJS (thư viện): cấu trúc component, tái sử dụng code, không cần render, tự động update DOM mỗi khi có sự thay đổi về state
// 3. NextJS (framework): framework sử dụng ReactJS, tối ưu, cấu trúc chuẩn

// Cú pháp JSX (Viết HTML trong JS)

// Ví dụ:

const Product = ({name, price}) => { // function component: luôn bắt đầu bằng uppercase
    return (
        <div>
            <h1>Product</h1>
            <p>Product Name: {name}</p>
            <p>Product Price: {price}</p>
        </div>
    )
}

// 1. Tạo dự án NextJS: npx create-next-app <tên-dự-án>
// 2. Chạy dự án: npm run dev
// 3. Cấu trúc dự án:
// - package.json: chứa các thông tin về dự án, các câu lệnh, các thư viện (dependencies), thư viện phát triển (devDependencies)
// - src: + app: chứa các page, layout
//        + components: chứa các component dùng chung(thành phần tái sử dụng)
// - public: chứa các file tĩnh (image, icon, ...)
// - .env: chứa các biến môi trường: API key, ...
// - .next: chứa các file cache, build, ...
// - node_modules: chứa các thư viện


// import { useState, useEffect } from 'react': các hook của ReactJS
// useState: quản lý state

// Ví dụ:
// const [page, setPage] = useState(1) : page là biến trạng thái, setPage là hàm để thay đổi biến trạng thái, 1 là giá trị ban đầu

// Khi gọi setState => state thay đổi => ReactJS sẽ tự động render lại component (gọi lại hàm component)
// Chú ý: state không được thay đổi trực tiếp, phải thông qua setState
// ReactJS chỉ re-render các thành phần có sự thay đổi state


// useEffect: quản lý sự kiện


// Ví dụ:
async function fetchProducts() {
    const response = await fetch(`https://form-test-api.vercel.app/api/products?page=${page}`)
    const data = await response.json()
    return data
}

useEffect(() => { // useEffect nhận 2 tham số: callback function, mảng các dependencies
    fetchProducts()
}, [page]) // Mỗi khi page thay đổi => useEffect sẽ chạy lại callback function

// Có 3 loại useEffect:
// 1. useEffect không có dependencies: chạy mỗi khi component re-render

// Ví dụ:
useEffect(() => {
    console.log('Component re-render')
})

// 2. useEffect có mảng dependencies rỗng: chạy một lần duy nhất sau khi component mount

// Ví dụ:
useEffect(() => {
    console.log('Component re-render')
}, [])

// 3. useEffect có mảng dependencies: chạy mỗi khi dependencies thay đổi

// Ví dụ:
useEffect(() => {
    console.log('Component re-render')
}, [page])