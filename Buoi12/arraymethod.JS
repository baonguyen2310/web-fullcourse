const products = [
    {id:1, name: "Áo thun", category: "Quần áo", price: 150000, rating: 4.5},
    {id:2, name: "Quần jeans", category: "Quần áo", price: 450000, rating: 4.2},
    {id:3, name: "Giày thể thao", category: "Giày dép", price: 800000, rating: 4.7}
];

// ARRAY METHOD JS

// 1. Các hàm làm thay đổi mảng gốc (mutate): push, pop, shift, unshift, sort, reverse, splice, slice
// => Dùng slice để copy ra mảng mới

const clone_products = products.slice()
clone_products.push({id:4, name: "Dép", category: "Giày dép", price: 800000, rating: 4.7})
console.log(clone_products)

// push: Thêm phần tử vào cuối mảng
// pop: Xóa phần tử cuối mảng
// shift: Xóa phần tử đầu mảng
// unshift: Thêm phần tử vào đầu mảng
// sort: Sắp xếp mảng
// reverse: Đảo ngược mảng
// splice: Xóa hoặc thay thế phần tử
// slice: Copy mảng

// Ví dụ: sort:
clone_products.sort((a, b) => a.rating - b.rating)  // arrow function: hàm mũi tên
console.log(clone_products)

clone_products.sort(function(a, b) {
    return (
        b.rating - a.rating
    )
})
console.log(clone_products)

// Ví dụ: reverse
clone_products.reverse()

// Ví dụ: splice
clone_products.splice(0, 2)
console.log(clone_products)

// Ví dụ: slice
const new_products = products.slice(0, 2)
console.log(new_products)


// 2. Các hàm không làm thay đổi mảng gốc (immutable): map, filter, reduce, forEach, some, every, find, findIndex, includes, indexOf, lastIndexOf, join, split, toString, toLocaleString, concat, slice, substring, substr
products.forEach((product) => console.log('Hello'))

const arr = [1, 2, 3, 4, 5]
// Chuyển mảng thành chuỗi
const str = arr.join('::')
console.log(str)

//Chuyển chuỗi thành mảng
const arr2 = str.split('::')
console.log(arr2)


const found_product = products.find((product) => product.category = 'Quần áo') // chỉ trả về phần tử đầu tiên thoả điều kiện
console.log(found_product)