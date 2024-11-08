// ES6

// 1. Destructuring
// 1.1. Destructuring object
// Ví dụ:
const student = {
    name: 'John',
    age: 20,
    gender: 'male'
};

// Cách bình thường
// const name = student.name
// const age = student.age
// const gender = student.gender

// Cách dùng Destructuring
const { name, age, gender } = student

// 1.2. Destructuring array
// Ví dụ 1:
const products = ['Ao', 'Quan', 'Giay']

// Cách bình thường
// const product1 = products[0]
// const product2 = products[1]
// const product3 = products[2]

// Cách dùng Destructuring
const [product1, product2, product3] = products

// Ví dụ 2: swap a va b
// Cách bình thường
// let a = 5
// let b = 10
// let c = 0
// c = a
// a = b
// b = c
// console.log(a)
// console.log(b)

// Cách dùng Destructuring
// const [x, y] = [b, a]
// console.log(x)
// console.log(y)

let a = 5
let b = 6;
[a, b] = [b, a];
console.log(`${a} ${b}`);


// 2. Spread operator (toán tử giải)
// Ví dụ:
const arr1 = [1, 2, 3, 4]
const arr2 = [6, 7, 8, 9]

const arr3 = [ ...arr1, 5, ...arr2, 10 ]
console.log(arr3)

// const arr1_copy = arr1.splice()
const arr1_copy = [...arr1]


// 3. Rest Parameters (các tham số còn lại): gộp các tham số còn lại thành 1 mảng
function sum(a, b, ...args){
    let total = a + b
    for(let i = 0; i < args.length; i++) {
        total += args[i]
    }
    
    return total
}

const total = sum(1, 2, 3, 4)
console.log(total)

// 4. import, export