# Deploy expressjs mysql nginx có CI/CD bằng GitHub Actions

# Cách dùng Github Actions
- Tạo file `.github/workflows/main.yml` trong repo
- Cấu hình file `main.yml` như sau:
```yaml
name: CI/CD
on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '14'

      - name: Install dependencies
        run: npm install

      - name: Run tests
        run: npm test

  deploy:
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Deploy to server
        run: |
          ssh user@server "cd /path/to/app && git pull origin main && npm install && pm2 restart all"
```
- `name`: Tên của workflow
- `on`: Sự kiện kích hoạt workflow
  - `push`: Khi có commit lên nhánh main
  - `pull_request`: Khi có pull request vào nhánh main
- `jobs`: Các job sẽ chạy trong workflow
- `build`: Job build ứng dụng
  - `runs-on`: Hệ điều hành chạy job
  - `steps`: Các bước trong job
    - `Checkout code`: Sử dụng action checkout để lấy mã nguồn từ repo
    - `Set up Node.js`: Sử dụng action setup-node để cài đặt Node.js
    - `Install dependencies`: Cài đặt các thư viện cần thiết
    - `Run tests`: Chạy các bài test
- `deploy`: Job deploy ứng dụng
  - `needs`: Job này cần job build hoàn thành trước khi chạy
  - `steps`: Các bước trong job
    - `Checkout code`: Sử dụng action checkout để lấy mã nguồn từ repo
    - `Deploy to server`: Kết nối SSH đến server và thực hiện các lệnh deploy ứng dụng
      - `ssh user@server`: Kết nối SSH đến server
      - `cd /path/to/app`: Chuyển đến thư mục ứng dụng
      - `git pull origin main`: Kéo mã nguồn mới nhất từ nhánh main
      - `npm install`: Cài đặt các thư viện cần thiết
      - `pm2 restart all`: Khởi động lại ứng dụng bằng PM2
- `ssh user@server`: Kết nối SSH đến server
