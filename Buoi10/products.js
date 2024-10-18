const products = [
    {
      id: 1,
      name: "Áo thun unisex",
      price: 99000,
      image: "https://example.com/ao-thun.jpg",
      category: "Thời trang"
    },
    {
      id: 2,
      name: "Tai nghe Bluetooth",
      price: 299000,
      image: "https://example.com/tai-nghe.jpg",
      category: "Điện tử"
    },
    {
      id: 3,
      name: "Balo laptop",
      price: 259000,
      image: "https://example.com/balo.jpg",
      category: "Phụ kiện"
    },
    {
      id: 4,
      name: "Sữa rửa mặt",
      price: 89000,
      image: "https://example.com/sua-rua-mat.jpg",
      category: "Mỹ phẩm"
    },
    {
      id: 5,
      name: "Giày thể thao",
      price: 399000,
      image: "https://example.com/giay-the-thao.jpg",
      category: "Giày dép"
    },
    {
      id: 6,
      name: "Ốp lưng điện thoại",
      price: 49000,
      image: "https://example.com/op-lung.jpg",
      category: "Phụ kiện điện thoại"
    },
    {
      id: 7,
      name: "Nồi cơm điện",
      price: 599000,
      image: "https://example.com/noi-com-dien.jpg",
      category: "Đồ gia dụng"
    },
    {
      id: 8,
      name: "Sách tự học tiếng Anh",
      price: 79000,
      image: "https://example.com/sach-tieng-anh.jpg",
      category: "Sách"
    },
    {
      id: 9,
      name: "Máy sấy tóc",
      price: 199000,
      image: "https://example.com/may-say-toc.jpg",
      category: "Đồ gia dụng"
    },
    {
      id: 10,
      name: "Quần jean nam",
      price: 259000,
      image: "https://example.com/quan-jean.jpg",
      category: "Thời trang"
    },
    {
      id: 11,
      name: "Bàn phím cơ",
      price: 699000,
      image: "https://example.com/ban-phim.jpg",
      category: "Điện tử"
    },
    {
      id: 12,
      name: "Nước hoa nữ",
      price: 499000,
      image: "https://example.com/nuoc-hoa.jpg",
      category: "Mỹ phẩm"
    },
    {
      id: 13,
      name: "Đồng hồ thông minh",
      price: 899000,
      image: "https://example.com/dong-ho.jpg",
      category: "Điện tử"
    },
    {
      id: 14,
      name: "Túi xách nữ",
      price: 299000,
      image: "https://example.com/tui-xach.jpg",
      category: "Phụ kiện"
    },
    {
      id: 15,
      name: "Bộ nồi inox",
      price: 599000,
      image: "https://example.com/bo-noi.jpg",
      category: "Đồ gia dụng"
    },
    {
      id: 16,
      name: "Kem chống nắng",
      price: 159000,
      image: "https://example.com/kem-chong-nang.jpg",
      category: "Mỹ phẩm"
    },
    {
      id: 17,
      name: "Chuột không dây",
      price: 129000,
      image: "https://example.com/chuot.jpg",
      category: "Điện tử"
    },
    {
      id: 18,
      name: "Dép nam",
      price: 79000,
      image: "https://example.com/dep-nam.jpg",
      category: "Giày dép"
    },
    {
      id: 19,
      name: "Máy ép trái cây",
      price: 399000,
      image: "https://example.com/may-ep-trai-cay.jpg",
      category: "Đồ gia dụng"
    },
    {
      id: 20,
      name: "Áo khoác nữ",
      price: 359000,
      image: "https://example.com/ao-khoac.jpg",
      category: "Thời trang"
    }
  ];

// lọc các sản phẩm có price < 50000

// for (let i = 0; i < products.length; i++) {
//   if (products[i].price < 50000) {
//     console.log(products[i])
//   }
// }

// lọc sản phẩm theo danh mục thời trang

// for (let i = 0; i < products.length; i++) {
//   if (products[i].category == "Thời trang") {
//     console.log(products[i])
//   }
// }

// vòng lặp while
// let i = 0
// while (i < products.length) {
//   if (products[i].category == "Thời trang") {
//     console.log(products[i])
//   }
//   i++
// }
// console.log(i)




// Cấu trúc rẽ nhánh

// Câu điều kiện: if
console.log(5 == 5) // true
console.log(5 != 5) // false
console.log(5 == '5') // true : so sánh giá trị
console.log(5 === '5') // false : so sánh giá trị và kiểu dữ liệu
 

let age = 19
if (age < 18) {
  console.log('Chưa đủ tuổi lao động')
} else if (age > 65) {
  console.log('Quá tuổi tuổi lao động')
} else {
  console.log('Trong độ tuổi lao động')
}


console.log(age < 18 ? "Chưa đủ tuổi" : "Đã đủ tuổi")
console.log(age > 65 ? "Đã quá tuổi" : "Nhỏ tuổi")

let disabled = true
console.log(disabled ? "Ẩn nút" : "Hiện nút")

// switch case: chỉ nên dùng cho các giá trị rời rạc
// không dùng cho các giá trị liên tục
// ví dụ: thứ 2, thứ 3, thứ 4

let dayOfWeek = 0
switch (dayOfWeek) {
  case 0:
    console.log('Thứ hai')
    break
  case 1:
    console.log('Thứ ba')
    break
  case 2:
    console.log('Thứ tư')
    break
  case 3:
    console.log('Thứ năm')
    break
  default:
    console.log('Nhập sai')
}


// Hàm

function sum(a, b) {
  return a + b
}

const sum2 = (a, b) => {
  return a + b
}

console.log(sum(1, 2))
console.log(sum2(1, 2))


let a = 1
function increase(a) { // a là tham số (parameter)
  a++
}

increase(a) // a là đối số

// Truyền tham trị: truyền giá trị của a (1)


// QUAN TRỌNG:
// Khi gọi hàm, js luôn truyền tham trị


// Nhưng giá trị của biến mảng là tham chiếu đến đối tượng mảng
// Cho nên truyền tham trị mảng tức là truyền tham chiếu đến đối tượng mảng
// (array, object)


console.log(a)


const arr = [1, 2, 3, 4, 5]
function changeArray(arr) {
  // arr[0] = 2
  arr = [2, 2, 3, 4, 5] // gán biến arr trong hàm tham chiếu tới 1 đối tượng mảng khác
}

changeArray(arr)
console.log(arr) // [1, 2, 3, 4, 5]


arr[0] = 2  // arr là hằng, nhưng arr[0] là đối tượng con, không phải hằng
console.log(arr) // [2, 2, 3, 4, 5]

// => mảng, object thường khai báo bằng const





// ----------- BÀI TẬP ---------------
const cart = [
  {
    product: products[0],
    quantity: 1
  },
  {
    product: products[5],
    quantity: 3
  }
]

function totalPrice(cart) {
  let total = 0
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].product.price * cart[i].quantity
  }

  return total
}

let total = totalPrice(cart)
console.log(total)