# So sánh hosting và vps
- Hosting: chia sẻ, hạn chế, nếu 1 trang web bị lỗi thì có thể tất cả các trang web khác cũng bị lỗi theo
- VPS: 1 máy chủ ảo, có thể cài đặt hệ điều hành, phần mềm, ứng dụng, không bị ảnh hưởng bởi các trang web khác

# Hướng dẫn Deploy Web Application

## 1. Chuẩn bị VPS
- Đăng ký VPS Ubuntu 20.04
- SSH vào VPS:
```bash
ssh root@your_server_ip
```

## 2. Cài đặt môi trường
```bash
# Tạo non-root user
adduser your_username # tạo user mới
usermod -aG sudo your_username # thêm user vào nhóm sudo
su - your_username # chuyển sang user vừa tạo

# Update system
sudo apt update # để cập nhật danh sách gói
sudo apt upgrade # để cài đặt các gói cập nhật

# sudo là một lệnh dành cho người dùng có quyền quản trị
# apt là công cụ quản lý gói trong Ubuntu
# sudo su để chuyển sang user root

# Install Node.js và npm
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
# curl là công cụ để tải file từ internet
# -fsSL là các tùy chọn để tải file, -f để không hiển thị lỗi, -s để không hiển thị tiến trình, -S để hiển thị lỗi, -L để theo dõi redirect
# bash -E để chạy file script với bash

sudo apt install -y nodejs # -y để tự động trả lời yes cho các câu hỏi
# sudo apt install -y nodejs npm

# Kiem tra version
node --version
npm --version

# Nếu dùng nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install 18

# Install Git
sudo apt install git

# Install MySQL
sudo apt install mysql-server
sudo mysql_secure_installation

# Hoặc sử dụng MariaDB có sẵn
# Kiểm tra phiên bản
mysql --version

# Cấu hình MySQL
sudo mysql -u root -p
# Tạo user
CREATE USER 'shopee'@'localhost' IDENTIFIED BY '123456789';
# Tạo database
CREATE DATABASE shopee_suabai;
# Cấp quyền cho user
GRANT ALL PRIVILEGES ON shopee_suabai.* TO 'shopee'@'localhost';
# Áp dụng thay đổi
FLUSH PRIVILEGES;
# Kiểm tra quyền
SHOW GRANTS FOR 'shopee'@'localhost';
# Kiểm tra database
SHOW DATABASES;
# Kiểm tra user
SELECT User, Host FROM mysql.user;
# Thoát MySQL
exit;


# Install MongoDB
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
sudo apt update
sudo apt install -y mongodb-org
sudo systemctl start mongod
sudo systemctl enable mongod

# Install Redis
sudo apt install redis-server
sudo systemctl start redis # để bắt đầu Redis
sudo systemctl enable redis # để Redis khởi động cùng hệ thống
sudo systemctl status redis # để kiểm tra trạng thái Redis


# systemctl là một công cụ quản lý dịch vụ hệ thống trong Linux

# 5001 là port mà ứng dụng Node.js sẽ lắng nghe, nằm trong máy vps, không phải port mở ra ngoài
# Install Nginx: nhận request ở port 80 (http) hoặc 443 (https), chuyển tiếp request đến ứng dụng Node.js ở port 5001
# Nginx là một máy chủ web, có thể được sử dụng như một reverse proxy, load balancer, HTTP cache
sudo apt install nginx
sudo systemctl start nginx
sudo systemctl enable nginx

# Install PM2
sudo npm install -g pm2
# pm2 là một công cụ quản lý ứng dụng Node.js
# -g để cài đặt toàn cục
```

## Cấu hình Git
```bash
# Cấu hình Git
git config --global user.name "Bao Nguyen" # cấu hình tên người dùng
git config --global user.email "bao@gmail.com"
```

## 3. Cấu hình GitHub SSH
```bash
# Generate SSH key
ssh-keygen -t rsa -b 4096 # tạo key SSH với mã hóa RSA 4096-bit
cat ~/.ssh/id_rsa.pub # dấu ~ là đường dẫn tới thư mục home
# cat để hiển thị nội dung file

# Add SSH key to GitHub account
# Copy key vào GitHub SSH keys setting

# Test SSH connection github: ssh -T git@github.com
```

## 4. Deploy ứng dụng
```bash
# Clone repository
git clone your_repo_ssh_url
cd your_project

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env # tạo file .env từ file .env.example
nano .env # chỉnh sửa file .env

# Start application with PM2
pm2 start npm --name "app" -- start
pm2 startup
pm2 save

pm2 list
pm2 stop app
pm2 restart app
pm2 delete app
```

## 5. Cấu hình Nginx
```bash
# Kiểm tra port đang mở
sudo netstat -tuln # hiển thị thông tin về các port đang mở
# netstat là công cụ để hiển thị thông tin về network, -t để hiển thị thông tin về TCP, -u để hiển thị thông tin về UDP, -l để hiển thị thông tin về listening, -n để hiển thị thông tin về port number
# Nếu có port 80 đang chiếm, bạn có thể dừng dịch vụ đang chiếm port đó
# Kiểm tra ứng dụng đang chiếm port 80
sudo lsof -i :80 # hiển thị thông tin về ứng dụng đang chiếm port 80
# Ví dụ server Apache
sudo systemctl stop apache2 # dừng dịch vụ Apache
sudo systemctl disable apache2 # không cho Apache khởi động cùng hệ thống

# Tạo file cấu hình cho ứng dụng
sudo nano /etc/nginx/sites-available/minimalistapp.click # tạo file cấu hình cho domain của bạn
sudo ln -s /etc/nginx/sites-available/minimalistapp.click /etc/nginx/sites-enabled/minimalistapp.click # tạo symbolic link, là một liên kết tới file gốc
sudo nginx -t # kiểm tra cấu hình
sudo systemctl restart nginx # khởi động lại Nginx

```


```nginx
server {
    listen 80; # cổng mà Nginx lắng nghe
    server_name your_domain.com; # tên miền của bạn

    location / { # cấu hình cho root path
        proxy_pass http://localhost:3000; # chuyển hướng request đến ứng dụng Node.js
        proxy_http_version 1.1; # cấu hình HTTP version để hỗ trợ WebSockets
        proxy_set_header Upgrade $http_upgrade; # cấu hình cho WebSockets
        proxy_set_header Connection 'upgrade'; # cấu hình cho WebSockets
        proxy_set_header Host $host; # cấu hình cho Host, chuyển giá trị host từ request đến ứng dụng, giúp ứng dụng nhận biết domain của request
        proxy_cache_bypass $http_upgrade; # cấu hình cho cache, bỏ qua cache khi có yêu cầu upgrade, giúp hỗ trợ WebSockets
    }
}
```

```bash
# Cấu hình firewall
sudo ufw allow 'Nginx Full' # cho phép truy cập vào Nginx
sudo ufw allow 'OpenSSH' # cho phép truy cập vào SSH
sudo ufw enable # bật firewall
sudo ufw status # kiểm tra trạng thái firewall

# Cấu hình domain
# Thêm domain vào file hosts để test trên máy local
sudo nano /etc/hosts
# Thêm dòng sau vào file
your_server_ip your_domain.com

# Kiểm tra domain
ping your_domain.com

# Kiểm tra trên trình duyệt
http://your_domain.com

# Cấu hình domain
# Đăng ký domain
# Thêm domain vào DNS
# Cấu hình domain trỏ về IP của server
# DNS Propagation: thời gian cần thiết để cập nhật thông tin DNS trên toàn thế giới, check tại https://www.whatsmydns.net/
# Bảng ghi A: bảng ghi dùng để ánh xạ domain về địa chỉ IP
# Bảng ghi CNAME: bảng ghi dùng để ánh xạ domain về domain khác
# Bảng ghi MX: bảng ghi dùng để ánh xạ domain về mail server
# Bảng ghi TXT: bảng ghi dùng để lưu trữ thông tin về domain
# Bảng ghi SRV: bảng ghi dùng để lưu trữ thông tin về dịch vụ
# Bảng ghi NS: bảng ghi dùng để lưu trữ thông tin về name server
# Bảng ghi SOA: bảng ghi dùng để lưu trữ thông tin về zone

# Nếu có sub domain
server {
    listen 80;
    server_name sub.your_domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

# Nếu có thư mục tĩnh, và muốn cache
server {
    listen 80;
    server_name your_domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    location /static/ {
        alias /path/to/static/files/; # đường dẫn tới thư mục tĩnh
        # alias là chỉ định đường dẫn tới thư mục tĩnh, có thể là đường dẫn tuyệt đối hoặc tương đối, ví dụ: /home/user/your_username/project/static
        expires 30d; # thời gian cache
    }
}
# Nếu có thư mục tĩnh, và không muốn cache
server {
    listen 80;
    server_name shopee.minimalistapp.click 103.82.192.85;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    location /static/ {
        alias /path/to/static/files/; # đường dẫn tới thư mục tĩnh
        expires off; # không cache
    }
}

# Cấp quyền cho nginx đọc thư mục tĩnh
sudo chown -R www-data:www-data /root/static # cấp quyền cho nginx đọc thư mục tĩnh
# www-data là user và group của nginx
# -R là tùy chọn để cấp quyền cho tất cả các file và thư mục con trong thư mục tĩnh

```


## 6. Cấu hình HTTPS với Let's Encrypt
### SSL Certificate: chứng chỉ SSL miễn phí

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d shopee.minimalistapp.click

# Auto-renew certificate
sudo systemctl status certbot.timer
```

## 7. Monitoring
```bash
# Check PM2 status
pm2 status
pm2 logs

# Check Nginx status
sudo systemctl status nginx

# Monitor resources
# cài đặt htop
sudo apt install htop
htop # hiển thị thông tin về CPU, RAM, ...

# Monitor disk usage
df -h
# df là công cụ để hiển thị thông tin về disk, -h để hiển thị thông tin dưới dạng human-readable


# Monitor network
iftop
# iftop là công cụ để hiển thị thông tin về traffic mạng

# Monitor logs
tail -f /var/log/nginx/access.log # theo dõi log truy cập của Nginx
tail -f /var/log/nginx/error.log # theo dõi log lỗi của Nginx
tail -f /var/log/mysql/error.log # theo dõi log lỗi của MySQL
tail -f /var/log/mongodb/mongod.log # theo dõi log lỗi của MongoDB
tail -f /var/log/redis/redis-server.log # theo dõi log lỗi của Redis
tail -f /var/log/syslog # theo dõi log hệ thống
tail -f /var/log/auth.log # theo dõi log xác thực
tail -f /var/log/kern.log # theo dõi log kernel
tail -f /var/log/dmesg # theo dõi log kernel ring buffer
tail -f /var/log/pm2.log # theo dõi log của PM2
tail -f /var/log/pm2-error.log # theo dõi log lỗi của PM2
tail -f /var/log/your_project.log # theo dõi log của ứng dụng

# tail là công cụ để hiển thị nội dung cuối cùng của file, -f để theo dõi file

# Monitor processes
top
# top là công cụ để hiển thị thông tin về các process, CPU, RAM, ...


# Monitor users
w
# w là công cụ để hiển thị thông tin về user đang đăng nhập, thời gian hoạt động, ...

# Monitor ports
netstat -tuln
# netstat là công cụ để hiển thị thông tin về network, -t để hiển thị thông tin về TCP, -u để hiển thị thông tin về UDP, -l để hiển thị thông tin về listening, -n để hiển thị thông tin về port number

# Monitor firewall
sudo ufw status
# ufw là công cụ để quản lý firewall, status để hiển thị trạng thái firewall

# Monitor system
sudo apt install sysstat
sar -u 1 3
# sar là công cụ để hiển thị thông tin về CPU, RAM, disk, network, -u để hiển thị thông tin về CPU, 1 để hiển thị mỗi giây, 3 để hiển thị 3 lần

# Monitor security
sudo apt install fail2ban
sudo systemctl start fail2ban
sudo systemctl enable fail2ban
sudo systemctl status fail2ban
# fail2ban là công cụ để bảo vệ server khỏi tấn công brute-force

# Monitor updates
sudo apt install unattended-upgrades
sudo dpkg-reconfigure --priority=low unattended-upgrades
# unattended-upgrades là công cụ để tự động cài đặt các gói cập nhật

# Monitor backups
sudo apt install rsync
# rsync là công cụ để sao lưu và đồng bộ dữ liệu


# Monitor performance
sudo apt install sysbench
sysbench --test=cpu --cpu-max-prime=20000 run
sysbench --test=memory --memory-block-size=1M --memory-total-size=10G run
sysbench --test=fileio --file-total-size=10G prepare
sysbench --test=fileio --file-total-size=10G --file-test-mode=rndrw run
sysbench --test=threads --num-threads=64 run
# sysbench là công cụ để kiểm tra hiệu suất hệ thống, --test để chọn loại test, --cpu-max-prime để chọn giá trị max prime, --memory-block-size để chọn kích thước block, --memory-total-size để chọn kích thước memory, --file-total-size để chọn kích thước file, --file-test-mode để chọn chế độ test, --num-threads để chọn số lượng threads
```

## 8. Backup
```bash
# Backup database
sudo mysqldump -u root -p your_database > your_database.sql
# mysqldump là công cụ sao lưu và phục hồi cơ sở dữ liệu MySQL
# -u để chỉ định user, -p để yêu cầu nhập password

# Backup files
tar -czvf your_project.tar.gz your_project
# tar là công cụ nén và giải nén file
# -c để tạo file mới, -z để sử dụng gzip, -v để hiển thị quá trình, -f để chỉ định tên file
```

## 9. Restore
```bash
# Restore database
sudo mysql -u root -p your_database < your_database.sql

# Restore files
tar -xzvf your_project.tar.gz
```

## 10. Tối ưu hóa
```bash
# Tối ưu hóa MySQL
sudo nano /etc/mysql/my.cnf
# Thay đổi các thông số sau
[mysqld]
innodb_buffer_pool_size = 1G # kích thước buffer pool
innodb_log_file_size = 256M # kích thước log file
innodb_flush_log_at_trx_commit = 2 # chế độ flush log
innodb_flush_method = O_DIRECT # chế độ flush
innodb_file_per_table = 1 # chế độ file per table
innodb_flush_neighbors = 0 # chế độ flush neighbors
innodb_io_capacity = 1000 # khả năng I/O
innodb_io_capacity_max = 2000 # khả năng I/O max
innodb_read_io_threads = 4 # số lượng thread đọc
innodb_write_io_threads = 4 # số lượng thread ghi
innodb_purge_threads = 4 # số lượng thread purge
innodb_thread_concurrency = 8 # số lượng thread đồng thời
innodb_flush_neighbors = 0 # chế độ flush neighbors
innodb_flush_log_at_timeout = 1 # thời gian flush log


# Tối ưu hóa MongoDB
sudo nano /etc/mongod.conf
# Thay đổi các thông số sau
storage:
  dbPath: /var/lib/mongodb
  journal:
    enabled: true
  engine: wiredTiger
  wiredTiger:
    engineConfig:
      cacheSizeGB: 1 # kích thước cache
    collectionConfig:
      blockCompressor: snappy # chế độ nén
    indexConfig:
      prefixCompression: true # chế độ nén prefix
    compression: snappy # chế độ nén
    cacheSizeGB: 1 # kích thước cache
    journalCompressor: snappy # chế độ nén journal
    journal:
      enabled: true # kích hoạt journal

# Tối ưu hóa Redis
sudo nano /etc/redis/redis.conf
# Thay đổi các thông số sau
maxmemory 1gb # kích thước bộ nhớ tối đa
maxmemory-policy allkeys-lru # chính sách bộ nhớ
maxmemory-samples 5 # số lượng mẫu
hash-max-ziplist-entries 512 # số lượng mục tối đa trong ziplist
hash-max-ziplist-value 64 # kích thước tối đa của ziplist
list-max-ziplist-entries 512 # số lượng mục tối đa trong ziplist
list-max-ziplist-value 64 # kích thước tối đa của ziplist
set-max-intset-entries 512 # số lượng mục tối đa trong intset
set-max-list-entries 512 # số lượng mục tối đa trong list
set-max-list-value 64 # kích thước tối đa của list
set-max-ziplist-entries 512 # số lượng mục tối đa trong ziplist
set-max-ziplist-value 64 # kích thước tối đa của ziplist

# Tối ưu hóa Nginx
sudo nano /etc/nginx/nginx.conf
# Thay đổi các thông số sau
worker_processes auto; # số lượng worker process
worker_connections 1024; # số lượng kết nối tối đa
keepalive_timeout 65; # thời gian giữ kết nối
client_max_body_size 100M; # kích thước tối đa của body
gzip on; # kích hoạt gzip
gzip_vary on; # kích hoạt gzip vary
gzip_proxied any; # kích hoạt gzip proxied
gzip_comp_level 6; # mức độ nén gzip
gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript; # các loại file nén
gzip_min_length 1000; # kích thước tối thiểu để nén
gzip_buffers 16 8k; # số lượng buffer
gzip_http_version 1.1; # phiên bản http
gzip_disable "msie6"; # tắt gzip cho msie6

# Tối ưu hóa PM2
pm2 set pm2:autodump true # tự động dump
pm2 set pm2:autodump_interval 60 # thời gian dump
pm2 set pm2:autodump_max 10 # số lượng dump tối đa
pm2 set pm2:autodump_path /var/log/pm2 # đường dẫn tới file dump
pm2 set pm2:autodump_size 100M # kích thước dump tối đa


# Không để pm2 sinh file log quá lớn
pm2 set pm2:log_date_format "YYYY-MM-DD HH:mm Z" # định dạng ngày tháng năm
pm2 set pm2:log_file_size 10M # kích thước file log tối đa
pm2 set pm2:log_file_max 10 # số lượng file log tối đa
pm2 set pm2:log_file_path /var/log/pm2 # đường dẫn tới file log