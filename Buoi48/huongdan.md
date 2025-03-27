# Các mô hình phân quyền

1. Phân quyền truyền thống: user và permission
2. Phân quyền RBAC (Role-Based Access Control): user, role, permission
3. Phân quyền ABAC (Attribute-Based Access Control): user, attribute, permission
4. Phân quyền PBAC (Policy-Based Access Control): user, policy, permission
5. Phân quyền ACL (Access Control List): user, resource, permission
6. Phân quyền MAC (Mandatory Access Control): user, policy, permission
7. Phân quyền DAC (Discretionary Access Control): user, permission
8. Phân quyền RB-RBAC (Relationship-Based Role-Based Access Control): user, role, relationship, permission
9. Phân quyền CBAC (Claims-Based Access Control): user, claim, permission
10. Phân quyền PBAC (Predicate-Based Access Control): user, predicate, permission
11. Phân quyền LBAC (Lattice-Based Access Control): user, lattice, permission


1. Phân quyền truyền thống: user và permission
- Ưu điểm: dễ hiểu, dễ triển khai
- Nhược điểm: khó mở rộng, khó quản lý vì số lượng user và permission lớn


2. Phân quyền RBAC (Role-Based Access Control): user, role, permission

Các bảng: user ->  user_role -> role -> role_permission -> permission

```sql
CREATE TABLE User (
    UserID VARCHAR(20) PRIMARY KEY,
    UserName VARCHAR(50) UNIQUE NOT NULL,
    Password VARCHAR(255) NOT NULL,
    Email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Role (
    RoleID INT PRIMARY KEY AUTO_INCREMENT,
    RoleName VARCHAR(50) UNIQUE NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE UserRole (
    UserID VARCHAR(20),
    RoleID INT,
    assigned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (UserID, RoleID),
    FOREIGN KEY (UserID) REFERENCES User(UserID),
    FOREIGN KEY (RoleID) REFERENCES Role(RoleID)
);

CREATE TABLE Permission (
    PermissionID INT PRIMARY KEY AUTO_INCREMENT,
    PermissionName VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE RolePermission (
    RoleID INT,
    PermissionID INT,
    PRIMARY KEY (RoleID, PermissionID),
    FOREIGN KEY (RoleID) REFERENCES Role(RoleID),
    FOREIGN KEY (PermissionID) REFERENCES Permission(PermissionID)
);


-- NGOÀI RA:
-- Bảng Resources: Quản lý các tài nguyên trong hệ thống
CREATE TABLE Resources (
    resource_id INT PRIMARY KEY AUTO_INCREMENT,
    resource_name VARCHAR(100) NOT NULL,
    resource_type VARCHAR(50) NOT NULL,
    description TEXT
);

-- Bảng ResourcePermissions: Ánh xạ quyền với tài nguyên
CREATE TABLE ResourcePermissions (
    role_id INT,
    permission_id INT,
    resource_id INT,
    access_level ENUM('read', 'write', 'delete', 'none') DEFAULT 'none',
    PRIMARY KEY (role_id, permission_id, resource_id),
    FOREIGN KEY (role_id) REFERENCES Roles(role_id),
    FOREIGN KEY (permission_id) REFERENCES Permissions(permission_id),
    FOREIGN KEY (resource_id) REFERENCES Resources(resource_id)
);


INSERT INTO Role (RoleName, description) VALUES 
('admin', 'Quản trị viên hệ thống'),
('editor', 'Người biên tập'),
('viewer', 'Người xem');

INSERT INTO Permission (PermissionName, description) VALUES 
('create_user', 'Quyền tạo người dùng mới'),
('edit_content', 'Quyền chỉnh sửa nội dung'),
('view_content', 'Quyền xem nội dung');

-- Gán quyền cho các vai trò
INSERT INTO RolePermission (RoleID, PermissionID)
SELECT r.RoleID, p.PermissionID
FROM Role r, Permission p
WHERE 
    (r.RoleName = 'admin' AND p.PermissionName IN ('create_user', 'edit_content', 'view_content')) OR
    (r.RoleName = 'editor' AND p.PermissionName IN ('edit_content', 'view_content')) OR
    (r.RoleName = 'viewer' AND p.PermissionName = 'view_content');

```



# verifyAccessToken middleware: authenticate user (xác thực)
# checkPermission middleware: authorize user (phân quyền)