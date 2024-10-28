// Synchronous và Asynchronous

// Synchronous:
// - Đồng bộ: Các hàm được thực hiện tuần tự, mỗi hàm phải hoàn thành trước khi hàm tiếp theo được thực hiện.
// - Blocking: Khi một hàm được thực hiện, nó sẽ block các hàm khác từ việc thực hiện.

// Asynchronous:
// - Bất đồng bộ: Các hàm được thực hiện đồng thời, không cần phải hoàn thành hàm này mới thực hiện hàm kia.
// - Non-blocking: Khi một hàm được thực hiện, nó sẽ không block các hàm khác từ việc thực hiện.

// Asynchronous thường được sử dụng trong các tác vụ như:
// - Lấy dữ liệu từ server
// - Đọc/ghi file
// - Thực hiện các tác vụ nặng (heavy task) như xử lý ảnh, video, âm thanh, ...

// Cách 1: Promise: lời hứa
// Cách 2: Async/await: cú pháp mới, nhưng dựa trên Promise.


// Hàm gọi API: fetch
// - fetch(url) trả về một Promise
// - fetch(url, {method: 'GET'})  url: ?name=Khanh 
// - fetch(url, {method: 'POST', body: JSON.stringify(data)})

// JSON: JavaScript Object Notation (Định dạng đối tượng JavaScript)
// - Là một định dạng dữ liệu đơn giản, dễ đọc và dễ dùng.
// - Dùng để giao tiếp giữa các server và client.
// - Dữ liệu trong JSON là các cặp key-value.
// - Key phải là string, value có thể là string, number, boolean, array, object, null.

// JSON.stringify(data): chuyển đổi đối tượng JavaScript thành chuỗi JSON: khi gửi dữ liệu lên server.
// JSON.parse(string): chuyển đổi chuỗi JSON thành đối tượng JavaScript: khi nhận dữ liệu từ server.
// .json(): trả về một Promise, chuyển đổi chuỗi JSON thành đối tượng JavaScript.


/*
// Ví dụ: fetch + Promise
fetch('https://form-test-api.vercel.app/api/products') // Lấy dữ liệu từ server
    .then(response => response.json()) // Chuyển đổi chuỗi JSON thành đối tượng JavaScript
    .then(data => console.log(data))
    .catch(error => console.log(error)) // Xử lý lỗi, tránh crash chương trình
    .finally(() => console.log('Done')); // Chạy sau khi fetch hoàn thành, dù có lỗi hay không.
*/

console.log('Hello');


// Fetch + Async/await + try/catch
// Biến trạng thái:
let page = 1

async function fetchData(page) { // async đặt trước function để biến nó thành một hàm bất đồng bộ, trả về một Promise.
    try {
        const response = await fetch(`https://form-test-api.vercel.app/api/products?page=${page}`); // await đợi cho Promise trả về kết quả, sau đó gán vào biến response.
        const data = await response.json(); // await đợi cho Promise trả về kết quả, sau đó gán vào biến data.
        console.log(`Trang ${data.currentPage} / ${data.totalPages}`);
    } catch (error) {
        console.log(error);
    } finally {
        console.log('Done');
    }
}

fetchData(page);

// document.getElementById('nextPage').onclick = () => {
//     page++;
//     const data = await fetchData(page);
//     renderProducts(data.products);
// }




// Ví dụ: POST: 2 cách gửi dữ liệu (formData (<form>), JSON.stringify (js))
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'Blog số 1',
      body: 'Nội dung blog số 1',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json', // 'Content-type': là header của request, dùng để server biết được dữ liệu gửi lên là json.
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));


// Ví dụ:
async function postData() {
    try {
        const response = await fetch('https://reqres.in/api/login', {
            method: 'POST',
            body: JSON.stringify({ // chuyển đổi đối tượng JavaScript thành chuỗi JSON.
                email: 'eve.holt@reqres.in',
                password: 'cityslicka'
            }),
            headers: {
                'Content-type': 'application/json',
            },
        })
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

postData()