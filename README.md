# Nội dung chi tiết lộ trình học lập trình web

## Mục lục
1. [Frontend](#frontend-25-buổi)
   1. [HTML](#html-5-buổi)
   2. [CSS](#css-7-buổi)
   3. [JavaScript](#javascript-13-buổi)
2. [Backend](#backend-25-buổi)
   1. [Cơ sở dữ liệu](#cơ-sở-dữ-liệu-13-buổi)
      1. [Nền tảng CSDL quan hệ](#nền-tảng-csdl-quan-hệ-3-buổi)
      2. [SQL Server](#sql-server-7-buổi)
      3. [MongoDB](#mongodb-6-buổi)
   2. [Node.js](#nodejs-9-buổi)
3. [Deployment](#deployment)
4. [Công cụ và kỹ năng bổ trợ](#công-cụ-và-kỹ-năng-bổ-trợ)
   1. [VSCode](#vscode)
   2. [Git](#git)
   3. [Chrome DevTools](#chrome-devtools)
   4. [Postman](#postman)
   5. [Terminal/Command Line](#terminalcommand-line)

## Frontend (25 buổi)
### HTML (5 buổi)
#### Buổi 1: Giới thiệu và cấu trúc cơ bản
1. Giới thiệu về HTML và lịch sử phát triển.
   - Định nghĩa HTML (Hypertext Markup Language)
   - Lịch sử phát triển từ HTML 1.0 đến HTML5
   - Vai trò của HTML trong phát triển web

2. Cấu trúc cơ bản của một tài liệu HTML.
   - Thẻ `<!DOCTYPE html>`: Khai báo loại tài liệu
   - Thẻ `<html>`: Phần tử gốc của trang HTML
   - Thẻ `<head>`: Chứa thông tin meta và liên kết đến các tài nguyên
   - Thẻ `<body>`: Chứa nội dung hiển thị của trang web

3. Các thẻ văn bản cơ bản:
   - Thẻ `<p>`: Đoạn văn
   - Thẻ `<h1>` đến `<h6>`: Các cấp độ tiêu đề
   - Thẻ `<span>`: Phân đoạn văn bản inline
   - Thẻ `<strong>`: Nhấn mạnh văn bản (thường in đậm)
   - Thẻ `<em>`: Nhấn mạnh văn bản (thường in nghiêng)

**Bonus:**
    - Cái nhìn tổng quan về lập trình web
    - Terminal cơ bản
    - Git cơ bản
    - Chrome DevTools
    - Deployment với github.io
Bài tập:
1. Tạo trang chủ cho Shopee:
   - Sử dụng h1 cho logo Shopee
   - Tạo một đoạn văn ngắn giới thiệu về Shopee
   - Sử dụng `<strong>` cho các từ khóa quan trọng và `<em>` cho các slogan

2. Thiết kế giao diện chính của ChatGPT:
   - Sử dụng h1 cho tiêu đề "ChatGPT"
   - Sử dụng h2 cho các phần chính (ví dụ: "Hỏi đáp", "Ví dụ", "Hướng dẫn sử dụng")
   - Sử dụng h3 cho các tiêu đề phụ trong mỗi phần
   - Thêm mô tả ngắn cho mỗi phần bằng thẻ p

3. Tạo trang Portfolio cá nhân:
   - Đặt tiêu đề trang là "Portfolio của [Tên của bạn]" trong phần head
   - Trong body, tạo:
     + Một tiêu đề chính (h1) với tên của bạn
     + Phần giới thiệu ngắn (p với em)
     + Ít nhất 3 đoạn văn về kỹ năng, kinh nghiệm và dự án, sử dụng các thẻ p, strong, em, span
     + Kết thúc bằng một câu kêu gọi hành động (ví dụ: "Hãy liên hệ với tôi") sử dụng strong

#### Buổi 2: Các thẻ cơ bản, liên kết và Semantic HTML
1. Thẻ liên kết: `<a>`
   - Cú pháp và thuộc tính cơ bản: href, target, rel
   - Liên kết nội bộ và liên kết ngoài
   - Sử dụng # để tạo bookmark

2. Thẻ hình ảnh: `<img>`
   - Cú pháp và thuộc tính quan trọng: src, alt, width, height
   - Tối ưu hóa hình ảnh cho web
   - Responsive images với srcset và sizes

3. Thẻ danh sách: `<ul>`, `<ol>`, `<li>`
   - Danh sách không thứ tự (unordered list)
   - Danh sách có thứ tự (ordered list)
   - Danh sách lồng nhau
   - Tùy chỉnh kiểu dáng danh sách với CSS

4. Thẻ phân chia và Semantic HTML:
   - `<div>`: Phân chia chung, không mang ý nghĩa ngữ cảnh
   - `<header>`: Đánh dấu phần đầu của trang hoặc một phần nội dung
   - `<nav>`: Chứa các liên kết điều hướng chính
   - `<main>`: Bao bọc nội dung chính của trang
   - `<section>`: Nhóm các nội dung có liên quan với nhau
   - `<article>`: Đánh dấu một nội dung độc lập, có thể tái sử dụng
   - `<aside>`: Chứa thông tin phụ, liên quan đến nội dung xung quanh
   - `<footer>`: Đánh dấu phần cuối của trang hoặc một phần nội dung

5. Tại sao sử dụng semantic HTML và lợi ích của nó:
   - Cải thiện khả năng đọc và bảo trì code
   - Tăng cường khả năng tiếp cận (accessibility) cho người dùng sử dụng công nghệ hỗ trợ
   - Hỗ trợ SEO bằng cách giúp các công cụ tìm kiếm hiểu rõ hơn về cấu trúc và nội dung của trang
   - Cải thiện trải nghiệm người dùng trên các thiết bị khác nhau

6. Các thẻ semantic khác:
   - `<figure>` và `<figcaption>`: Đánh dấu hình ảnh và chú thích

**Bonus:**
    - Kiến thức về url
    - Các đơn vị đo trong máy tính
    - Các hệ đếm
    - Các hệ màu
    - Kinh nghiệm phân tích html trang web
    - Cơ bản về pagination, infinite scroll

**Bài tập thực hành: Lưu ý nên xem các trang web shopee, chatgpt thực tế để phân tích cấu trúc html của chúng**

1. Tiếp tục phát triển trang Portfolio cá nhân:
   - Sử dụng `<header>` cho phần đầu trang với tên và ảnh đại diện
   - Tạo menu navigation với `<nav>` và danh sách liên kết đến các phần của trang
   - Sử dụng `<main>` bao quanh nội dung chính của trang
   - Áp dụng `<section>` cho các phần: Giới thiệu, Kỹ năng, Dự án
   - Thêm hình ảnh minh họa cho mỗi dự án trong phần Dự án, sử dụng `<figure>` và `<figcaption>`
   - Sử dụng `<article>` cho mỗi dự án trong danh sách
   - Dùng `<aside>` cho banner quảng cáo
   - Sử dụng `<footer>` cho thông tin liên hệ và liên kết mạng xã hội

2. Mở rộng trang chủ Shopee:
   - Tạo `<header>` với logo Shopee và menu navigation chính
   - Áp dụng `<nav>` cho menu điều hướng chính
   - Sử dụng `<main>` bao quanh phần nội dung chính của trang
   - Áp dụng `<section>` cho các phần chính: Banner quảng cáo, Danh mục sản phẩm, Flash Sale
   - Trong phần Danh mục sản phẩm, sử dụng `<article>` cho mỗi danh mục và sản phẩm
   - Thêm `<aside>` cho phần sidebar với các bộ lọc sản phẩm
   - Sử dụng danh sách để liệt kê các sản phẩm nổi bật
   - Áp dụng `<footer>` cho phần cuối trang

3. Phát triển giao diện chính của ChatGPT:
   - Áp dụng `<header>` cho phần đầu trang chứa logo và menu người dùng
   - Sử dụng `<nav>` cho menu lịch sử chat
   - Tạo grid layout với `<main>` bao quanh khu vực chat chính
   - Sử dụng `<article>` cho mỗi đoạn hội thoại, bao gồm câu hỏi và câu trả lời
   - Thêm vùng nhập liệu sử dụng thẻ `<textarea>` và nút "Gửi" với thẻ `<button>`
   - Tạo phần lịch sử chat sử dụng danh sách không có thứ tự `<ul>`
   - Thêm phần "Gợi ý câu hỏi" sử dụng `<aside>` ở bên cạnh khu vực chat chính
   - Sử dụng `<footer>` cho phần nhập tin nhắn và các tùy chọn


#### Buổi 3: Nhúng multimedia và iframe, lý thuyết CORS

1. Nhúng audio và video:
   - Thẻ `<audio>`: Nhúng và phát âm thanh
     + Thuộc tính: src, controls, autoplay, loop
     + Các định dạng âm thanh được hỗ trợ: MP3, WAV, OGG
   - Thẻ `<video>`: Nhúng và phát video
     + Thuộc tính: src, controls, width, height, poster, autoplay, loop
     + Các định dạng video được hỗ trợ: MP4, WebM, OGG

2. Sử dụng iframe:
   - Cú pháp và thuộc tính cơ bản của thẻ `<iframe>`
   - Giải thích thuộc tính target trong thẻ a với iframe
   - Nhúng nội dung từ các nguồn khác (ví dụ: YouTube, Google Maps)
   - Vấn đề bảo mật khi sử dụng iframe và cách giải quyết

3. Lý thuyết CORS (Cross-Origin Resource Sharing):
   - Định nghĩa và mục đích của CORS
   - Same-origin policy và cách CORS mở rộng nó
   - Headers liên quan đến CORS: Origin, Access-Control-Allow-Origin
   - Sơ lược về cấu hình CORS trên server

4. Thực hành:
   a. Trang thương mại điện tử Shopee:
      - Nhúng video giới thiệu sản phẩm
      - Sử dụng iframe để nhúng bản đồ vị trí cửa hàng
   
   b. Trang ChatGPT:
      - Thêm tính năng ghi âm câu hỏi bằng thẻ audio
      - Nhúng video hướng dẫn sử dụng từ YouTube
   
   c. Trang Portfolio:
      - Tạo một phần trình chiếu các dự án bằng video
      - Nhúng bản đồ vị trí làm việc bằng Google Maps iframe


#### Buổi 4: Form và bảng
1. Các thẻ form cơ bản:
   - `<form>`: Tạo một form HTML, thuộc tính quan trọng: action, method
   - `<input>`: Tạo các trường nhập liệu, các type phổ biến: text, password, email, number, checkbox, radio
   - `<textarea>`: Tạo vùng nhập văn bản nhiều dòng
   - `<button>`: Tạo nút bấm trong form, type: submit, reset, button
   - `<select>` và `<option>`: Tạo danh sách drop-down

2. Các thuộc tính quan trọng của form:
   - `action`: Xác định URL xử lý dữ liệu khi form được gửi
   - `method`: Phương thức gửi dữ liệu (GET hoặc POST)
   - `name`: Đặt tên cho các trường trong form
   - `value`: Giá trị mặc định của trường
   - `placeholder`: Văn bản gợi ý trong trường nhập liệu
   - `required`: Yêu cầu người dùng phải điền vào trường này

3. Cấu trúc và các thẻ của bảng:
   - `<table>`: Tạo một bảng
   - `<tr>`: Tạo một hàng trong bảng
   - `<td>`: Tạo một ô dữ liệu trong hàng
   - `<th>`: Tạo một ô tiêu đề trong hàng
   - `<thead>`: Nhóm các hàng tiêu đề của bảng
   - `<tbody>`: Nhóm các hàng nội dung chính của bảng
   - `<tfoot>`: Nhóm các hàng chân của bảng

4. Các thuộc tính quan trọng của bảng:
   - `colspan`: Xác định số cột mà một ô sẽ kéo dài
   - `rowspan`: Xác định số hàng mà một ô sẽ kéo dài
   - `border`: Đặt đường viền cho bảng (nên sử dụng CSS thay thế)

5. Cách tạo form phức tạp:
   - Nhóm các trường liên quan bằng `<fieldset>` và `<legend>`
   - Sử dụng `<label>` để liên kết nhãn với trường nhập liệu

6. Xử lý dữ liệu form:
   - Validation dữ liệu phía client với HTML5
   - Giới thiệu ngắn gọn về xử lý dữ liệu form phía server (không đi sâu vào chi tiết)

Bài tập thực hành:

1. Trang thương mại điện tử Shopee:
   - Tạo form đăng ký tài khoản với các trường: Tên đăng nhập, Email, Mật khẩu, Xác nhận mật khẩu
   - Thêm form tìm kiếm sản phẩm vào header
   - Tạo bảng hiển thị thông tin chi tiết sản phẩm (tên, giá, số lượng, tổng tiền)

2. Trang ChatGPT:
   - Tạo form đăng nhập với trường Email và Mật khẩu
   - Thêm form nhập câu hỏi cho ChatGPT với textarea và nút gửi
   - Tạo bảng hiển thị lịch sử các cuộc hội thoại (ngày, chủ đề, số lượng tin nhắn)

3. Trang Portfolio:
   - Tạo form liên hệ với các trường: Tên, Email, Chủ đề, Nội dung
   - Thêm bảng hiển thị kỹ năng với các cột: Kỹ năng, Mức độ thành thạo, Kinh nghiệm (năm)
   - Tạo bảng timeline cho quá trình học tập và làm việc


#### Buổi 5: Các kỹ thuật SEO cơ bản và hoàn thiện khung xương html
1. Các kỹ thuật SEO cơ bản:
   - Các thẻ meta quan trọng:
     + `<meta>`: Sử dụng các thuộc tính như charset, viewport.
     + `<title>`: Viết tiêu đề trang hiệu quả.
     + `<meta name="description">`: Tạo mô tả trang web hấp dẫn.
     + Các thẻ Open Graph (og):
       * `<meta property="og:title">`: Tiêu đề khi chia sẻ trên mạng xã hội.
       * `<meta property="og:description">`: Mô tả khi chia sẻ trên mạng xã hội.
       * `<meta property="og:image">`: Hình ảnh hiển thị khi chia sẻ.
       * `<meta property="og:url">`: URL của trang web.
       * `<meta property="og:type">`: Loại nội dung (ví dụ: website, article).
   - Tối ưu hóa HTML:
     + Sử dụng URL thân thiện.
     + Tối ưu hóa tốc độ tải trang.
     + Thêm alt text cho hình ảnh.
     + Tạo sitemap và robots.txt.
     + Xây dựng liên kết nội bộ hiệu quả.
     + Tối ưu hóa nội dung (từ khóa, độ dài).
     + Tối ưu hóa cho thiết bị di động.

2. Hoàn thiện khung xương html cho 3 project: **Chú ý hoàn thiện ít nhất 3 site cho mỗi project**
   a. Trang thương mại điện tử Shopee:
      - Thêm các thẻ meta cần thiết (charset, viewport, description, og tags).
      - Tối ưu cấu trúc HTML với các thẻ semantic (header, nav, main, footer).
      - Thêm alt text cho tất cả hình ảnh sản phẩm.
      - Tạo sitemap.xml và robots.txt.

   b. Trang ChatGPT:
      - Bổ sung các thẻ meta quan trọng (title, description, og tags).
      - Sử dụng các thẻ heading (h1, h2, h3) một cách hợp lý.
      - Tối ưu URL cho các trang con (ví dụ: /chat, /settings).
      - Đảm bảo trang web thân thiện với thiết bị di động.

   c. Trang Portfolio:
      - Thêm các thẻ meta cần thiết, bao gồm cả og tags cho chia sẻ mạng xã hội.
      - Tối ưu cấu trúc HTML với các thẻ semantic (article, section, aside).
      - Tạo các liên kết nội bộ giữa các phần của trang.
      - Tối ưu nội dung với từ khóa phù hợp cho mỗi dự án.


### CSS (8 buổi)
#### Buổi 1: Cú pháp CSS và Selectors
1. Cú pháp CSS cơ bản:
   - Cấu trúc của một rule CSS: selector, property, value.
   - Cách viết CSS inline, internal và external.
   - Cách sử dụng comments trong CSS.

2. Các loại selectors:
   - Element selectors: chọn tất cả các phần tử của một loại (ví dụ: p, div, h1).
   - Class selectors: chọn các phần tử có class cụ thể (ví dụ: .product, .button).
   - ID selectors: chọn phần tử có ID cụ thể (ví dụ: #header, #footer).
   - Attribute selectors: chọn phần tử dựa trên thuộc tính (ví dụ: [type="text"], [href^="https"]).
   - Pseudo-class selectors: chọn phần tử trong trạng thái đặc biệt (ví dụ: :hover, :focus, :nth-child()).
   - Pseudo-element selectors: chọn và style một phần của phần tử (ví dụ: ::before, ::after, ::first-line).

3. Cách sử dụng selectors để áp dụng style:
   - Kết hợp nhiều selectors (ví dụ: div.product, button:hover).
   - Sử dụng child selectors (>), descendant selectors (space), adjacent sibling selectors (+).
   - Độ ưu tiên của các selectors và cách ghi đè styles.

4. Thực hành áp dụng selectors vào các project:
   a. Trang thương mại điện tử Shopee:
      - Sử dụng class selectors cho các sản phẩm (.product-item).
      - Áp dụng pseudo-class cho hiệu ứng hover trên nút mua hàng.
      - Sử dụng attribute selectors cho các input trong form tìm kiếm.

   b. Trang ChatGPT:
      - Sử dụng ID selector cho container chính (#chat-container).
      - Áp dụng pseudo-elements cho các bong bóng chat.
      - Sử dụng child selectors cho các phần tử trong danh sách tin nhắn.

   c. Trang Portfolio:
      - Sử dụng element selectors cho các tiêu đề (h1, h2, h3).
      - Áp dụng class selectors cho các phần dự án (.project-item).
      - Sử dụng pseudo-class selectors cho menu navigation (:active, :focus).

#### Buổi 2: Box Model và Đơn vị CSS
1. Các đơn vị cơ bản trong CSS:
   - Đơn vị tuyệt đối:
     + px (pixels): Đơn vị phổ biến nhất, 1px tương đương với một điểm ảnh trên màn hình
     + pt (points): Thường được sử dụng trong in ấn, 1pt = 1/72 inch
     + cm (centimeters), mm (millimeters), in (inches): Đơn vị đo lường vật lý
   - Đơn vị tương đối:
     + % (phần trăm): Tính toán dựa trên kích thước của phần tử cha
     + em: Tương đối với kích thước font của phần tử
     + rem: Tương đối với kích thước font của phần tử gốc (root)
     + vw, vh: Tương đối với kích thước của viewport (1vw = 1% chiều rộng viewport)
   - Khi nào sử dụng mỗi loại đơn vị và ưu nhược điểm của chúng
2. Hiểu về Box Model:
   - Content: Nội dung thực tế của phần tử (văn bản, hình ảnh, v.v.).
   - Padding: Khoảng cách giữa nội dung và viền.
   - Border: Đường viền xung quanh padding và nội dung.
   - Margin: Khoảng cách giữa phần tử và các phần tử xung quanh.

3. Cách tính toán kích thước của các phần tử:
   - Tổng chiều rộng = width + left padding + right padding + left border + right border + left margin + right margin
   - Tổng chiều cao = height + top padding + bottom padding + top border + bottom border + top margin + bottom margin
   - Giải thích về box-sizing: content-box vs border-box

4. Sử dụng các thuộc tính `width`, `height`, `padding`, `border`, `margin`:
   - Width và height: Đặt kích thước cho content
   - Padding: Cú pháp shorthand và các giá trị riêng lẻ (top, right, bottom, left)
   - Border: Đặt độ dày, kiểu dáng và màu sắc
   - Margin: Cú pháp shorthand và các giá trị riêng lẻ, margin collapse

5. Thực hành áp dụng Box Model và các đơn vị CSS vào các project:
   a. Trang thương mại điện tử Shopee:
      - Tạo layout cho sản phẩm sử dụng padding và margin
      - Thiết lập border cho các phần tử như nút mua hàng, khung sản phẩm
      - Điều chỉnh khoảng cách giữa các phần tử sử dụng margin
      - Sử dụng đơn vị % cho layout responsive và rem cho typography

   b. Trang ChatGPT:
      - Tạo khung chat với padding và border
      - Điều chỉnh khoảng cách giữa các tin nhắn sử dụng margin
      - Tạo nút gửi tin nhắn với border-radius và padding
      - Sử dụng em cho kích thước font và vw, vh cho layout linh hoạt

   c. Trang Portfolio:
      - Tạo layout cho các phần dự án sử dụng padding và margin
      - Thiết lập border cho các hình ảnh dự án
      - Điều chỉnh khoảng cách giữa các phần của trang sử dụng margin
      - Kết hợp px cho các giá trị cố định và % cho layout linh hoạt

#### Buổi 3: Flexbox
1. Giới thiệu về Flexbox và các khái niệm cơ bản:
   - Flex container và flex items
   - Main axis và cross axis
   - Flex-start, flex-end, center, space-between, space-around

2. Các thuộc tính của Flex container:
   - `display: flex`: Kích hoạt flexbox layout
   - `flex-direction`: Xác định hướng chính của flex container (row, column)
   - `justify-content`: Căn chỉnh các flex items theo trục chính
   - `align-items`: Căn chỉnh các flex items theo trục cross
   - `align-content`: Căn chỉnh các dòng flex items khi có nhiều dòng

3. Các thuộc tính của Flex items:
   - `order`: Thay đổi thứ tự hiển thị của flex items
   - `flex-grow`: Xác định khả năng mở rộng của flex item
   - `flex-shrink`: Xác định khả năng co lại của flex item
   - `flex-basis`: Xác định kích thước ban đầu của flex item
   - `align-self`: Ghi đè thuộc tính align-items cho một flex item cụ thể

4. Thực hành áp dụng Flexbox vào các project:
   a. Trang thương mại điện tử Shopee:
      - Tạo layout cho danh sách sản phẩm sử dụng flexbox
      - Căn chỉnh các phần tử trong header và footer

   b. Trang ChatGPT:
      - Tạo layout cho khung chat sử dụng flexbox
      - Căn chỉnh các tin nhắn và nút gửi

   c. Trang Portfolio:
      - Tạo layout cho các phần dự án sử dụng flexbox
      - Căn chỉnh các phần tử trong navigation menu

5. Bài tập: Áp dụng Flexbox để cải thiện layout và căn chỉnh các phần tử trong cả ba project, tập trung vào việc tạo giao diện linh hoạt và dễ điều chỉnh.

#### Buổi 4: Bootstrap Grid System
1. Giới thiệu về Bootstrap Grid System:
   - Khái niệm cơ bản về Bootstrap Grid System
   - Ưu điểm và use cases của Bootstrap Grid System

2. Cấu trúc của Bootstrap Grid System:
   - Container
   - Row
   - Column
   - Breakpoints (xs, sm, md, lg, xl)

3. Các lớp cơ bản của Bootstrap Grid:
   - `.container` và `.container-fluid`
   - `.row`
   - `.col`, `.col-*`, `.col-*-*`

4. Responsive columns:
   - Sử dụng các lớp col-* cho các breakpoints khác nhau

5. Căn chỉnh và sắp xếp:
   - Vertical alignment
   - Horizontal alignment

6. Thực hành áp dụng Bootstrap Grid System vào các project:
   a. Trang thương mại điện tử Shopee:
      - Tạo layout tổng thể cho trang chủ sử dụng Bootstrap Grid
      - Thiết kế grid cho danh sách sản phẩm

   b. Trang ChatGPT:
      - Tạo layout cho giao diện chat sử dụng Bootstrap Grid
      - Thiết kế grid cho phần hiển thị lịch sử chat

   c. Trang Portfolio:
      - Tạo layout tổng thể cho trang portfolio
      - Thiết kế grid cho phần showcase các dự án

#### Buổi 5: Responsive Design
1. Khái niệm về Responsive Design:
   - Định nghĩa và tầm quan trọng của Responsive Design
   - Mobile-first approach vs Desktop-first approach
   - Breakpoints và viewport

2. Sử dụng Media Queries để tạo giao diện responsive:
   - Cú pháp cơ bản của Media Queries
   - Các loại Media Queries: width, height, orientation, resolution
   - Cách sử dụng Media Queries trong CSS
   - Kết hợp Media Queries với Flexbox và Grid Layout

3. Các kỹ thuật và công cụ hỗ trợ Responsive Design:
   - Fluid layouts và Flexible images
   - CSS units: em, rem, vw, vh
   - Picture element và srcset attribute
   - CSS Frameworks hỗ trợ Responsive Design (ví dụ: Bootstrap, Foundation)

4. Responsive Typography:
   - Sử dụng đơn vị tương đối cho font-size
   - Điều chỉnh line-height và letter-spacing cho các màn hình khác nhau
   - Viewport units trong typography

5. Responsive Images và Videos:
   - Kỹ thuật tối ưu hóa hình ảnh cho các thiết bị khác nhau
   - Sử dụng object-fit và object-position
   - Responsive iframes cho videos

6. Testing và Debugging Responsive Design:
   - Sử dụng Developer Tools của trình duyệt
   - Online tools để kiểm tra responsive (ví dụ: Responsinator, BrowserStack)
   - Best practices trong việc kiểm tra và debug responsive design

7. Thực hành áp dụng Responsive Design vào các project:
   a. Trang thương mại điện tử Shopee:
      - Tạo layout responsive cho trang chủ và trang chi tiết sản phẩm
      - Điều chỉnh menu navigation và footer cho các thiết bị di động

   b. Trang ChatGPT:
      - Thiết kế giao diện chat responsive
      - Tối ưu hóa hiển thị lịch sử chat trên các thiết bị khác nhau

   c. Trang Portfolio:
      - Tạo layout responsive cho trang chủ và trang dự án
      - Điều chỉnh gallery và showcase dự án cho các kích thước màn hình khác nhau

8. Bài tập: Áp dụng các kỹ thuật Responsive Design đã học để tối ưu hóa giao diện của cả ba project trên các thiết bị desktop, tablet và mobile. Tập trung vào việc cải thiện trải nghiệm người dùng trên mọi kích thước màn hình.

#### Buổi 6: Animations và Transitions
1. Giới thiệu về CSS Animations và Transitions:
   - Định nghĩa và tầm quan trọng trong thiết kế web
   - So sánh animations và transitions
   - Các trường hợp sử dụng phù hợp

2. CSS Animations:
   - Sử dụng `@keyframes` để tạo animations
   - Các thuộc tính animation cơ bản: name, duration, timing-function, delay, iteration-count, direction, fill-mode, play-state
   - Kết hợp nhiều animations

3. CSS Transitions:
   - Các thuộc tính transition: property, duration, timing-function, delay
   - Tạo hiệu ứng chuyển đổi mượt mà cho các phần tử
   - Kết hợp transitions với pseudo-classes

4. Performance và tối ưu hóa:
   - Sử dụng `will-change` để cải thiện hiệu suất
   - Ưu tiên sử dụng `transform` và `opacity` cho animations và transitions
   - Tránh ảnh hưởng đến layout

5. Thực hành áp dụng vào các project:
   a. Trang thương mại điện tử Shopee:
      - Hiệu ứng fade-in cho sản phẩm, hover effects
      - Transition cho menu dropdown và các nút tương tác

   b. Trang ChatGPT:
      - Animations cho tin nhắn mới và hiệu ứng gõ chữ
      - Transition cho sidebar và các phần tử UI

   c. Trang Portfolio:
      - Hiệu ứng parallax và animations khi scroll
      - Transition cho menu navigation và project showcases

#### Buổi 7: SASS/SCSS
1. Giới thiệu về SASS/SCSS:
   - Định nghĩa và sự khác biệt giữa SASS và SCSS
   - Lợi ích của việc sử dụng SASS/SCSS trong phát triển web
   - Cài đặt và thiết lập môi trường làm việc với SASS/SCSS

2. Cú pháp cơ bản của SASS/SCSS:
   - Cách viết selector và thuộc tính
   - Cú pháp lồng ghép (nesting)
   - Comments trong SASS/SCSS

3. Biến trong SASS/SCSS:
   - Khai báo và sử dụng biến
   - Phạm vi của biến (global và local)
   - Sử dụng biến cho màu sắc, kích thước, và các giá trị thường xuyên sử dụng

4. Mixins và Extends:
   - Định nghĩa và sử dụng mixins
   - Truyền tham số cho mixins
   - Sử dụng @extend để kế thừa thuộc tính

5. Các tính năng nâng cao:
   - Toán tử và tính toán trong SASS/SCSS
   - Sử dụng @import để tổ chức code
   - Các hàm có sẵn trong SASS/SCSS (lighten, darken, percentage, ...)

6. Thực hành áp dụng SASS/SCSS vào các project:
   a. Trang thương mại điện tử Shopee:
      - Tổ chức lại cấu trúc CSS sử dụng SASS/SCSS
      - Sử dụng biến cho các màu sắc và kích thước chính
      - Tạo mixins cho các styles lặp lại (ví dụ: button styles, card styles)

   b. Trang ChatGPT:
      - Áp dụng nesting để cải thiện cấu trúc CSS
      - Sử dụng biến cho theme colors và font sizes
      - Tạo mixin cho các animations và transitions

   c. Trang Portfolio:
      - Sử dụng SASS/SCSS để tạo một hệ thống grid linh hoạt
      - Áp dụng extends để tái sử dụng styles cho các section
      - Tạo các function SASS/SCSS để tính toán kích thước responsive

### JavaScript (13 buổi)
#### Cơ bản (5 buổi)
##### Buổi 1: Cú pháp và Biến
1. Cú pháp cơ bản của JavaScript:
   - Cấu trúc của một chương trình JavaScript
   - Cách viết comments (// và /* */)
   - Sử dụng dấu chấm phẩy ; để kết thúc câu lệnh
   - Phân biệt chữ hoa và chữ thường trong JavaScript

2. Khai báo và sử dụng biến:
   - Sử dụng `var`, `let`, và `const` để khai báo biến
   - Phạm vi của biến (global scope và block scope)
   - Quy tắc đặt tên biến
   - Các kiểu dữ liệu cơ bản:
     + Number: Đại diện cho số nguyên và số thực (ví dụ: 42, 3.14)
     + String: Chuỗi ký tự (ví dụ: "Hello, World!")
     + Boolean: Giá trị logic true hoặc false
     + Undefined: Biến được khai báo nhưng chưa được gán giá trị
     + Null: Đại diện cho giá trị không tồn tại hoặc không hợp lệ
     + Symbol (ES6): Giá trị duy nhất và không thay đổi
     + BigInt (ES11): Số nguyên có độ chính xác tùy ý
     + Object: Kiểu dữ liệu phức tạp, có thể chứa nhiều giá trị khác nhau
     + Array: Một loại object đặc biệt dùng để lưu trữ danh sách các giá trị
   - Ép kiểu và chuyển đổi kiểu dữ liệu:
     - Ép kiểu ngầm định (implicit type coercion)
     - Ép kiểu tường minh (explicit type conversion)
     - Sử dụng các hàm chuyển đổi: parseInt(), parseFloat(), String(), Number(), Boolean()
     - Chuyển đổi giữa các kiểu dữ liệu: số sang chuỗi, chuỗi sang số, số sang boolean, v.v.
     - Các trường hợp đặc biệt: NaN, Infinity, -Infinity
     - Best practices khi làm việc với ép kiểu và chuyển đổi kiểu dữ liệu:
       + Sử dụng ép kiểu tường minh thay vì ngầm định để tăng tính rõ ràng của code
       + Luôn kiểm tra kiểu dữ liệu trước khi thực hiện chuyển đổi
       + Sử dụng các hàm như isNaN() để kiểm tra kết quả chuyển đổi số
       + Tránh sử dụng == và thay bằng === để so sánh chính xác cả giá trị và kiểu
       + Cẩn thận khi chuyển đổi số thập phân sang số nguyên để tránh mất độ chính xác
       + Sử dụng template literals (`${variable}`) thay vì cộng chuỗi để tránh ép kiểu ngầm định
       + Khi làm việc với dữ liệu từ API hoặc input người dùng, luôn validate và sanitize trước khi chuyển đổi

3. Thực hành:
   a. Trang thương mại điện tử Shopee:
      - Khai báo biến để lưu trữ thông tin sản phẩm (tên, giá, số lượng)
      - Sử dụng biến để tính toán giá trị đơn hàng

   b. Trang ChatGPT:
      - Khai báo biến để lưu trữ nội dung tin nhắn
      - Sử dụng biến để đếm số lượng tin nhắn

   c. Trang Portfolio:
      - Khai báo biến để lưu trữ thông tin cá nhân (tên, kỹ năng, dự án)
      - Sử dụng biến để tạo nội dung động cho trang

##### Buổi 2: Hàm
1. Định nghĩa và gọi hàm:
   - Cú pháp khai báo hàm: function declaration và function expression
   - Cách gọi hàm và truyền đối số
   - Phạm vi của biến trong hàm (function scope)
   - Closure và lexical scope

2. Tham số và giá trị trả về của hàm:
   - Cách định nghĩa tham số cho hàm
   - Tham số mặc định (default parameters)
   - Rest parameters (...args)
   - Cách sử dụng return để trả về giá trị
   - Trả về nhiều giá trị bằng cách sử dụng object hoặc array

3. Các loại hàm đặc biệt:
   - Arrow functions và cú pháp ngắn gọn
   - Hàm callback và higher-order functions
   - Hàm đệ quy (recursive functions)

4. Thực hành:
   a. Trang thương mại điện tử Shopee:
      - Tạo hàm tính tổng giá trị đơn hàng
      - Tạo hàm lọc sản phẩm theo danh mục

   b. Trang ChatGPT:
      - Tạo hàm xử lý và hiển thị tin nhắn
      - Tạo hàm kiểm tra độ dài tin nhắn

   c. Trang Portfolio:
      - Tạo hàm hiển thị thông tin dự án
      - Tạo hàm lọc và sắp xếp các kỹ năng

##### Buổi 3: Vòng lặp
1. Các loại vòng lặp:
   - Vòng lặp `for`:
     - Cú pháp và cách sử dụng
     - Vòng lặp `for` với biến đếm
     - Vòng lặp `for...in` cho đối tượng
     - Vòng lặp `for...of` cho mảng và iterable objects
   - Vòng lặp `while`:
     - Cú pháp và cách sử dụng
     - So sánh với vòng lặp `for`
   - Vòng lặp `do...while`:
     - Cú pháp và cách sử dụng
     - Sự khác biệt với vòng lặp `while`

2. Sử dụng vòng lặp để lặp qua mảng và đối tượng:
   - Lặp qua mảng sử dụng `for`, `for...of`, và phương thức `forEach()`
   - Lặp qua đối tượng sử dụng `for...in` và `Object.keys()`, `Object.values()`, `Object.entries()`
   - Sử dụng `break` và `continue` trong vòng lặp
   - Vòng lặp lồng nhau (nested loops)

3. Thực hành:
   a. Trang thương mại điện tử Shopee:
      - Sử dụng vòng lặp để hiển thị danh sách sản phẩm
      - Tạo chức năng phân trang sử dụng vòng lặp

   b. Trang ChatGPT:
      - Sử dụng vòng lặp để hiển thị lịch sử chat
      - Tạo chức năng tự động cuộn tin nhắn mới

   c. Trang Portfolio:
      - Sử dụng vòng lặp để hiển thị danh sách dự án
      - Tạo chức năng lọc và sắp xếp dự án theo các tiêu chí

##### Buổi 4: Điều kiện
1. Câu lệnh điều kiện:
   - `if`: Cú pháp và cách sử dụng
   - `else`: Xử lý trường hợp ngược lại
   - `else if`: Xử lý nhiều điều kiện
   - `switch`: Cú pháp và cách sử dụng cho nhiều trường hợp

2. Toán tử điều kiện (`? :`):
   - Cú pháp và cách sử dụng
   - So sánh với câu lệnh `if...else`

3. Sử dụng điều kiện lồng nhau (nested conditions)

4. Các toán tử logic: `&&` (AND), `||` (OR), `!` (NOT)

5. So sánh giá trị và kiểu dữ liệu: `==` vs `===`, `!=` vs `!==`

6. Thực hành:
   a. Trang thương mại điện tử Shopee:
      - Tạo chức năng kiểm tra giá sản phẩm và áp dụng giảm giá
      - Xây dựng hệ thống phân loại sản phẩm dựa trên các điều kiện

   b. Trang ChatGPT:
      - Tạo chức năng kiểm tra và xử lý các loại tin nhắn khác nhau
      - Xây dựng hệ thống phản hồi tự động dựa trên nội dung tin nhắn

   c. Trang Portfolio:
      - Tạo chức năng hiển thị các dự án dựa trên các tiêu chí lọc
      - Xây dựng hệ thống đánh giá kỹ năng dựa trên các điều kiện

##### Buổi 5: DOM Manipulation cơ bản
1. Truy cập và thay đổi nội dung của các phần tử HTML:
   - Sử dụng `getElementById()`, `getElementsByClassName()`, `getElementsByTagName()`, `querySelector()`, `querySelectorAll()`
   - Thay đổi nội dung với `innerHTML`, `textContent`, `innerText`
   - Thao tác với các thuộc tính sử dụng `getAttribute()`, `setAttribute()`, `removeAttribute()`

2. Thêm, xóa, và thay đổi các thuộc tính của phần tử:
   - Thêm/xóa class với `classList.add()`, `classList.remove()`, `classList.toggle()`
   - Thay đổi style trực tiếp với `style` property
   - Tạo, thêm và xóa phần tử với `createElement()`, `appendChild()`, `removeChild()`

3. Thực hành:
   a. Trang thương mại điện tử Shopee:
      - Thay đổi thông tin sản phẩm động (giá, tên, mô tả)
      - Thêm/xóa sản phẩm vào giỏ hàng

   b. Trang ChatGPT:
      - Tạo và hiển thị tin nhắn mới động
      - Thay đổi giao diện dựa trên tương tác người dùng

   c. Trang Portfolio:
      - Cập nhật thông tin dự án động
      - Tạo gallery ảnh với chức năng thêm/xóa ảnh

#### Nâng cao (7 buổi)
##### Buổi 6: DOM Manipulation nâng cao
1. Tạo và xóa các phần tử HTML động:
   - Sử dụng `createElement()` để tạo phần tử mới
   - Thêm phần tử vào DOM với `appendChild()` và `insertBefore()`
   - Xóa phần tử khỏi DOM với `removeChild()` và `remove()`
   - Thay thế phần tử với `replaceChild()`

2. Sử dụng các phương thức DOM nâng cao:
   - Tìm kiếm phần tử với `closest()` và `matches()`
   - Duyệt qua các phần tử con với `childNodes`, `children`, `firstChild`, `lastChild`
   - Duyệt qua các phần tử anh em với `nextSibling`, `previousSibling`
   - Sử dụng `cloneNode()` để sao chép phần tử

3. Thao tác với thuộc tính data:
   - Sử dụng `dataset` để đọc và ghi thuộc tính data
   - Tạo và sử dụng thuộc tính tùy chỉnh

4. Thực hành:
   a. Trang thương mại điện tử Shopee:
      - Tạo danh sách sản phẩm động dựa trên dữ liệu
      - Thêm và xóa sản phẩm khỏi giỏ hàng với DOM manipulation

   b. Trang ChatGPT:
      - Tạo và xóa tin nhắn động trong cuộc trò chuyện
      - Thêm chức năng "typing indicator" sử dụng DOM manipulation

   c. Trang Portfolio:
      - Tạo gallery dự án động với khả năng thêm/xóa/sắp xếp lại các dự án
      - Xây dựng chức năng filter dự án sử dụng DOM manipulation nâng cao

##### Buổi 7: Event Handling
1. Lắng nghe và xử lý sự kiện:
   - Sử dụng `addEventListener()` để gắn sự kiện vào phần tử
   - Hiểu về event object và cách sử dụng nó
   - Xử lý sự kiện với arrow functions và regular functions

2. Các loại sự kiện phổ biến:
   - Mouse events: `click`, `dblclick`, `mouseover`, `mouseout`, `mousedown`, `mouseup`
   - Keyboard events: `keydown`, `keyup`, `keypress`
   - Form events: `submit`, `change`, `focus`, `blur`
   - Window events: `load`, `resize`, `scroll`

3. Event bubbling và capturing:
   - Hiểu về event propagation
   - Sử dụng `stopPropagation()` và `preventDefault()`

4. Event delegation:
   - Lợi ích của event delegation
   - Cách triển khai event delegation

5. Thực hành:
   a. Trang thương mại điện tử Shopee:
      - Xử lý sự kiện click để thêm sản phẩm vào giỏ hàng
      - Tạo chức năng tìm kiếm sản phẩm với sự kiện `keyup`
      - Xử lý sự kiện `submit` cho form đặt hàng

   b. Trang ChatGPT:
      - Xử lý sự kiện `submit` cho form gửi tin nhắn
      - Tạo chức năng scroll to bottom khi có tin nhắn mới
      - Xử lý sự kiện `click` để mở/đóng menu cài đặt

   c. Trang Portfolio:
      - Tạo lightbox gallery với sự kiện `click`
      - Xử lý sự kiện `scroll` để tạo hiệu ứng parallax
      - Tạo form liên hệ với xử lý sự kiện `submit`

##### Buổi 8: Fetch API
1. Giới thiệu về Fetch API:
   - Khái niệm và lợi ích của Fetch API
   - So sánh với XMLHttpRequest
   - Cú pháp cơ bản của Fetch

2. Gửi yêu cầu HTTP và xử lý phản hồi:
   - Các phương thức HTTP: GET, POST, PUT, DELETE
   - Cấu trúc của một Request object
   - Xử lý Response object
   - Làm việc với JSON data

3. Xử lý lỗi và Promise chaining:
   - Sử dụng .catch() để xử lý lỗi
   - Chuỗi các Promise với .then()

4. Tùy chỉnh request với options:
   - Thêm headers
   - Cấu hình mode, credentials, cache

5. Thực hành:
   a. Trang thương mại điện tử Shopee:
      - Fetch danh sách sản phẩm từ API
      - Gửi yêu cầu POST để thêm sản phẩm vào giỏ hàng
      - Cập nhật thông tin sản phẩm với PUT request

   b. Trang ChatGPT:
      - Fetch lịch sử chat từ API
      - Gửi tin nhắn mới với POST request
      - Cập nhật trạng thái "đã đọc" của tin nhắn với PUT request

   c. Trang Portfolio:
      - Fetch dữ liệu dự án từ API
      - Gửi form liên hệ với POST request
      - Cập nhật thông tin dự án với PUT request

##### Buổi 9: ES6+ (Phần 1)
1. Arrow functions:
   - Cú pháp và cách sử dụng
   - So sánh với function truyền thống
   - Ưu điểm và hạn chế
   - Lexical `this` trong arrow functions

2. Template literals:
   - Cú pháp và cách sử dụng
   - Interpolation trong template literals
   - Multi-line strings
   - Tagged template literals

3. Destructuring:
   - Destructuring arrays
   - Destructuring objects
   - Default values trong destructuring
   - Nested destructuring

4. Spread và Rest operators:
   - Spread operator cho arrays và objects
   - Rest parameter trong functions

5. Thực hành:
   a. Trang thương mại điện tử Shopee:
      - Sử dụng arrow functions trong các callback
      - Áp dụng template literals để tạo HTML động
      - Destructuring data sản phẩm
      - Sử dụng spread operator để clone và update state

   b. Trang ChatGPT:
      - Refactor các function xử lý tin nhắn thành arrow functions
      - Sử dụng template literals để render tin nhắn
      - Destructuring thông tin người dùng và tin nhắn
      - Áp dụng rest parameter trong function xử lý nhiều tham số

   c. Trang Portfolio:
      - Sử dụng arrow functions trong các event listeners
      - Áp dụng template literals để tạo các phần tử portfolio
      - Destructuring thông tin dự án
      - Sử dụng spread operator để merge các options

##### Buổi 10: ES6+ (Phần 2)
1. Promises:
   - Giới thiệu về Promises và cách hoạt động
   - Các phương thức của Promise: then(), catch(), finally()
   - Chuỗi Promise (Promise chaining)
   - Promise.all(), Promise.race(), Promise.allSettled()

2. Async/Await:
   - Giới thiệu về Async/Await và cách hoạt động
   - Cú pháp và cách sử dụng async/await
   - So sánh với Promises
   - Xử lý lỗi với try/catch trong async/await

3. Thực hành:
   a. Trang thương mại điện tử Shopee:
      - Sử dụng Promises để xử lý các yêu cầu API đồng thời (ví dụ: lấy thông tin sản phẩm và đánh giá)
      - Áp dụng async/await để xử lý luồng thanh toán bất đồng bộ

   b. Trang ChatGPT:
      - Sử dụng Promises để xử lý việc gửi và nhận tin nhắn
      - Áp dụng async/await để xử lý việc tải lịch sử chat và cập nhật trạng thái tin nhắn

   c. Trang Portfolio:
      - Sử dụng Promises để tải dữ liệu dự án và thông tin cá nhân đồng thời
      - Áp dụng async/await để xử lý việc gửi form liên hệ và cập nhật thông tin dự án

##### Buổi 11: Modules
1. Import và export modules:
   - Cú pháp import và export
   - Named exports và default exports
   - Importing và exporting nhiều items
   - Re-exporting modules

2. Sử dụng modules trong dự án:
   - Tổ chức cấu trúc thư mục cho modules
   - Dynamic imports
   - Module bundlers (ví dụ: Webpack, Rollup)

3. Best practices khi sử dụng modules:
   - Tránh circular dependencies
   - Sử dụng alias paths
   - Tree shaking để tối ưu hóa bundle size

4. Thực hành:
   a. Trang thương mại điện tử Shopee:
      - Tạo modules cho các chức năng như quản lý giỏ hàng, xử lý thanh toán
      - Sử dụng dynamic imports để tải lazy các components không cần thiết ngay lập tức

   b. Trang ChatGPT:
      - Tạo modules cho các chức năng như xử lý tin nhắn, quản lý người dùng
      - Sử dụng named exports cho các utility functions

   c. Trang Portfolio:
      - Tạo modules cho các sections khác nhau của trang (about, projects, contact)
      - Sử dụng default exports cho các main components

##### Buổi 12: Tổng kết và thực hành
1. Ôn tập các kiến thức đã học:
   - Biến, kiểu dữ liệu, và phạm vi
   - Hàm và arrow functions
   - Objects và Arrays
   - DOM manipulation và Event handling
   - Asynchronous JavaScript (Callbacks, Promises, Async/Await)
   - ES6+ features
   - Modules và cách sử dụng

2. Thực hành tổng hợp:
   a. Trang thương mại điện tử Shopee:
      - Tối ưu hóa hiệu suất trang web bằng cách sử dụng lazy loading cho hình ảnh sản phẩm
      - Implement infinite scrolling cho danh sách sản phẩm
      - Tạo một hệ thống filter và sort sản phẩm phức tạp sử dụng JavaScript

   b. Trang ChatGPT:
      - Cải thiện trải nghiệm người dùng bằng cách thêm animations cho tin nhắn
      - Implement một hệ thống cache để lưu trữ và hiển thị nhanh các cuộc hội thoại trước đó
      - Tạo một chức năng gợi ý tự động hoàn thành khi người dùng đang nhập tin nhắn

   c. Trang Portfolio:
      - Tạo một lightbox gallery để hiển thị hình ảnh dự án
      - Implement một hệ thống filter để lọc dự án theo các kỹ năng hoặc công nghệ sử dụng
      - Tạo một form liên hệ với validation phía client và gửi email sử dụng một dịch vụ bên thứ ba

3. Code review và optimizations:
   - Thực hiện code review cho các dự án đã làm
   - Tối ưu hóa code để cải thiện hiệu suất và khả năng bảo trì
   - Áp dụng các best practices và design patterns đã học

###### Buổi 13: Tổng kết và thực hành khoá frontend
1. Tổng kết kiến thức Frontend:
   - HTML: Cấu trúc, semantic tags, forms, multimedia
   - CSS: Selectors, box model, flexbox, grid, responsive design, animations
   - JavaScript: Syntax, functions, objects, DOM manipulation, events, asynchronous programming, ES6+ features, modules

2. Thực hành tổng hợp:
   a. Trang thương mại điện tử Shopee:
      - Tạo trang chủ với danh sách sản phẩm động, filter và sort
      - Implement giỏ hàng với localStorage
      - Tạo trang chi tiết sản phẩm với gallery ảnh và đánh giá
      - Optimize performance với lazy loading và code splitting

   b. Trang ChatGPT:
      - Xây dựng giao diện chat responsive
      - Implement real-time messaging với WebSocket hoặc long polling
      - Tạo hệ thống authentication và authorization
      - Thêm tính năng code highlighting và markdown rendering

   c. Trang Portfolio:
      - Thiết kế layout responsive với grid và flexbox
      - Tạo animations cho các section transitions
      - Implement dark mode với CSS variables
      - Tạo form liên hệ với client-side validation

3. Giới thiệu về React và Next.js

## Backend (25 buổi)
### Cơ sở dữ liệu (13 buổi)
#### Nền tảng CSDL quan hệ (3 buổi)
##### Buổi 1: Khái niệm cơ bản về CSDL quan hệ
1. Giới thiệu về CSDL quan hệ:
   - Định nghĩa và lịch sử phát triển của CSDL quan hệ
   - Ưu điểm và nhược điểm của CSDL quan hệ
   - So sánh với các loại CSDL khác (NoSQL, Object-Oriented DB)

2. Các khái niệm cơ bản:
   a. Bảng (Table):
      - Cấu trúc của bảng
      - Vai trò của bảng trong CSDL quan hệ
      - Cách đặt tên bảng hiệu quả

   b. Hàng (Row/Record):
      - Định nghĩa và ý nghĩa của hàng
      - Cách thêm, sửa, xóa hàng trong bảng

   c. Cột (Column/Field):
      - Định nghĩa và vai trò của cột
      - Các kiểu dữ liệu phổ biến cho cột
      - Cách đặt tên cột hiệu quả

3. Mối quan hệ giữa bảng, hàng, và cột trong CSDL quan hệ

4. Thực hành:
   a. Trang thương mại điện tử Shopee:
      - Thiết kế cấu trúc bảng cho sản phẩm, người dùng, đơn hàng
      - Xác định các cột cần thiết cho mỗi bảng

   b. Trang ChatGPT:
      - Thiết kế cấu trúc bảng cho người dùng, tin nhắn, cuộc hội thoại
      - Xác định các cột cần thiết cho mỗi bảng

   c. Trang Portfolio:
      - Thiết kế cấu trúc bảng cho dự án, kỹ năng, thông tin liên hệ
      - Xác định các cột cần thiết cho mỗi bảng

5. Tổng kết và Q&A:
   - Ôn tập các khái niệm đã học
   - Giải đáp thắc mắc về CSDL quan hệ và các khái niệm cơ bản

##### Buổi 2: Các mô hình dữ liệu
1. Mô hình dữ liệu quan hệ:
   - Định nghĩa và đặc điểm của mô hình dữ liệu quan hệ
   - Các thành phần cơ bản: bảng, hàng, cột, khóa
   - Ưu điểm và nhược điểm của mô hình dữ liệu quan hệ

2. Các loại quan hệ:
   a. Quan hệ một-một (One-to-One):
      - Định nghĩa và ví dụ
      - Cách thiết kế và triển khai trong CSDL
      - Ưu và nhược điểm của quan hệ một-một

   b. Quan hệ một-nhiều (One-to-Many):
      - Định nghĩa và ví dụ
      - Cách thiết kế và triển khai trong CSDL
      - Ưu và nhược điểm của quan hệ một-nhiều

   c. Quan hệ nhiều-nhiều (Many-to-Many):
      - Định nghĩa và ví dụ
      - Cách thiết kế và triển khai trong CSDL (bảng trung gian)
      - Ưu và nhược điểm của quan hệ nhiều-nhiều

3. Thực hành:
   a. Trang thương mại điện tử Shopee:
      - Xác định các mối quan hệ giữa các bảng (sản phẩm, người dùng, đơn hàng)
      - Thiết kế mô hình dữ liệu cho các mối quan hệ đã xác định

   b. Trang ChatGPT:
      - Xác định các mối quan hệ giữa các bảng (người dùng, tin nhắn, cuộc hội thoại)
      - Thiết kế mô hình dữ liệu cho các mối quan hệ đã xác định

   c. Trang Portfolio:
      - Xác định các mối quan hệ giữa các bảng (dự án, kỹ năng, thông tin liên hệ)
      - Thiết kế mô hình dữ liệu cho các mối quan hệ đã xác định

4. Tổng kết và Q&A:
   - Ôn tập các khái niệm về mô hình dữ liệu và các loại quan hệ
   - Thảo luận về cách áp dụng các loại quan hệ trong thực tế
   - Giải đáp thắc mắc của học viên

##### Buổi 3: Khóa chính và khóa ngoại
1. Khóa chính (Primary Key):
   - Định nghĩa và vai trò của khóa chính
   - Các đặc điểm của khóa chính: duy nhất, không null, không thay đổi
   - Loại khóa chính: đơn và tổ hợp
   - Ví dụ về khóa chính trong các bảng dữ liệu thực tế

2. Khóa ngoại (Foreign Key):
   - Định nghĩa và vai trò của khóa ngoại
   - Mối quan hệ giữa khóa ngoại và khóa chính
   - Cách khóa ngoại duy trì tính toàn vẹn tham chiếu
   - Ví dụ về khóa ngoại trong các mối quan hệ giữa các bảng

3. Thiết lập khóa chính và khóa ngoại:
   - Cú pháp SQL để tạo khóa chính
   - Cú pháp SQL để tạo khóa ngoại
   - Các ràng buộc liên quan: CASCADE, SET NULL, SET DEFAULT, NO ACTION
   - Thực hành tạo khóa chính và khóa ngoại trong SQL

4. Ứng dụng khóa chính và khóa ngoại trong các dự án:
   a. Trang thương mại điện tử Shopee:
      - Xác định khóa chính cho các bảng: Users, Products, Orders
      - Thiết lập khóa ngoại giữa Orders và Users, Orders và Products

   b. Trang ChatGPT:
      - Xác định khóa chính cho các bảng: Users, Conversations, Messages
      - Thiết lập khóa ngoại giữa Messages và Users, Messages và Conversations

   c. Trang Portfolio:
      - Xác định khóa chính cho các bảng: Projects, Skills, Contact
      - Thiết lập khóa ngoại giữa Projects và Skills (nếu có mối quan hệ)

5. Tổng kết và Q&A:
   - Ôn tập các khái niệm về khóa chính và khóa ngoại
   - Thảo luận về cách áp dụng khóa chính và khóa ngoại trong thiết kế CSDL
   - Giải đáp thắc mắc của học viên

#### SQL Server (7 buổi)
##### Cơ bản (4 buổi)
###### Buổi 1: Cài đặt và Tạo bảng
1. Cài đặt SQL Server:
   - Hướng dẫn tải và cài đặt SQL Server
   - Cấu hình môi trường và bảo mật cơ bản
   - Kết nối với SQL Server Management Studio (SSMS)

2. Tạo cơ sở dữ liệu:
   - Cú pháp tạo cơ sở dữ liệu mới
   - Cấu hình các thuộc tính cơ sở dữ liệu
   - Thực hành tạo cơ sở dữ liệu cho các dự án: Shopee, ChatGPT, Portfolio

3. Tạo bảng:
   - Cú pháp tạo bảng và định nghĩa cột
   - Các kiểu dữ liệu phổ biến trong SQL Server
   - Ràng buộc cột: NOT NULL, UNIQUE, DEFAULT
   - Thực hành tạo bảng cho các dự án:
     a. Shopee: Users, Products, Categories
     b. ChatGPT: Users, Conversations, Messages
     c. Portfolio: Projects, Skills, Contact

4. Bài tập thực hành:
   - Tạo cơ sở dữ liệu và các bảng cơ bản cho mỗi dự án
   - Thảo luận về cấu trúc bảng và mối quan hệ giữa các bảng
   - Đề xuất cải tiến cho cấu trúc cơ sở dữ liệu

5. Tổng kết và Q&A:
   - Ôn tập các bước cài đặt SQL Server và tạo cơ sở dữ liệu
   - Thảo luận về các thách thức khi thiết kế cấu trúc bảng
   - Giải đáp thắc mắc của học viên

###### Buổi 2: CRUD Operations
1. Thao tác Create (Tạo):
   - Cú pháp và cách sử dụng câu lệnh `INSERT INTO`
   - Thêm dữ liệu vào các bảng:
     a. Shopee: Thêm sản phẩm mới, đăng ký người dùng
     b. ChatGPT: Tạo cuộc hội thoại mới, thêm tin nhắn
     c. Portfolio: Thêm dự án mới, cập nhật kỹ năng

2. Thao tác Read (Đọc):
   - Cú pháp và cách sử dụng câu lệnh `SELECT`
   - Truy vấn dữ liệu từ các bảng:
     a. Shopee: Hiển thị danh sách sản phẩm, tìm kiếm sản phẩm theo tên
     b. ChatGPT: Xem lịch sử cuộc hội thoại, tìm kiếm tin nhắn
     c. Portfolio: Hiển thị danh sách dự án, lọc dự án theo kỹ năng

3. Thao tác Update (Cập nhật):
   - Cú pháp và cách sử dụng câu lệnh `UPDATE`
   - Cập nhật dữ liệu trong các bảng:
     a. Shopee: Cập nhật thông tin sản phẩm, chỉnh sửa thông tin người dùng
     b. ChatGPT: Chỉnh sửa nội dung tin nhắn, cập nhật trạng thái cuộc hội thoại
     c. Portfolio: Cập nhật thông tin dự án, nâng cấp kỹ năng

4. Thao tác Delete (Xóa):
   - Cú pháp và cách sử dụng câu lệnh `DELETE FROM`
   - Xóa dữ liệu khỏi các bảng:
     a. Shopee: Xóa sản phẩm, hủy đơn hàng
     b. ChatGPT: Xóa tin nhắn, xóa cuộc hội thoại
     c. Portfolio: Xóa dự án, loại bỏ kỹ năng không còn phù hợp

5. Bài tập thực hành:
   - Viết các câu lệnh CRUD cho mỗi dự án (Shopee, ChatGPT, Portfolio)
   - Thực hiện các thao tác phức tạp hơn như cập nhật nhiều bảng cùng lúc
   - Tối ưu hóa các câu lệnh CRUD để cải thiện hiệu suất

6. Tổng kết và Q&A:
   - Ôn tập các câu lệnh CRUD và cách áp dụng trong thực tế
   - Thảo luận về các best practices khi thực hiện CRUD operations
   - Giải đáp thắc mắc của học viên

###### Buổi 3: Joins
1. Giới thiệu về Joins:
   - Khái niệm và mục đích của Joins trong SQL
   - Tầm quan trọng của Joins trong việc kết hợp dữ liệu từ nhiều bảng

2. Các loại Joins:
   a. INNER JOIN:
      - Cú pháp và cách sử dụng
      - Ví dụ thực tế:
        - Shopee: Kết hợp thông tin sản phẩm với đánh giá của khách hàng
        - ChatGPT: Liên kết người dùng với cuộc hội thoại của họ
        - Portfolio: Kết nối dự án với các kỹ năng được sử dụng

   b. LEFT JOIN:
      - Cú pháp và cách sử dụng
      - Ví dụ thực tế:
        - Shopee: Hiển thị tất cả sản phẩm, kể cả chưa có đánh giá
        - ChatGPT: Liệt kê tất cả người dùng, bao gồm cả những người chưa có cuộc hội thoại
        - Portfolio: Hiển thị tất cả kỹ năng, kể cả chưa được sử dụng trong dự án nào

   c. RIGHT JOIN:
      - Cú pháp và cách sử dụng
      - Ví dụ thực tế:
        - Shopee: Hiển thị tất cả danh mục, kể cả chưa có sản phẩm nào
        - ChatGPT: Liệt kê tất cả các mẫu câu trả lời, bao gồm cả những mẫu chưa được sử dụng
        - Portfolio: Hiển thị tất cả các công nghệ, kể cả chưa được áp dụng trong dự án nào

   d. FULL JOIN:
      - Cú pháp và cách sử dụng
      - Ví dụ thực tế:
        - Shopee: Kết hợp toàn bộ thông tin sản phẩm và đơn hàng, kể cả sản phẩm chưa được đặt hàng và đơn hàng không có sản phẩm
        - ChatGPT: Liên kết tất cả người dùng và cuộc hội thoại, bao gồm cả người dùng chưa có cuộc hội thoại và cuộc hội thoại không thuộc về người dùng nào
        - Portfolio: Kết nối tất cả dự án và kỹ năng, kể cả dự án chưa sử dụng kỹ năng nào và kỹ năng chưa được áp dụng trong dự án nào

3. Bài tập thực hành:
   - Viết các câu lệnh JOIN cho mỗi dự án (Shopee, ChatGPT, Portfolio)
   - Thực hiện các truy vấn phức tạp sử dụng nhiều loại JOIN
   - Phân tích và tối ưu hóa hiệu suất của các câu lệnh JOIN

4. Tổng kết và Q&A:
   - Ôn tập các loại JOIN và cách áp dụng trong thực tế
   - Thảo luận về các best practices khi sử dụng JOIN
   - Giải đáp thắc mắc của học viên

###### Buổi 4: Các hàm SQL cơ bản
1. Giới thiệu về các hàm SQL cơ bản:
   - Tầm quan trọng của các hàm trong việc xử lý và phân tích dữ liệu
   - Phân loại các nhóm hàm chính trong SQL

2. Các hàm tính toán:
   a. COUNT:
      - Cú pháp và cách sử dụng
      - Ví dụ thực tế:
        - Shopee: Đếm số lượng sản phẩm trong mỗi danh mục
        - ChatGPT: Đếm số lượng tin nhắn trong mỗi cuộc hội thoại
        - Portfolio: Đếm số dự án cho mỗi loại kỹ năng

   b. SUM:
      - Cú pháp và cách sử dụng
      - Ví dụ thực tế:
        - Shopee: Tính tổng doanh thu của từng danh mục sản phẩm
        - ChatGPT: Tính tổng số từ được sử dụng trong các câu trả lời
        - Portfolio: Tính tổng thời gian làm việc cho tất cả các dự án

   c. AVG:
      - Cú pháp và cách sử dụng
      - Ví dụ thực tế:
        - Shopee: Tính điểm đánh giá trung bình cho mỗi sản phẩm
        - ChatGPT: Tính độ dài trung bình của các câu trả lời
        - Portfolio: Tính thời gian trung bình cho mỗi dự án

   d. MIN và MAX:
      - Cú pháp và cách sử dụng
      - Ví dụ thực tế:
        - Shopee: Tìm giá thấp nhất và cao nhất trong mỗi danh mục sản phẩm
        - ChatGPT: Tìm cuộc hội thoại ngắn nhất và dài nhất
        - Portfolio: Tìm dự án có thời gian hoàn thành nhanh nhất và lâu nhất

3. Các hàm xử lý chuỗi:
   - CONCAT, SUBSTRING, UPPER, LOWER, TRIM
   - Ví dụ thực tế:
     - Shopee: Kết hợp tên và mô tả sản phẩm, chuẩn hóa tên sản phẩm
     - ChatGPT: Trích xuất từ khóa từ câu hỏi, chuyển đổi chữ hoa/thường trong câu trả lời
     - Portfolio: Định dạng tên dự án, cắt ngắn mô tả dự án

4. Các hàm xử lý ngày tháng:
   - DATE, DATEADD, DATEDIFF, DATEFORMAT
   - Ví dụ thực tế:
     - Shopee: Tính thời gian giao hàng, lọc đơn hàng theo khoảng thời gian
     - ChatGPT: Tính thời gian phản hồi, phân tích xu hướng sử dụng theo thời gian
     - Portfolio: Tính thời gian hoàn thành dự án, hiển thị ngày bắt đầu/kết thúc dự án

5. Bài tập thực hành:
   - Viết các câu truy vấn sử dụng các hàm SQL cho mỗi dự án (Shopee, ChatGPT, Portfolio)
   - Kết hợp nhiều hàm trong một câu truy vấn để giải quyết các bài toán phức tạp
   - Phân tích và tối ưu hóa hiệu suất của các câu truy vấn sử dụng hàm

6. Tổng kết và Q&A:
   - Ôn tập các hàm SQL cơ bản và cách áp dụng trong thực tế
   - Thảo luận về các best practices khi sử dụng hàm SQL
   - Giải đáp thắc mắc của học viên

##### Nâng cao (3 buổi)
###### Buổi 5: Stored Procedures
1. Giới thiệu về Stored Procedures:
   - Định nghĩa và mục đích của Stored Procedures
   - Ưu điểm và nhược điểm của việc sử dụng Stored Procedures
   - So sánh Stored Procedures với các phương pháp truy vấn truyền thống

2. Tạo và sử dụng Stored Procedures:
   - Cú pháp cơ bản để tạo Stored Procedure
   - Cách truyền tham số vào Stored Procedure
   - Xử lý lỗi trong Stored Procedure
   - Quản lý và bảo trì Stored Procedures

3. Ví dụ thực tế và bài tập:
   a. Trang thương mại điện tử Shopee:
      - Tạo Stored Procedure để xử lý đơn hàng mới
      - Stored Procedure để cập nhật số lượng tồn kho sau khi bán hàng
      - Stored Procedure để tính toán doanh thu theo danh mục sản phẩm

   b. Trang ChatGPT:
      - Stored Procedure để lưu trữ và phân tích lịch sử chat
      - Stored Procedure để tạo báo cáo về các chủ đề được thảo luận nhiều nhất
      - Stored Procedure để quản lý và cập nhật cơ sở dữ liệu câu hỏi-trả lời

   c. Trang Portfolio:
      - Stored Procedure để thêm dự án mới vào portfolio
      - Stored Procedure để cập nhật thông tin kỹ năng của người dùng
      - Stored Procedure để tạo báo cáo về các dự án đã hoàn thành

4. Tối ưu hóa hiệu suất Stored Procedures:
   - Các kỹ thuật tối ưu hóa cơ bản
   - Sử dụng chỉ mục (indexes) trong Stored Procedures
   - Phân tích và cải thiện thời gian thực thi

5. Bảo mật với Stored Procedures:
   - Quản lý quyền truy cập cho Stored Procedures
   - Ngăn chặn SQL Injection thông qua Stored Procedures

6. Thực hành và Q&A:
   - Viết và triển khai Stored Procedures cho các dự án mẫu
   - Thảo luận về các best practices khi sử dụng Stored Procedures
   - Giải đáp thắc mắc của học viên

###### Buổi 6: Triggers và Indexes
1. Giới thiệu về Triggers:
   - Định nghĩa và mục đích của Triggers
   - Các loại Triggers: BEFORE, AFTER, INSTEAD OF
   - Ưu điểm và nhược điểm của việc sử dụng Triggers

2. Tạo và sử dụng Triggers:
   - Cú pháp cơ bản để tạo Trigger
   - Xử lý dữ liệu trong Trigger với OLD và NEW
   - Quản lý và bảo trì Triggers

3. Ví dụ thực tế và bài tập Triggers:
   a. Trang thương mại điện tử Shopee:
      - Trigger cập nhật số lượng tồn kho sau khi đặt hàng
      - Trigger ghi log khi có thay đổi giá sản phẩm
      - Trigger tự động tính tổng giá trị đơn hàng

   b. Trang ChatGPT:
      - Trigger cập nhật số lượng tin nhắn của người dùng
      - Trigger ghi log khi có người dùng mới đăng ký
      - Trigger tự động phân loại nội dung chat

   c. Trang Portfolio:
      - Trigger cập nhật ngày chỉnh sửa dự án
      - Trigger ghi log khi có thay đổi thông tin cá nhân
      - Trigger tự động tính toán số dự án đã hoàn thành

4. Giới thiệu về Indexes:
   - Định nghĩa và mục đích của Indexes
   - Các loại Indexes: Clustered, Non-clustered, Unique, Composite
   - Ưu điểm và nhược điểm của việc sử dụng Indexes

5. Tạo và sử dụng Indexes:
   - Cú pháp cơ bản để tạo Index
   - Chiến lược lựa chọn cột để tạo Index
   - Quản lý và bảo trì Indexes

6. Ví dụ thực tế và bài tập Indexes:
   a. Trang thương mại điện tử Shopee:
      - Tạo Index cho cột tìm kiếm sản phẩm
      - Tạo Composite Index cho danh mục và giá sản phẩm
      - Phân tích hiệu suất truy vấn trước và sau khi tạo Index

   b. Trang ChatGPT:
      - Tạo Index cho cột tìm kiếm nội dung chat
      - Tạo Unique Index cho tên người dùng
      - Tối ưu hóa truy vấn phân tích dữ liệu chat bằng Index

   c. Trang Portfolio:
      - Tạo Index cho cột tìm kiếm dự án
      - Tạo Composite Index cho kỹ năng và kinh nghiệm
      - Đánh giá hiệu suất truy vấn sau khi áp dụng Index

7. Tổng kết và Q&A:
   - Ôn tập về Triggers và Indexes
   - Thảo luận về các best practices khi sử dụng Triggers và Indexes
   - Giải đáp thắc mắc của học viên

###### Buổi 7: Transactions
1. Giới thiệu về Transactions:
   - Định nghĩa và mục đích của Transactions
   - Các thuộc tính ACID (Atomicity, Consistency, Isolation, Durability)
   - Tầm quan trọng của Transactions trong hệ thống cơ sở dữ liệu

2. Cách sử dụng Transactions để đảm bảo tính toàn vẹn dữ liệu:
   - Xác định các tình huống cần sử dụng Transactions
   - Cách thiết kế và triển khai Transactions hiệu quả
   - Xử lý lỗi và ngoại lệ trong Transactions

3. Các câu lệnh liên quan đến Transactions:
   - `BEGIN TRANSACTION`: Bắt đầu một Transaction
   - `COMMIT`: Xác nhận và lưu các thay đổi của Transaction
   - `ROLLBACK`: Hoàn tác các thay đổi của Transaction
   - `SAVEPOINT`: Tạo điểm lưu trữ trong Transaction
   - `SET TRANSACTION`: Thiết lập các thuộc tính của Transaction

4. Ví dụ thực tế và bài tập Transactions:
   a. Trang thương mại điện tử Shopee:
      - Sử dụng Transaction để xử lý quá trình đặt hàng
      - Áp dụng Transaction trong việc cập nhật số lượng tồn kho và đơn hàng
      - Xử lý các tình huống lỗi trong quá trình thanh toán

   b. Trang ChatGPT:
      - Sử dụng Transaction để lưu trữ lịch sử chat và cập nhật thông tin người dùng
      - Áp dụng Transaction trong việc xử lý đăng ký tài khoản mới
      - Xử lý các tình huống lỗi khi gửi và nhận tin nhắn

   c. Trang Portfolio:
      - Sử dụng Transaction để cập nhật thông tin dự án và kỹ năng
      - Áp dụng Transaction trong việc xử lý phản hồi và đánh giá
      - Xử lý các tình huống lỗi khi cập nhật nhiều bảng liên quan

5. Best practices khi sử dụng Transactions:
   - Tối ưu hóa thời gian thực thi của Transactions
   - Xử lý deadlock và các vấn đề về concurrency
   - Monitoring và logging Transactions để phát hiện và xử lý sự cố

#### MongoDB (6 buổi)
##### Buổi 1: Cài đặt và Giới thiệu
1. Cài đặt MongoDB:
   - Hướng dẫn cài đặt MongoDB trên các hệ điều hành khác nhau (Windows, macOS, Linux)
   - Cấu hình môi trường và biến môi trường
   - Kiểm tra cài đặt thành công

2. Giới thiệu về MongoDB và NoSQL:
   - Định nghĩa và đặc điểm của cơ sở dữ liệu NoSQL
   - So sánh MongoDB với cơ sở dữ liệu quan hệ truyền thống
   - Ưu điểm và nhược điểm của MongoDB
   - Các khái niệm cơ bản: Database, Collection, Document
   - Cấu trúc dữ liệu BSON (Binary JSON)

3. Kết nối và sử dụng MongoDB Shell:
   - Khởi động MongoDB server
   - Sử dụng MongoDB Shell để tương tác với cơ sở dữ liệu
   - Các lệnh cơ bản: show dbs, use, show collections

4. Bài tập thực hành:
   a. Trang thương mại điện tử Shopee:
      - Cài đặt MongoDB và tạo cơ sở dữ liệu cho Shopee
      - Thiết kế cấu trúc dữ liệu ban đầu cho sản phẩm và người dùng

   b. Trang ChatGPT:
      - Cài đặt MongoDB và tạo cơ sở dữ liệu cho ChatGPT
      - Thiết kế cấu trúc dữ liệu ban đầu cho người dùng và lịch sử chat

   c. Trang Portfolio:
      - Cài đặt MongoDB và tạo cơ sở dữ liệu cho Portfolio
      - Thiết kế cấu trúc dữ liệu ban đầu cho thông tin cá nhân và dự án

5. Tổng kết và Q&A:
   - Ôn tập các khái niệm đã học
   - Thảo luận về ưu điểm của MongoDB trong các dự án thực tế
   - Giải đáp thắc mắc của học viên

##### Buổi 2: Tạo Collection và Document
1. Tạo và quản lý Collections:
   - Cú pháp tạo collection: `db.createCollection()`
   - Các tùy chọn khi tạo collection: capped collections, validation rules
   - Xóa collection: `db.collection.drop()`
   - Hiển thị danh sách collections: `show collections`

2. Tạo và quản lý Documents:
   - Cú pháp tạo document: `db.collection.insertOne()`, `db.collection.insertMany()`
   - Cấu trúc của document: key-value pairs, nested documents, arrays
   - Các kiểu dữ liệu trong MongoDB: String, Number, Boolean, Date, ObjectId, Array, Embedded Document
   - Tự động tạo _id field nếu không được chỉ định

3. Bài tập thực hành:
   a. Trang thương mại điện tử Shopee:
      - Tạo collections cho sản phẩm, người dùng, đơn hàng
      - Thêm documents mẫu cho mỗi collection

   b. Trang ChatGPT:
      - Tạo collections cho người dùng, cuộc hội thoại, tin nhắn
      - Thêm documents mẫu cho mỗi collection

   c. Trang Portfolio:
      - Tạo collections cho thông tin cá nhân, dự án, kỹ năng
      - Thêm documents mẫu cho mỗi collection

4. Các best practices khi thiết kế schema:
   - Embedding vs Referencing: khi nào nên sử dụng mỗi cách
   - Tránh nested document quá sâu
   - Cân nhắc về kích thước document và hiệu suất truy vấn

5. Tổng kết và Q&A:
   - Ôn tập các khái niệm đã học
   - Thảo luận về cách áp dụng kiến thức vào các dự án thực tế
   - Giải đáp thắc mắc của học viên

##### Buổi 3: CRUD Operations
1. Thao tác Create (Tạo):
   - Sử dụng `insertOne()` để thêm một document
   - Sử dụng `insertMany()` để thêm nhiều documents cùng lúc
   - Xử lý lỗi khi thêm dữ liệu

2. Thao tác Read (Đọc):
   - Sử dụng `find()` để tìm kiếm documents
   - Các toán tử so sánh: $eq, $ne, $gt, $gte, $lt, $lte
   - Sử dụng `findOne()` để tìm document đầu tiên thỏa mãn điều kiện
   - Giới hạn kết quả với `limit()` và bỏ qua kết quả với `skip()`
   - Sắp xếp kết quả với `sort()`

3. Thao tác Update (Cập nhật):
   - Sử dụng `updateOne()` để cập nhật một document
   - Sử dụng `updateMany()` để cập nhật nhiều documents
   - Các toán tử cập nhật: $set, $unset, $inc, $push, $pull
   - Sử dụng `findOneAndUpdate()` để cập nhật và trả về document

4. Thao tác Delete (Xóa):
   - Sử dụng `deleteOne()` để xóa một document
   - Sử dụng `deleteMany()` để xóa nhiều documents
   - Sử dụng `findOneAndDelete()` để xóa và trả về document

5. Bài tập thực hành:
   a. Trang thương mại điện tử Shopee:
      - Thêm, đọc, cập nhật và xóa sản phẩm
      - Tìm kiếm sản phẩm theo giá, danh mục
      - Cập nhật số lượng sản phẩm khi có đơn hàng

   b. Trang ChatGPT:
      - Thêm, đọc, cập nhật và xóa tin nhắn trong cuộc hội thoại
      - Tìm kiếm tin nhắn theo nội dung hoặc thời gian
      - Cập nhật trạng thái người dùng (online/offline)

   c. Trang Portfolio:
      - Thêm, đọc, cập nhật và xóa dự án
      - Tìm kiếm dự án theo kỹ năng hoặc thời gian
      - Cập nhật thông tin cá nhân và kỹ năng

6. Tổng kết và Q&A:
   - Ôn tập các thao tác CRUD
   - Thảo luận về các best practices khi thực hiện CRUD operations
   - Giải đáp thắc mắc của học viên

##### Buổi 4: Query và Indexes
1. Các loại query trong MongoDB:
   - Query cơ bản: Tìm kiếm theo điều kiện đơn giản
   - Query phức tạp: Sử dụng các toán tử logic ($and, $or, $not)
   - Query với biểu thức chính quy
   - Query trên mảng: $elemMatch, $all, $size
   - Query trên document lồng nhau
   - Projection: Chọn lọc các trường cần trả về

2. Tạo và sử dụng Indexes:
   - Giới thiệu về Indexes và tầm quan trọng
   - Các loại Indexes: Single field, Compound, Multikey, Text, Geospatial
   - Tạo Index với createIndex()
   - Xem danh sách Indexes với getIndexes()
   - Xóa Index với dropIndex() và dropIndexes()
   - Phân tích hiệu suất query với explain()

3. Bài tập thực hành:
   a. Trang thương mại điện tử Shopee:
      - Tạo các query phức tạp để tìm kiếm sản phẩm (ví dụ: theo giá, danh mục, đánh giá)
      - Tạo Index cho các trường thường xuyên được tìm kiếm
      - So sánh hiệu suất trước và sau khi tạo Index

   b. Trang ChatGPT:
      - Tạo query để tìm kiếm tin nhắn trong khoảng thời gian cụ thể
      - Sử dụng text index để tìm kiếm nội dung tin nhắn
      - Tạo compound index cho việc tìm kiếm tin nhắn theo người gửi và thời gian

   c. Trang Portfolio:
      - Tạo query để tìm kiếm dự án theo nhiều tiêu chí (kỹ năng, thời gian, loại dự án)
      - Tạo Index cho việc tìm kiếm dự án theo kỹ năng
      - Sử dụng explain() để phân tích và tối ưu các query

4. Tổng kết và Q&A:
   - Ôn tập các loại query và cách sử dụng
   - Thảo luận về best practices khi tạo và sử dụng Indexes
   - Giải đáp thắc mắc của học viên

##### Buổi 5: Aggregation
1. Giới thiệu về Aggregation:
   - Khái niệm và mục đích của Aggregation trong MongoDB
   - So sánh Aggregation với các phương pháp truy vấn thông thường
   - Các trường hợp sử dụng Aggregation

2. Sử dụng Aggregation Pipeline:
   - Cấu trúc của Aggregation Pipeline
   - Các stage phổ biến: $match, $group, $sort, $project, $limit, $skip
   - Sử dụng các toán tử trong Aggregation: $sum, $avg, $max, $min, $push
   - Kết hợp nhiều stage trong một pipeline

3. Các stage nâng cao:
   - $lookup: Thực hiện join giữa các collection
   - $unwind: Tách các phần tử trong mảng
   - $facet: Thực hiện nhiều pipeline song song
   - $bucket và $bucketAuto: Nhóm dữ liệu theo khoảng giá trị

4. Tối ưu hóa Aggregation:
   - Sử dụng Indexes trong Aggregation
   - Hiểu và sử dụng explain() cho Aggregation
   - Các best practices khi viết Aggregation Pipeline

5. Bài tập thực hành:
   a. Trang thương mại điện tử Shopee:
      - Tính tổng doanh thu theo danh mục sản phẩm
      - Tìm top 5 sản phẩm bán chạy nhất
      - Phân tích đánh giá sản phẩm (số lượng đánh giá, điểm trung bình)

   b. Trang ChatGPT:
      - Thống kê số lượng tin nhắn theo người dùng và thời gian
      - Phân tích độ dài trung bình của các cuộc hội thoại
      - Tìm các từ khóa phổ biến nhất trong tin nhắn

   c. Trang Portfolio:
      - Tính tổng số dự án theo từng kỹ năng
      - Phân tích xu hướng dự án theo thời gian
      - Tạo báo cáo tổng hợp về các dự án (số lượng, thời gian trung bình, kỹ năng phổ biến)

6. Tổng kết và Q&A:
   - Ôn tập các khái niệm và kỹ thuật Aggregation đã học
   - Thảo luận về các use case phức tạp và cách tiếp cận
   - Giải đáp thắc mắc của học viên

##### Buổi 6: Replication và Sharding
1. Giới thiệu về Replication:
   - Khái niệm và mục đích của Replication trong MongoDB
   - Cấu trúc của một Replica Set
   - Các node trong Replica Set: Primary, Secondary, và Arbiter
   - Cơ chế đồng bộ dữ liệu giữa các node

2. Thiết lập và quản lý Replication:
   - Cách cấu hình một Replica Set
   - Thêm và xóa node trong Replica Set
   - Monitoring và troubleshooting Replica Set
   - Failover và election process

3. Giới thiệu về Sharding:
   - Khái niệm và mục đích của Sharding trong MongoDB
   - Cấu trúc của một Sharded Cluster
   - Các thành phần trong Sharded Cluster: Shard, Config Server, và Mongos

4. Thiết lập và quản lý Sharding:
   - Cách cấu hình một Sharded Cluster
   - Chọn Shard Key và chiến lược sharding
   - Balancing và data distribution
   - Monitoring và optimizing Sharded Cluster

5. Bài tập thực hành:
   a. Trang thương mại điện tử Shopee:
      - Thiết lập Replica Set cho database Shopee
      - Cấu hình Sharding cho collection sản phẩm và đơn hàng
      - Thực hiện các truy vấn trên Sharded Cluster

   b. Trang ChatGPT:
      - Triển khai Replica Set cho database ChatGPT
      - Sharding collection tin nhắn dựa trên user_id
      - Kiểm tra hiệu suất truy vấn trước và sau khi sharding

   c. Trang Portfolio:
      - Cấu hình Replica Set cho database Portfolio
      - Thực hiện sharding cho collection dự án
      - Phân tích ảnh hưởng của sharding đến hiệu suất ứng dụng

6. Tổng kết và Q&A:
   - Ôn tập các khái niệm về Replication và Sharding
   - Thảo luận về các use case và best practices
   - Giải đáp thắc mắc của học viên

### Node.js (9 buổi)
#### Cơ bản (5 buổi)
##### Buổi 1: Cài đặt và Giới thiệu
1. Cài đặt Node.js:
   - Hướng dẫn cài đặt Node.js trên các hệ điều hành khác nhau (Windows, macOS, Linux)
   - Kiểm tra phiên bản Node.js và npm sau khi cài đặt
   - Cấu hình môi trường để sử dụng Node.js

2. Giới thiệu về Node.js và môi trường runtime:
   - Lịch sử và đặc điểm của Node.js
   - So sánh Node.js với các nền tảng phát triển web khác
   - Kiến trúc event-driven và non-blocking I/O của Node.js
   - V8 JavaScript engine và vai trò của nó trong Node.js
   - Các use case phổ biến của Node.js trong phát triển ứng dụng

3. Tìm hiểu về REPL (Read-Eval-Print Loop):
   - Sử dụng REPL để thực thi mã JavaScript trực tiếp
   - Các lệnh cơ bản trong REPL

4. Tạo và chạy file JavaScript đầu tiên với Node.js:
   - Viết một chương trình "Hello World" đơn giản
   - Sử dụng command line để chạy file JavaScript

5. Giới thiệu về các global objects trong Node.js:
   - process
   - console
   - global
   - __dirname và __filename

6. Bài tập thực hành:
   a. Trang thương mại điện tử Shopee:
      - Cài đặt Node.js và tạo một file JavaScript đơn giản để in ra thông tin cơ bản về dự án Shopee

   b. Trang ChatGPT:
      - Sử dụng REPL để thực hiện một số tính toán đơn giản liên quan đến dự án ChatGPT (ví dụ: tính số lượng người dùng dự kiến)

   c. Trang Portfolio:
      - Tạo một file JavaScript để in ra cấu trúc dự kiến của trang Portfolio sử dụng console.log

7. Tổng kết và Q&A:
   - Ôn tập các khái niệm đã học
   - Thảo luận về các ứng dụng tiềm năng của Node.js trong ba dự án
   - Giải đáp thắc mắc của học viên

##### Buổi 2: Modules
1. Giới thiệu về modules trong Node.js:
   - Khái niệm và vai trò của modules
   - Các loại modules: Core modules, Local modules, Third-party modules
   - Cách modules giúp tổ chức và quản lý code hiệu quả

2. Sử dụng `require` để import modules:
   - Cú pháp và cách sử dụng `require`
   - Import core modules (ví dụ: fs, http, path)
   - Import local modules
   - Import third-party modules

3. Sử dụng `module.exports` và `exports` để export modules:
   - Cách export một function, object, hoặc class
   - Sự khác biệt giữa `module.exports` và `exports`
   - Best practices khi export modules

4. CommonJS vs ES6 modules:
   - So sánh giữa CommonJS và ES6 modules
   - Cách sử dụng ES6 modules trong Node.js

5. Quản lý dependencies với package.json:
   - Tạo và cấu hình file package.json
   - Hiểu về semantic versioning

6. Bài tập thực hành:
   a. Trang thương mại điện tử Shopee:
      - Tạo các modules riêng cho các chức năng như quản lý sản phẩm, giỏ hàng, và thanh toán
      - Sử dụng `require` và `module.exports` để kết nối các modules

   b. Trang ChatGPT:
      - Tạo module xử lý tin nhắn và module quản lý người dùng
      - Implement một simple chatbot sử dụng các modules đã tạo

   c. Trang Portfolio:
      - Tạo các modules cho các phần khác nhau của portfolio (ví dụ: thông tin cá nhân, dự án, kỹ năng)
      - Sử dụng ES6 modules syntax để import/export

7. Tổng kết và Q&A:
   - Ôn tập các khái niệm về modules đã học
   - Thảo luận về cách áp dụng modules vào các dự án thực tế
   - Giải đáp thắc mắc của học viên

##### Buổi 3: HTTP Server
1. Giới thiệu về HTTP và vai trò của server:
   - Khái niệm cơ bản về HTTP
   - Cách hoạt động của client-server model
   - Vai trò của HTTP server trong ứng dụng web

2. Tạo một HTTP server cơ bản với Node.js:
   - Sử dụng module 'http' của Node.js
   - Cấu trúc cơ bản của một HTTP server
   - Lắng nghe các kết nối từ client

3. Xử lý các request và response:
   - Phân tích request từ client (method, URL, headers)
   - Tạo và gửi response phù hợp
   - Xử lý các loại content type khác nhau

4. Routing cơ bản:
   - Xử lý các route khác nhau dựa trên URL
   - Implement các HTTP methods (GET, POST, PUT, DELETE)

5. Xử lý lỗi và status codes:
   - Hiểu về các HTTP status codes
   - Xử lý và trả về các mã lỗi phù hợp

6. Bài tập thực hành:
   a. Trang thương mại điện tử Shopee:
      - Tạo HTTP server đơn giản để phục vụ danh sách sản phẩm
      - Implement các route cơ bản: lấy danh sách sản phẩm, chi tiết sản phẩm

   b. Trang ChatGPT:
      - Tạo HTTP server để xử lý yêu cầu chat
      - Implement route để nhận tin nhắn và trả về phản hồi

   c. Trang Portfolio:
      - Tạo HTTP server để phục vụ nội dung trang portfolio
      - Implement các route cho các phần khác nhau của portfolio

7. Tổng kết và Q&A:
   - Ôn tập các khái niệm về HTTP server đã học
   - Thảo luận về cách áp dụng HTTP server vào các dự án thực tế
   - Giải đáp thắc mắc của học viên

##### Buổi 4: File System
1. Giới thiệu về File System trong Node.js:
   - Khái niệm và tầm quan trọng của File System
   - Module 'fs' trong Node.js

2. Đọc file:
   - Sử dụng fs.readFile() và fs.readFileSync()
   - Xử lý các định dạng file khác nhau (text, JSON, binary)
   - Đọc file theo từng phần với streams

3. Ghi file:
   - Sử dụng fs.writeFile() và fs.writeFileSync()
   - Ghi file mới và append vào file có sẵn
   - Ghi file với streams để xử lý dữ liệu lớn

4. Thao tác với thư mục:
   - Tạo, đổi tên, và xóa thư mục
   - Đọc nội dung của thư mục

5. Quản lý quyền truy cập file:
   - Kiểm tra quyền truy cập
   - Thay đổi quyền truy cập file và thư mục

6. Watching files và directories:
   - Theo dõi sự thay đổi của file và thư mục
   - Xử lý sự kiện khi có thay đổi

7. Sử dụng phương thức đồng bộ và bất đồng bộ:
   - So sánh và phân biệt giữa phương thức đồng bộ và bất đồng bộ
   - Khi nào nên sử dụng phương thức nào

8. Xử lý lỗi trong File System operations:
   - Các lỗi thường gặp khi làm việc với File System
   - Cách xử lý lỗi hiệu quả

9. Bài tập thực hành:
   a. Trang thương mại điện tử Shopee:
      - Đọc và ghi danh sách sản phẩm từ/vào file JSON
      - Tạo log file để ghi lại các hoạt động của server

   b. Trang ChatGPT:
      - Lưu trữ lịch sử chat vào file
      - Đọc và hiển thị lịch sử chat từ file

   c. Trang Portfolio:
      - Đọc nội dung các phần của portfolio từ các file riêng biệt
      - Cập nhật nội dung portfolio bằng cách ghi vào file

10. Tổng kết và Q&A:
    - Ôn tập các khái niệm về File System đã học
    - Thảo luận về cách áp dụng File System vào các dự án thực tế
    - Giải đáp thắc mắc của học viên

##### Buổi 5: NPM và Quản lý gói
1. Giới thiệu về NPM (Node Package Manager):
   - Khái niệm và vai trò của NPM trong hệ sinh thái Node.js
   - Cấu trúc của một package trong NPM

2. Cài đặt và sử dụng NPM:
   - Cài đặt NPM
   - Các lệnh cơ bản: npm init, npm install, npm uninstall
   - Hiểu về file package.json và package-lock.json

3. Quản lý dependencies:
   - Dependencies vs devDependencies
   - Semantic versioning (SemVer)
   - Cập nhật và downgrade packages

4. Tạo và xuất bản package:
   - Cấu trúc một package
   - Tạo và test package locally
   - Xuất bản package lên NPM registry

5. Bảo mật trong NPM:
   - Kiểm tra các lỗ hổng bảo mật với npm audit
   - Cập nhật packages để khắc phục các vấn đề bảo mật

6. NPM scripts:
   - Tạo và sử dụng custom scripts trong package.json
   - Tối ưu hóa quy trình phát triển với NPM scripts

7. Bài tập thực hành:
   a. Trang thương mại điện tử Shopee:
      - Sử dụng NPM để cài đặt và quản lý các package cần thiết cho project
      - Tạo NPM scripts để chạy server, build project, và chạy tests

   b. Trang ChatGPT:
      - Tìm và cài đặt package phù hợp để xử lý websocket cho real-time chat
      - Sử dụng NPM để quản lý phiên bản của các dependencies

   c. Trang Portfolio:
      - Sử dụng NPM để cài đặt package cho việc tạo static site generator
      - Tạo custom NPM script để build và deploy trang portfolio

8. Tổng kết và Q&A:
   - Ôn tập các khái niệm về NPM đã học
   - Thảo luận về best practices khi sử dụng NPM trong dự án
   - Giải đáp thắc mắc của học viên

#### Nâng cao (4 buổi)
##### Buổi 6: Express.js
1. Giới thiệu về Express.js:
   - Khái niệm và lợi ích của Express.js
   - So sánh Express.js với các framework Node.js khác
   - Cấu trúc cơ bản của một ứng dụng Express.js

2. Cài đặt và cấu hình Express.js:
   - Cài đặt Express.js thông qua NPM
   - Tạo một project Express.js mới
   - Cấu trúc thư mục và file cơ bản

3. Routing trong Express.js:
   - Khái niệm về routing
   - Định nghĩa các route cơ bản (GET, POST, PUT, DELETE)
   - Sử dụng route parameters và query strings

4. Xử lý request và response:
   - Đọc dữ liệu từ request (body, headers, params)
   - Gửi response (JSON, HTML, file tĩnh)
   - Xử lý lỗi và gửi mã trạng thái HTTP

5. Template engines:
   - Giới thiệu về template engines (ví dụ: EJS, Pug)
   - Cấu hình và sử dụng template engine trong Express.js
   - Render views và truyền dữ liệu

6. Serving static files:
   - Cấu hình thư mục static
   - Phục vụ các file CSS, JavaScript, và hình ảnh

7. Bài tập thực hành:
   a. Trang thương mại điện tử Shopee:
      - Tạo server Express.js cơ bản cho ứng dụng Shopee
      - Định nghĩa các route cho trang chủ, danh mục sản phẩm, và chi tiết sản phẩm
      - Sử dụng template engine để render giao diện cơ bản

   b. Trang ChatGPT:
      - Thiết lập server Express.js cho ứng dụng chat
      - Tạo route để xử lý yêu cầu chat và trả về response
      - Tích hợp WebSocket để hỗ trợ real-time chat

   c. Trang Portfolio:
      - Xây dựng server Express.js để phục vụ trang portfolio
      - Tạo các route cho các phần khác nhau của portfolio (about, projects, contact)
      - Sử dụng static file serving để phục vụ CSS và JavaScript

8. Tổng kết và Q&A:
   - Ôn tập các khái niệm chính về Express.js
   - Thảo luận về best practices khi sử dụng Express.js
   - Giải đáp thắc mắc của học viên

##### Buổi 7: Middleware
1. Giới thiệu về middleware:
   - Khái niệm và vai trò của middleware trong Express.js
   - Cách middleware hoạt động trong luồng request-response
   - Các loại middleware: application-level, router-level, error-handling

2. Sử dụng middleware có sẵn:
   - Body-parser middleware để xử lý dữ liệu từ request body
   - Cookie-parser middleware để xử lý cookies
   - Morgan middleware để logging

3. Tạo middleware tùy chỉnh:
   - Cú pháp và cấu trúc của một middleware function
   - Truyền dữ liệu giữa các middleware
   - Xử lý lỗi trong middleware

4. Thứ tự và chuỗi middleware:
   - Sắp xếp thứ tự middleware hợp lý
   - Sử dụng next() để chuyển tiếp giữa các middleware

5. Bài tập thực hành:
   a. Trang thương mại điện tử Shopee:
      - Tạo middleware xác thực người dùng
      - Implement middleware để log các request vào hệ thống
      - Sử dụng middleware để xử lý lỗi và hiển thị trang lỗi tùy chỉnh

   b. Trang ChatGPT:
      - Tạo middleware để kiểm tra và lọc nội dung chat không phù hợp
      - Implement middleware để theo dõi thời gian phản hồi của server
      - Sử dụng middleware để nén dữ liệu response

   c. Trang Portfolio:
      - Tạo middleware để thêm thông tin header tùy chỉnh vào mỗi response
      - Implement middleware để cache các trang tĩnh
      - Sử dụng middleware để xử lý cross-origin resource sharing (CORS)

6. Tổng kết và Q&A:
   - Ôn tập các khái niệm chính về middleware
   - Thảo luận về best practices khi sử dụng middleware
   - Giải đáp thắc mắc của học viên

##### Buổi 8: RESTful API
1. Giới thiệu về RESTful API:
   - Khái niệm và nguyên tắc của REST (Representational State Transfer)
   - Các phương thức HTTP (GET, POST, PUT, DELETE, etc.) và ý nghĩa của chúng
   - Cấu trúc của một RESTful API endpoint

2. Tạo các endpoint RESTful với Express.js:
   - Định nghĩa routes cho các operations CRUD (Create, Read, Update, Delete)
   - Sử dụng các phương thức HTTP phù hợp cho từng operation
   - Xử lý params và query strings trong requests

3. Thiết kế API:
   - Best practices trong việc đặt tên endpoints
   - Versioning API
   - Xử lý lỗi và trả về status codes phù hợp

4. Bảo mật API:
   - Sử dụng HTTPS
   - Implement authentication và authorization
   - Rate limiting để ngăn chặn lạm dụng API

5. Tài liệu hóa API:
   - Sử dụng Swagger/OpenAPI để tạo tài liệu API
   - Tạo README chi tiết cho API

6. Bài tập thực hành:
   a. Trang thương mại điện tử Shopee:
      - Tạo RESTful API cho quản lý sản phẩm (thêm, sửa, xóa, lấy danh sách sản phẩm)
      - Implement API cho giỏ hàng và đặt hàng
      - Tạo endpoint cho tìm kiếm và lọc sản phẩm

   b. Trang ChatGPT:
      - Thiết kế API để gửi và nhận tin nhắn
      - Tạo endpoint để lưu và truy xuất lịch sử chat
      - Implement API để quản lý người dùng và phiên chat

   c. Trang Portfolio:
      - Tạo API để quản lý các dự án trong portfolio
      - Implement endpoint để gửi tin nhắn liên hệ
      - Thiết kế API để cập nhật thông tin cá nhân

7. Testing API:
   - Sử dụng Postman để kiểm thử API
   - Viết unit tests cho API endpoints

8. Tổng kết và Q&A:
   - Ôn tập các khái niệm chính về RESTful API
   - Thảo luận về best practices khi thiết kế và implement API
   - Giải đáp thắc mắc của học viên

##### Buổi 9: Tổng kết và thực hành
1. Ôn tập các kiến thức đã học:
   - Tổng quan về Node.js và Express.js
   - Cơ sở dữ liệu MongoDB và Mongoose
   - Authentication và Authorization
   - RESTful API và best practices
   - Frontend integration với EJS

2. Thực hành nâng cao cho các dự án:
   a. Trang thương mại điện tử Shopee:
      - Implement chức năng đánh giá và bình luận sản phẩm
      - Tích hợp hệ thống thanh toán (ví dụ: Stripe, PayPal)
      - Tạo trang quản trị cho người bán hàng

   b. Trang ChatGPT:
      - Thêm chức năng chat nhóm
      - Implement real-time notifications sử dụng WebSockets
      - Tích hợp xử lý ngôn ngữ tự nhiên đơn giản

   c. Trang Portfolio:
      - Tạo chức năng blog với khả năng comment
      - Implement system để track số lượt truy cập
      - Tạo trang admin để quản lý nội dung

3. Tối ưu hóa và cải thiện hiệu suất:
   - Caching với Redis
   - Xử lý bất đồng bộ với message queues (ví dụ: RabbitMQ)
   - Tối ưu hóa truy vấn cơ sở dữ liệu

4. Kiểm thử và debugging:
   - Viết unit tests và integration tests
   - Sử dụng công cụ profiling để phát hiện bottlenecks
   - Xử lý và ghi log errors

5. Chuẩn bị cho deployment:
   - Cấu hình môi trường production
   - Sử dụng process manager (ví dụ: PM2)
   - Tạo scripts để tự động hóa quá trình deployment

6. Thảo luận và Q&A:
   - Chia sẻ kinh nghiệm và thách thức trong quá trình phát triển
   - Thảo luận về các xu hướng và công nghệ mới trong Node.js ecosystem
   - Giải đáp thắc mắc và cung cấp hướng dẫn cho các vấn đề cụ thể

7. Lên kế hoạch cho các bước tiếp theo:
   - Giới thiệu các chủ đề nâng cao để học viên tự nghiên cứu
   - Đề xuất các dự án thực tế để áp dụng kiến thức đã học
   - Hướng dẫn cách tiếp tục phát triển kỹ năng sau khóa học

## Deployment
1. Chuẩn bị ứng dụng cho deployment:
   - Cấu hình biến môi trường
   - Tối ưu hóa performance
   - Xử lý lỗi và logging

2. Triển khai ứng dụng trên Vercel:
   - Tạo tài khoản và cấu hình project
   - Kết nối với repository GitHub
   - Cấu hình build và deployment settings
   - Triển khai và theo dõi quá trình

3. Triển khai ứng dụng trên AWS:
   - Tạo EC2 instance
   - Cấu hình security groups
   - Cài đặt Node.js và các dependencies
   - Sử dụng PM2 để quản lý process
   - Cấu hình Nginx làm reverse proxy

4. Continuous Integration/Continuous Deployment (CI/CD):
   - Thiết lập GitHub Actions cho automated testing
   - Cấu hình auto-deployment khi có changes

5. Monitoring và scaling:
   - Sử dụng công cụ monitoring (ví dụ: AWS CloudWatch, Datadog)
   - Cấu hình auto-scaling trên AWS

6. Bài tập thực hành:
   a. Trang thương mại điện tử Shopee:
      - Triển khai trên Vercel
      - Cấu hình CDN cho static assets
   
   b. Trang ChatGPT:
      - Triển khai trên AWS EC2
      - Cấu hình load balancer cho high availability
   
   c. Trang Portfolio:
      - Triển khai sử dụng GitHub Pages
      - Cấu hình custom domain

7. Security considerations:
   - Cấu hình HTTPS
   - Implement rate limiting
   - Bảo vệ against common web vulnerabilities (XSS, CSRF)

## Công cụ và kỹ năng bổ trợ
1. VSCode: 
   - Giới thiệu cơ bản về VSCode
   - Cài đặt và cấu hình cơ bản
   - Các tính năng chính: Explorer, Editor, Terminal
   - Extensions phổ biến cho web development

2. Git:
   - Khái niệm cơ bản về version control
   - Cài đặt Git
   - Các lệnh cơ bản: init, add, commit, push, pull
   - Làm việc với branches
   - Sử dụng GitHub để lưu trữ và chia sẻ code

3. Chrome DevTools:
   - Giới thiệu về Chrome DevTools
   - Sử dụng Console để debug
   - Inspect và chỉnh sửa HTML/CSS
   - Network tab để theo dõi requests

4. Postman:
   - Giới thiệu về API testing
   - Cài đặt Postman
   - Tạo và gửi requests cơ bản
   - Sử dụng Collections để tổ chức API tests

5. Terminal/Command Line:
   - Giới thiệu về command line interface
   - Các lệnh cơ bản: cd, ls, mkdir, rm
   - Cài đặt và sử dụng package managers (npm, yarn)
