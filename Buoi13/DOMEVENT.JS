// DOM EVENT

// Một số event thường dùng: click, mouseover, mouseout, keydown, keyup, submit, change, focus, blur, load, resize, scroll

// 3 cách bắt sự kiện bằng js:
// 1. Inline event: Đặt trực tiếp trong html
// 2. DOM event: Đặt trong script
// 3. Event listener: Dùng addEventListener

// Ví dụ:


// 1. Inline event:
// Trong html: <button onclick="handleClick()">Click me</button>

function handleClick() {
    alert('Button clicked');
}

// 2. DOM event:
// Trong html: <button id="btn2">BUTTON 2</button>
document.getElementById('btn2').onclick = handleClick


// 3. Event listener: 2 đối số: event type và callback function (listener)
// Trong html: <button id="btn3">BUTTON 3</button>
document.getElementById('btn3').addEventListener('click', handleClick)


// Ví dụ: Tăng giảm số lượng sản phẩm cần mua: Giữ trạng thái bằng biến trạng thái
// B1: Bắt sự kiện click
// B2: Tăng giảm biến trạng thái
// B3: Cập nhật lại giá trị trên input

let quantity = 1

document.getElementById('increase-quantity-btn').addEventListener('click', () => {
    if (quantity < 1000) {
        quantity++
        document.getElementById('quantity-input').value = quantity
    }
})

// Thêm: Thay đổi giá trị trên input
// B1: Bắt sự kiện onchange trên input
// B2: Cập nhật lại biến trạng thái

document.getElementById('quantity-input').onchange = (event) => {
    quantity = event.target.value  // event.target là phần tử đang kích hoạt sự kiện
}