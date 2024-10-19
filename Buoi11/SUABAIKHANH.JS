

const products =[
    {id:1, name: "Áo thun", category: "Quần áo", price: 150000, rating: 4.5},
    {id:1, name: "Quần jeans", category: "Quần áo", price: 450000, rating: 4.2},
    {id:1, name: "Giày thể thao", category: "Giày dép", price: 800000, rating: 4.7},
    {id:1, name: "Túi xách", category: "Phụ kiện", price: 600000, rating: 4.0},
    {id:1, name: "Đồng hồ", category: "Phụ kiện", price: 120000, rating: 4.8},
    {id:1, name: "Mủ lưỡi trai", category: "Phụ kiện", price: 100000, rating: 3.9},
];

// VÍ DỤ VỀ FILTER
const filtered_products_example = products.filter((product) => {
    return product.category === "Thời trang"   // HARD CODE
})
console.log(filtered_products_example)


// Tránh hard code => Tạo hàm dùng chung
function filter_product_by_category(products, category) {
    return products.filter((product) => {
        return product.category === category
    })
}
let category = 'Thời trang'
const filtered_products = filter_product_by_category(products, category)
console.log(filtered_products)


    
    
    //-----------Bài tập 1
    function sortcategory(products, category){
        const new_products = []

        for(let i = 0;i < products.length;i++){
            if(products[i].category === category){
                new_products.push(products[i])
            }
        }

        return new_products
    }


    //-----------Bài tập 2
    function sortPrice(products, minPrice, maxPrice){
        const new_products = []

        for(let i = 0;i < products.length;i++){
            if(products[i].price >= minPrice && products[i].price <= maxPrice){
                new_products.push(products[i])
            }
        }

        return new_products
    }
    
    
    //-----------Bài tập 3
    function sortrating(products){
        for(let i = 0;i < products.length;i++){
            if(products[i].rating > 4.2){
                console.log(products[i])
            }
        }
    }
    
    
    //-----------Bài tập 4
    function sortcategory(products){
        for(let i = 0;i < products.length;i++){
            if(products[i].category == "Thời trang" && products[i].price< 500000 && products[i].rating > 4.0){
                console.log(products[i])
            }
        }
    }
    
    //-----------Bài tập 5
    const new_products = products.slice() // [...products]
    new_products.sort((a, b) => a.price - b.price)
    console.log(new_products)