// Sửa bài: SHOPEE
const product1 = {
    name: "Quần kaki",
    price: 10,
    quantity: 2
}

const product2 = {
    name: "Áo sơ mi",
    price: 20,
    quantity: 1
}

const product3 = {
    name: "Giày thể thao",
    price: 30,
    quantity: 3
}

const cart = [product1, product2, product3];

// Tính tổng tiền của tất cả các sản phẩm trong giỏ hàng
let total = 0;
for (let i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].quantity;
}

console.log("Tổng tiền: ", total);

// Tính tổng tiền của tất cả các sản phẩm trong giỏ hàng sau khi giảm giá 10%
total = total * 0.9;
console.log("Tổng tiền sau khi giảm giá 10%: ", total);

// Tính tổng tiền của tất cả các sản phẩm trong giỏ hàng sau khi giảm giá 10% và có phí ship 10.000đ
total = total + 10000;
console.log("Tổng tiền sau khi giảm giá 10% và có phí ship 10.000đ: ", total);

