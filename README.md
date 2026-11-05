# 🌐 Ôn Thi Mạng Máy Tính

<p align="center">
  <img src="https://img.shields.io/badge/Project-Computer%20Networking-2563eb?style=for-the-badge&logo=protonvpn&logoColor=white" alt="Computer Networking Project">
  <img src="https://img.shields.io/badge/Questions-333-16a34a?style=for-the-badge" alt="333 questions">
  <img src="https://img.shields.io/badge/Chapters-7-f59e0b?style=for-the-badge" alt="7 chapters">
  <img src="https://img.shields.io/badge/HTML-CSS-JavaScript-ea580c?style=for-the-badge&logo=javascript&logoColor=white" alt="HTML CSS JavaScript">
</p>

<p align="center">
  <strong>Website trắc nghiệm giúp ôn tập kiến thức Mạng máy tính một cách trực quan, linh hoạt và hiệu quả.</strong>
  <br>
  Chọn chương cần học, tùy chỉnh số lượng câu hỏi, làm bài và xem kết quả ngay sau khi hoàn thành.
</p>

<p align="center">
  <a href="https://nguyennhuduc-dev.github.io/mangmaytinh/"><strong>🚀 Mở website</strong></a>
  ·
  <a href="https://github.com/nguyennhuduc-dev/mangmaytinh"><strong>📁 Mã nguồn</strong></a>
</p>

---

## 📌 Giới thiệu

**Ôn Thi Mạng Máy Tính** là một website trắc nghiệm được xây dựng bằng HTML, CSS và JavaScript thuần. Dự án hỗ trợ người học luyện tập kiến thức thông qua ngân hàng **333 câu hỏi thuộc 7 chương**.

Giao diện được thiết kế theo hướng tối giản, dễ sử dụng trên máy tính và điện thoại. Người học có thể chủ động chọn phạm vi ôn tập, làm từng câu hỏi, theo dõi tiến độ và xem lại những câu chưa trả lời hoặc làm chưa chính xác.

## ✨ Tính năng nổi bật

| Tính năng | Mô tả |
|---|---|
| 📚 Ngân hàng câu hỏi | 333 câu hỏi được phân chia theo 7 chương |
| 🎯 Tùy chọn số câu | 20, 30, 50, 100 câu hoặc toàn bộ câu hỏi |
| 🧩 Lọc theo chương | Chọn một hoặc nhiều chương muốn ôn tập |
| 🔀 Trộn câu hỏi | Xáo trộn thứ tự câu hỏi trước khi bắt đầu |
| 📖 Chế độ luyện tập | Nhận phản hồi đúng/sai ngay khi chọn đáp án |
| 📝 Chế độ thi | Hoàn thành bài làm rồi mới xem kết quả |
| ☑️ Câu nhiều đáp án | Hỗ trợ câu hỏi có nhiều lựa chọn đúng |
| 📊 Thống kê kết quả | Hiển thị số câu đúng, sai, bỏ trống và kết quả theo chương |
| 🔁 Ôn tập câu sai | Làm lại những câu trả lời sai hoặc chưa hoàn thành |
| 🌗 Giao diện sáng/tối | Chuyển đổi giao diện và lưu lựa chọn trên trình duyệt |
| ⌨️ Phím tắt | Dùng A–F để chọn đáp án, phím mũi tên để chuyển câu |

## 🖥️ Giao diện

Website có các màn hình chính:

1. **Trang bắt đầu:** thiết lập số lượng câu, chế độ làm bài và chương học.
2. **Màn hình làm bài:** hiển thị câu hỏi, lựa chọn đáp án, tiến độ và danh sách câu.
3. **Màn hình kết quả:** tổng hợp điểm, thống kê theo chương và cho phép xem lại từng câu.

## 🛠️ Công nghệ sử dụng

- **HTML5:** xây dựng cấu trúc trang web.
- **CSS3:** thiết kế giao diện, hiệu ứng chuyển động và khả năng hiển thị trên nhiều kích thước màn hình.
- **JavaScript (Vanilla JS):** xử lý câu hỏi, đáp án, chấm điểm và tương tác.
- **LocalStorage:** lưu lựa chọn giao diện sáng/tối trên trình duyệt.

> Dự án không yêu cầu framework, thư viện JavaScript bên ngoài hoặc cơ sở dữ liệu để chạy các chức năng hiện tại.

## 📂 Cấu trúc dự án

```text
mangmaytinh/
├── index.html      # Trang HTML chính
├── style.css       # Giao diện và responsive
├── app.js          # Logic làm bài, chấm điểm và thống kê
├── data.js         # Ngân hàng 333 câu hỏi và đáp án
└── README.md       # Tài liệu giới thiệu dự án
```

## 🚀 Cách chạy dự án

### Cách 1: Sử dụng trực tiếp

1. Clone repository về máy:

   ```bash
   git clone https://github.com/nguyennhuduc-dev/mangmaytinh.git
   ```

2. Mở thư mục dự án:

   ```bash
   cd mangmaytinh
   ```

3. Mở file `index.html` bằng trình duyệt (Chrome, Edge hoặc Firefox).

### Cách 2: Sử dụng VS Code

1. Mở thư mục dự án bằng Visual Studio Code.
2. Mở file `index.html`.
3. Chạy bằng tiện ích Live Server nếu đã cài đặt, hoặc mở trực tiếp file bằng trình duyệt.

Không cần chạy lệnh `npm install` hay cài đặt môi trường backend.

## 🎮 Hướng dẫn sử dụng

1. Mở website và chọn số lượng câu hỏi muốn làm.
2. Chọn **Luyện tập** hoặc **Thi**.
3. Chọn chương cần ôn tập. Có thể chọn nhiều chương cùng lúc.
4. Bật hoặc tắt tùy chọn trộn câu hỏi.
5. Nhấn **Bắt đầu làm bài**.
6. Chọn đáp án; với câu nhiều đáp án, hãy chọn đầy đủ các phương án rồi nhấn **Chốt đáp án** trong chế độ luyện tập.
7. Sử dụng nút **Trước/Sau** hoặc danh sách câu hỏi để di chuyển.
8. Nhấn **Nộp bài** để xem kết quả và phần thống kê.
9. Chọn **Làm lại câu sai và bỏ trống** để tiếp tục ôn tập.

### Phím tắt

| Phím | Chức năng |
|---|---|
| `A` – `F` | Chọn đáp án tương ứng |
| `←` | Quay lại câu trước |
| `→` | Chuyển đến câu tiếp theo |

## ⚙️ Tùy chỉnh ngân hàng câu hỏi

Dữ liệu câu hỏi được lưu trong file `data.js` dưới dạng mảng JavaScript `Q`.

Mỗi câu hỏi có cấu trúc cơ bản như sau:

```javascript
{
  n: 1,                              // Số thứ tự câu hỏi
  t: "Nội dung câu hỏi?",            // Nội dung câu hỏi
  o: [                               // Danh sách lựa chọn
    "Phương án A",
    "Phương án B",
    "Phương án C",
    "Phương án D"
  ],
  k: [0],                            // Đáp án đúng (đếm từ 0)
  c: 1                               // Chương
}
```

**Lưu ý:**
- `k: [0]` nghĩa là đáp án A đúng.
- `k: [1, 2]` nghĩa là đáp án B và C đúng.
- `c` xác định chương chứa câu hỏi.
- Có thể thêm thuộc tính `f` để gắn hình minh họa cho câu hỏi.
- Cần bảo đảm dữ liệu có đúng định dạng để website xử lý chính xác.

## 🗺️ Định hướng phát triển

Một số tính năng có thể được bổ sung trong các phiên bản tiếp theo:

- [ ] Tìm kiếm câu hỏi theo từ khóa.
- [ ] Lọc câu hỏi theo mức độ khó.
- [ ] Lưu lịch sử các lần làm bài.
- [ ] Tạo đề thi theo cấu hình nâng cao.
- [ ] Bổ sung giải thích chi tiết cho từng đáp án.
- [ ] Xây dựng trang quản lý và cập nhật ngân hàng câu hỏi.

## ⚠️ Lưu ý

- Đây là công cụ hỗ trợ ôn tập, không thay thế giáo trình hoặc tài liệu chính thức của môn học.
- Người học nên đối chiếu những nội dung chưa chắc chắn với tài liệu giảng dạy.
- Điểm số được tính dựa trên đáp án được khai báo trong `data.js`; chất lượng kết quả phụ thuộc vào độ chính xác của dữ liệu này.
- Giao diện và tiến độ làm bài hiện được xử lý phía trình duyệt; dự án chưa có hệ thống tài khoản hoặc đồng bộ dữ liệu giữa các thiết bị.

## 👨‍💻 Tác giả

**Nguyễn Như Đức**

- GitHub: [@nguyennhuduc-dev](https://github.com/nguyennhuduc-dev)
- Repository: [mangmaytinh](https://github.com/nguyennhuduc-dev/mangmaytinh)

---

<p align="center">
  Made with ❤️ for learning Computer Networking
  <br>
  <sub>© 2026 — Ôn Thi Mạng Máy Tính</sub>
</p>
