// Giả sử chúng ta có một mảng các sản phẩm như sau:
const products = [
  { id: 1, name: "Áo thun", category: "Quần áo", price: 150000, rating: 4.5 },
  { id: 2, name: "Quần jeans", category: "Quần áo", price: 450000, rating: 4.2 },
  { id: 3, name: "Giày thể thao", category: "Giày dép", price: 800000, rating: 4.7 },
  { id: 4, name: "Túi xách", category: "Phụ kiện", price: 600000, rating: 4.0 },
  { id: 5, name: "Đồng hồ", category: "Phụ kiện", price: 1200000, rating: 4.8 },
  { id: 6, name: "Mũ lưỡi trai", category: "Phụ kiện", price: 100000, rating: 3.9 },
];

// Bài tập 1: Viết hàm lọc sản phẩm theo danh mục
function filterByCategory(products, category) {
  return products.filter(product => product.category === category);
}

// Bài tập 2: Viết hàm lọc sản phẩm theo khoảng giá
function filterByPriceRange(products, minPrice, maxPrice) {
  return products.filter(product => product.price >= minPrice && product.price <= maxPrice);
}

// Bài tập 3: Viết hàm lọc sản phẩm theo đánh giá (rating) tối thiểu
function filterByMinRating(products, minRating) {
  return products.filter(product => product.rating >= minRating);
}

// Bài tập 4: Viết hàm lọc sản phẩm kết hợp tất cả các tiêu chí trên
function filterProducts(products, category, minPrice, maxPrice, minRating) {
  return products.filter(product => 
    (!category || product.category === category) &&
    (!minPrice || product.price >= minPrice) &&
    (!maxPrice || product.price <= maxPrice) &&
    (!minRating || product.rating >= minRating)
  );
}

// Kiểm tra kết quả
console.log("Sản phẩm thuộc danh mục 'Quần áo':");
console.log(filterByCategory(products, "Quần áo"));

console.log("Sản phẩm có giá từ 300,000đ đến 1,000,000đ:");
console.log(filterByPriceRange(products, 300000, 1000000));

console.log("Sản phẩm có đánh giá từ 4.5 sao trở lên:");
console.log(filterByMinRating(products, 4.5));

console.log("Sản phẩm thuộc danh mục 'Phụ kiện', giá từ 500,000đ đến 2,000,000đ, đánh giá từ 4.0 sao trở lên:");
console.log(filterProducts(products, "Phụ kiện", 500000, 2000000, 4.0));
