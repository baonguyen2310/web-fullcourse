// Ví dụ đệ quy
function recursiveFunction(n) {
    if (n <= 0) {
        return;
    }
    console.log(n);
    recursiveFunction(n - 1);
}

// CALLBACK FUNCTION
// 1. Là hàm được truyền qua đối số cho một hàm khác
// 2. Hàm callback được thực thi bên trong hàm khác
// Ví dụ:
function myFunction(callback) {
    callback();
}

myFunction(function() {
    console.log('Hello');
});

// myFunction => callback => console.log('Hello')

myFunction(function() {
    console.log(1 + 1);
});


// Lọc
const products = [
    {id:1, name: "Áo thun", category: "Quần áo", price: 150000, rating: 4.5},
    {id:2, name: "Quần jeans", category: "Quần áo", price: 450000, rating: 4.2},
    {id:3, name: "Giày thể thao", category: "Giày dép", price: 800000, rating: 4.7},
    {id:4, name: "Túi xách", category: "Phụ kiện", price: 600000, rating: 4.0},
    {id:5, name: "Đồng hồ", category: "Phụ kiện", price: 120000, rating: 4.8},
    {id:6, name: "Mủ lưỡi trai", category: "Phụ kiện", price: 100000, rating: 3.9},
];


// Lọc bằng for
function filter_products_by_category(products, category) {
    const new_products = []
    for (let i = 0; i < products.length; i++) {
        if (products[i].category === category) { // HARDCODE: quy định điều kiện category
            new_products.push(products[i])
        }
    }
    return new_products
}


// Lọc bằng filter
const category = 'Thời trang'
const new_products = products.filter(function(product) {
    return (
        product.category === category
    )
})
 

// Triển khai lại phương thức filter của mảng
function myFilter(products, callback) {
    const new_products = []
    for (let i = 0; i < products.length; i++) {
        if (callback(products[i])) {    // để cho callback quy định điều kiện
            new_products.push(products[i])
        }
    }

    return new_products
}

myFilter(products, function(product) { // dùng callback để quy định điều kiện
    return (
        product.category === category
    )
})


const minPrice = 50000
myFilter(products, function(product) {
    return (
        product.price >= minPrice
    )
})


// **** NGUYÊN LÝ VIẾT CALLBACK:
// LÚC VIẾT HÀM CHA THÌ CHƯA CÓ CALLBACK, NHƯNG TA NHẬN CALLBACK TỪ THAM SỐ, VÀ GỌI CALLBACK
// LÚC GỌI HÀM CHA, TA MỚI QUY ĐỊNH CALLBACK



// Ví dụ 2: Hàm map
const productRatingList = products.map(function(product) { // HARDCODE: CỐ ĐỊNH ID,NAME,RATING
    return ({
        id: product.id,
        name: product.name,
        rating: product.rating
    })
})

console.log(productRatingList)

// Triển khai lại hàm map
function myMap(products, callback) { // ĐỂ CHO CALLBACK QUY ĐỊNH, CHỈ CẦN ĐƯA CHO CALLBACK PRODUCTS[I]
    const new_products = []
    for(let i = 0; i < products.length; i++) {
        new_products.push(callback(products[i]))
    }

    return new_products
}


myMap(products, function(product) {
    return ({
        id: product.id,
        name: product.name,
        rating: product.rating
    })
})