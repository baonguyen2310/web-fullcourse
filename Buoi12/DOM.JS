document.getElementById('header2').style.color = 'blue'


const products = [
    {id:1, name: "Áo thun", category: "Quần áo", price: 150000, rating: 4.5},
    {id:2, name: "Quần jeans", category: "Quần áo", price: 450000, rating: 4.2},
    {id:3, name: "Giày thể thao", category: "Giày dép", price: 800000, rating: 4.7},
    {id:4, name: "Túi xách", category: "Phụ kiện", price: 600000, rating: 4.0},
    {id:5, name: "Đồng hồ", category: "Phụ kiện", price: 120000, rating: 4.8},
    {id:6, name: "Mủ lưỡi trai", category: "Phụ kiện", price: 100000, rating: 3.9},
];

// const productElement = document.createElement('li') // tạo phần tử (element) html
// productElement.innerHTML = 'Product 1'  // thêm Text vào element li
// document.getElementById('products').appendChild(productElement) // thêm productElement vào ul


// Dùng for: Cách 1: Dùng literal string
// for (let i = 0; i < products.length; i++) {
//     const productElement = document.createElement('li')
//     productElement.innerHTML = `
//         <p class='product-name'>${products[i].name}</p>
//         <p class='product-price'>${products[i].price}</p>
//     `
//     document.getElementById('products').appendChild(productElement)
// }

// Dùng for: Tạo toàn bộ bằng createElement
products.forEach(product => {
    const productElement = document.createElement('li');

    const productNameElement = document.createElement('p');
    productNameElement.textContent = product.name;
    productNameElement.classList.add('product-name');

    productNameElement.onclick = handleProductClick

    const productPriceElement = document.createElement('p');
    productPriceElement.textContent = product.price;
    productPriceElement.classList.add('product-price');

    productElement.appendChild(productNameElement);
    productElement.appendChild(productPriceElement);

    document.getElementById('products').appendChild(productElement);
});



function handleProductClick(event) {
    const productElementList = document.getElementById('products') // ul element
    Array.from(productElementList.getElementsByClassName('product-name')).forEach((item) => {
        item.classList.remove('active')
    })

    event.target.classList.add('active')
}