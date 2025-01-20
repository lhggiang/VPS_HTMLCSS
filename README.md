# Môn Kiến trúc phần mềm hướng dịch vụ (25D1INF50902201)

## Exercise 2 - La Hoàng Giang

### Mô tả các kiến thức đã áp dụng 

- **Triển khai các API bằng Swagger**:
  
![image](https://github.com/user-attachments/assets/43a74e97-ce23-45f4-91df-3a9961dacbe6)

- **Sử dụng cơ sở dữ liệu MongoDB**:

![image](https://github.com/user-attachments/assets/17cbacf0-57fc-4264-ba6e-21f495d95de3)

- **Validation và xử lý exception (bổ sung thêm)**:

Custom đối tượng lỗi trả về:

![image](https://github.com/user-attachments/assets/e647681d-7a91-45b8-bd50-546a98b8806f)

Validation các field trong model:
![image](https://github.com/user-attachments/assets/a69cf279-674f-44cc-b59c-1b17c8e94dfb)

Xử lý lỗi từ phần validation trong model:
![image](https://github.com/user-attachments/assets/1d99a22a-0dca-47ed-9ab9-b46e51130278)

Xử lý lỗi tên trùng nhau:
![image](https://github.com/user-attachments/assets/5981965d-34db-49f2-a672-8edf320cbc1f)

- **Kết quả đạt được**:
1. Lấy tất cả sách:
   
![image](https://github.com/user-attachments/assets/698b0789-59a0-4c94-8cd0-53d5cfea2775)

2. Lấy sách theo ID:
   
![image](https://github.com/user-attachments/assets/07d7ba0d-44fd-4d87-a00f-6ecc3d484fc4)

3. Tạo mới sách:
   
- Trường hợp thành công:
![image](https://github.com/user-attachments/assets/5569a925-ea00-4c2d-a4f9-fd8cff8addf8)

- Trường hợp tên sách đã có trong DB:
![image](https://github.com/user-attachments/assets/10832026-4220-4af5-8af2-cf60ab2325c8)

- Trường hợp bỏ trống các fields như name, author, category hay price <= 0
![image](https://github.com/user-attachments/assets/15522218-8b5d-428a-92da-91b8edc8bffd)

4. Cập nhật sách

- Trường hợp thành công:
![image](https://github.com/user-attachments/assets/fdfbd4f1-e2f7-45fe-9aae-4a6b973b2fc2)

- Trường hợp tên sách đã có trong DB:
![image](https://github.com/user-attachments/assets/5260c05a-9081-47b3-92dc-0e058501e34f)

- Trường hợp bỏ trống các fields như name, author, category hay price <= 0
![image](https://github.com/user-attachments/assets/fa08e407-880d-4e27-bf35-e31163647046)

5. Xóa sách theo ID:

![image](https://github.com/user-attachments/assets/c35e32e2-1eb9-40c8-8451-530dd593d488)





