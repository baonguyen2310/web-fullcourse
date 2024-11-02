// TailwindCSS: được là không cần code css; mất sự ngắn gọn trong className

// 1. file tailwind.config.js

// 2. file src/app/globals.css có nội dung:
// @tailwind base;
// @tailwind components;
// @tailwind utilities;

// 3. file src/app/layout.js có nội dung:
// import './globals.css'

// 4. Cách dùng: Thêm className của tailwindcss:
// <h1 className='bg-orange-500 text-white text-center'>Hello</h1>


// 5. Để viết class tailwind ngắn gọn:
// B1. Viết class như css thuần: <button className='next-btn' onClick={handleNextBtn}>Next</button>
// B2. Tạo file style.css:
/*
.next-btn {
    @apply text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800;
}
*/
// B3. Import file đó vào file page.js
// import './style.css'