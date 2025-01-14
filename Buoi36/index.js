// Hàm: nhận tham số => Trả về giá trị

// function inc(a) {
//     return ++a
// }

// let a = 5

// a = inc(a)

// console.log(a)

// Thủ tục: Nhận tham số => Không trả về giá trị

function inc2() { // C++, C: con trỏ, C#: out, SQL: out, js: global
    ++a
}

let a = 5

inc2(a)

console.log(a)