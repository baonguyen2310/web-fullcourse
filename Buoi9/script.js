console.log("Hello World From script.js")

// Hoisting biến
console.log(a); // var hoisting được
// console.log(b); // let, const không hoisting được

// Phạm vi biến
// Global Scope (biến toàn cục)
var a = 10;
let b = 10;
const c = 20;

// Local Scope (biến cục bộ)
function test() {
    var a = 10;
    let b = 20;
    const c = 30;
}

// Block Scope (biến khối)
for (let i = 0; i < 10; i++) {
    var a = 10; // Global Scope
    let b = 20; // Block Scope
    const c = 30; // Block Scope
}

// var: khai báo biến
// let: khai báo biến (ES6)
// const: khai báo hằng (ES6)

// var chỉ phân biệt toàn cục và cục bộ
// let và const phân biệt toàn cục, cục bộ và khối


// var có thể hoisting biến (sử dụng trước khi khai báo)
// let và const không thể hoisting biến




// KHÔNG NÊN HOISTING BIẾN, NHƯNG CÓ THỂ HOISTING HÀM
// Ví dụ:


function main() {
    console.log(sum(1, 2));
    console.log(subtract(1, 2));
    console.log(multiply(1, 2));
    console.log(devide(1, 2));
}



function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function devide(a, b) {
    return a / b;
}


let t;
console.log(t); // undefined (biến đã được khai báo nhưng không được gán giá trị)



// Object Cat

let cat = {
    name: "Tom",
    color: "black",
    weight: 5,
    type: "Mèo nhà",
    run: function () {
        console.log("Mèo đang chạy");
    },
    sleep: function () {
        console.log("Mèo đang ngủ");
    },
    eat: function () {
        console.log("Mèo đang ăn");
    }
}

console.log(cat.name);
console.log(cat.color);
cat.run();
cat.eat();

// Array

const arr = [1, 2, 3, 4, 5];
console.log(arr[0]); // 1
console.log(arr[1]); // 2
console.log(arr[2]); // 3
console.log(arr[3]); // 4
console.log(arr[4]); // 5


// Ép kiểu ngầm định
let x = 10; // number
let y = "20"; // string
console.log(x + y); // 1020 vì ép kiểu ngầm định x thành string: "10" + "20" = "1020"
console.log(x - y); // -10 vì ép kiểu ngầm định y thành number: 10 - 20 = -10

console.log(Boolean(x));
console.log(Boolean(y));

let z = 0;
console.log(Boolean(z));

let w = "";
console.log(Boolean(w));


// FALSY: false, 0, "", null, undefined, NaN, ... khi ép kiểu thành boolean thì sẽ là false
// TRUTHY: true, 1, "a", " ", {a: 1}, [1, 2, 3], ... khi ép kiểu thành boolean thì sẽ là true


const product = {
    name: "Quần kaki",
    price: 10,
    quantity: 2
}


const total = product.price * product.quantity;
console.log("Tổng tiền: ", total);
console.log("Tổng tiền: " + total);
console.log(`Tổng tiền: ${total}`); // ES6




































