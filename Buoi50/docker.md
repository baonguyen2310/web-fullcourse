# Deploy expressjs mysql bằng Docker
# 1. Cài đặt Docker:
# - Cài đặt Docker Desktop cho Windows hoặc Mac
# - Cài đặt Docker Engine cho Linux
# - Cài đặt Docker Compose
# 2. Tạo file docker-compose.yml
# ```yml
# version: '3.8'
# services:
#   app:
#     build:
#       context: .
#       dockerfile: Dockerfile
#     ports:
#       - "3000:3000"
#     volumes:
#       - .:/usr/src/app
#     environment:
#       - NODE_ENV=development
#       - DB_HOST=db
#       - DB_USER=root
#       - DB_PASSWORD=example
#       - DB_NAME=mydb
#   db:
#     image: mysql:5.7
#     ports:
#       - "3306:3306"
#     environment:
#       - MYSQL_ROOT_PASSWORD=example
#       - MYSQL_DATABASE=mydb
#     volumes:
#       - db_data:/var/lib/mysql
# volumes:
#   db_data:
# ```
# 3. Tạo file Dockerfile
# ```dockerfile
# FROM node:14
# WORKDIR /usr/src/app
# COPY package*.json ./
# RUN npm install
# COPY . .
# EXPOSE 3000
# CMD ["npm", "start"]
# ```
# 4. Chạy lệnh sau để build và chạy container
# ```bash
# docker-compose up --build
# ```
# 5. Truy cập ứng dụng tại http://localhost:3000
# 6. Truy cập MySQL tại localhost:3306 với user root và password example
# 7. Truy cập vào container app bằng lệnh sau
# ```bash
# docker exec -it <container_id> /bin/bash
# ```
# 8. Truy cập vào container db bằng lệnh sau
# ```bash
# docker exec -it <container_id> /bin/bash
# ```
# 9. Dừng và xóa container
# ```bash
# docker-compose down
# ```
# 10. Xóa image
# ```bash
# docker rmi <image_id>
# ```
# 11. Xóa volume
# ```bash
# docker volume rm <volume_name>
# ```
# 12. Xóa network
# ```bash
# docker network rm <network_name>
# ```

