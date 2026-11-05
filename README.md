# 🌐 Mạng máy tính — Online Quiz

<p align="center">
  <img src="https://img.shields.io/badge/Computer%20Networking-Online%20Quiz-2563eb?style=for-the-badge&logo=cisco&logoColor=white" alt="Computer Networking Online Quiz">
  <img src="https://img.shields.io/badge/Questions-333-16a34a?style=for-the-badge" alt="333 questions">
  <img src="https://img.shields.io/badge/Chapters-7-f59e0b?style=for-the-badge" alt="7 chapters">
  <img src="https://img.shields.io/badge/Status-Active-22c55e?style=for-the-badge" alt="Active project">
</p>

<p align="center">
  <strong>Website ôn tập và kiểm tra kiến thức môn Mạng máy tính.</strong><br>
  Luyện tập linh hoạt · Kiểm tra nhanh chóng · Theo dõi kết quả
</p>

<p align="center">
  <a href="https://nguyennhuduc-dev.github.io/mangmaytinh/">
    <img src="https://img.shields.io/badge/🚀_TRẢI_NGHIỆM_WEBSITE-2f6fed?style=for-the-badge" alt="Trải nghiệm website">
  </a>
  <a href="https://github.com/nguyennhuduc-dev/mangmaytinh">
    <img src="https://img.shields.io/badge/SOURCE_CODE-181717?style=for-the-badge&logo=github" alt="Source code">
  </a>
</p>

---

## 📌 Giới thiệu

**Mạng máy tính — Online Quiz** là website hỗ trợ học tập và ôn thi môn Mạng máy tính thông qua hình thức trắc nghiệm trực tuyến.

Dự án giúp người học chủ động lựa chọn nội dung ôn tập, thực hành theo từng chương, kiểm tra kiến thức và xem lại những câu trả lời chưa chính xác.

Website được xây dựng bằng **HTML, CSS và JavaScript thuần**, không cần backend, không yêu cầu cài đặt thư viện và có thể triển khai miễn phí trên GitHub Pages.

## ✨ Tính năng

| Tính năng | Mô tả |
|---|---|
| 📚 Ngân hàng câu hỏi | 333 câu hỏi được chia thành 7 chương |
| 📖 Luyện tập | Hiển thị kết quả đúng/sai ngay sau khi trả lời |
| 📝 Chế độ thi | Chấm điểm sau khi hoàn thành và nộp bài |
| 🎯 Tùy chỉnh đề | Chọn 20, 30, 50, 100 hoặc toàn bộ câu hỏi |
| 🗂️ Chọn chương | Ôn tập một hoặc nhiều chương tùy ý |
| 🔀 Trộn câu hỏi | Ngẫu nhiên thứ tự câu hỏi trong bài |
| 🔤 Trộn đáp án | Đảo vị trí lựa chọn, có xử lý các đáp án phụ thuộc thứ tự |
| ☑️ Câu nhiều đáp án | Hỗ trợ câu hỏi có nhiều lựa chọn đúng |
| 🖼️ Hình minh họa | Hiển thị hình ảnh đi kèm câu hỏi |
| 📊 Thống kê | Xem số câu đúng, sai, bỏ trống và kết quả theo chương |
| 🔁 Ôn câu sai | Làm lại các câu sai và câu chưa trả lời |
| 🌗 Giao diện | Hỗ trợ Light Mode, Dark Mode và thiết bị di động |
| ⌨️ Phím tắt | Hỗ trợ thao tác nhanh trên máy tính |

### Chế độ làm bài

- **Luyện tập:** hệ thống phản hồi ngay sau khi chọn đáp án. Với câu hỏi nhiều lựa chọn, người học chốt đáp án trước khi xem kết quả.
- **Thi:** người học hoàn thành bài làm và chỉ xem kết quả sau khi nộp bài.

### Phím tắt

| Phím | Chức năng |
|---|---|
| `A`, `B`, `C`, `D` | Chọn đáp án |
| `1`, `2`, `3`, `4` | Chọn đáp án |
| `←` | Câu trước |
| `→` | Câu tiếp theo |
| `Enter` | Chuyển sang câu tiếp theo |

## 🖥️ Công nghệ sử dụng

<p>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/GitHub%20Pages-222222?style=flat-square&logo=githubpages&logoColor=white" alt="GitHub Pages">
</p>

| Công nghệ | Vai trò |
|---|---|
| HTML5 | Xây dựng cấu trúc trang |
| CSS3 | Thiết kế giao diện, hiệu ứng và responsive |
| JavaScript | Xử lý câu hỏi, bài làm và chấm điểm |
| Google Fonts | Cung cấp font Be Vietnam Pro và Space Grotesk |
| GitHub Pages | Triển khai website tĩnh |

**Không sử dụng framework hoặc thư viện JavaScript bên ngoài.** Dự án không cần quy trình build.

## 📂 Cấu trúc thư mục

```text
mangmaytinh/
├── index.html   # Trang HTML chính
├── style.css    # Giao diện và hiệu ứng
├── app.js       # Logic ứng dụng và xử lý bài làm
├── data.js      # Ngân hàng câu hỏi, đáp án và hình ảnh
└── README.md    # Tài liệu dự án
```

Bốn file `index.html`, `style.css`, `app.js` và `data.js` cần được giữ cùng thư mục để website hoạt động đúng.

## 🚀 Cài đặt và chạy trên máy

### 1. Clone repository

```bash
git clone https://github.com/nguyennhuduc-dev/mangmaytinh.git
```

### 2. Di chuyển vào thư mục dự án

```bash
cd mangmaytinh
```

### 3. Khởi chạy

**Cách đơn giản:** mở file `index.html` bằng trình duyệt.

**Hoặc sử dụng Python HTTP Server:**

```bash
python -m http.server 8000
```

Mở trình duyệt và truy cập:

```text
http://localhost:8000
```

> Không cần cài đặt package hay thư viện bổ sung. Google Fonts cần Internet để tải font; website vẫn có font hệ thống dự phòng.

## 🧩 Cấu trúc dữ liệu câu hỏi

Ngân hàng câu hỏi được khai báo trong file `data.js` thông qua mảng `Q`.

Ví dụ:

```javascript
{
    n: 1,
    t: "Mạng máy tính bao gồm những gì?",
    o: [
        "Phần cứng, phần mềm",
        "Phần cứng, phần mềm, các giao thức",
        "Các giao thức",
        "Phần mềm, các giao thức"
    ],
    k: [1],
    c: 1
}
```

| Thuộc tính | Ý nghĩa |
|---|---|
| `n` | Số thứ tự câu hỏi |
| `t` | Nội dung câu hỏi |
| `o` | Danh sách các lựa chọn |
| `k` | Chỉ số đáp án đúng, bắt đầu từ 0 |
| `c` | Chương của câu hỏi |
| `f` | Hình ảnh minh họa dạng data URI (nếu có) |

**Quy ước đáp án:** `0 = A`, `1 = B`, `2 = C`, `3 = D`. Nếu `k` chứa nhiều chỉ số, câu hỏi có nhiều đáp án đúng.

## 🌍 Triển khai trên GitHub Pages

1. Đẩy mã nguồn lên nhánh `main` của repository.
2. Mở **Settings → Pages**.
3. Trong **Build and deployment**, chọn **Deploy from a branch**.
4. Chọn branch `main` và thư mục `/(root)`.
5. Nhấn **Save** và chờ GitHub Pages triển khai.

Website chính thức:

**https://nguyennhuduc-dev.github.io/mangmaytinh/**

## ⚠️ Lưu ý về nội dung

- Bộ câu hỏi và đáp án được tổng hợp từ tài liệu học tập ban đầu.
- Đáp án chưa được kiểm chứng độc lập toàn bộ theo các tài liệu chuyên ngành.
- Một số câu có thể phản ánh đáp án trong tài liệu gốc, không nhất thiết hoàn toàn trùng với cách diễn giải hoặc tiêu chuẩn hiện hành.
- Nếu phát hiện câu hỏi hoặc đáp án chưa chính xác, có thể kiểm tra và chỉnh sửa dữ liệu tương ứng trong `data.js`.

## 🛠️ Định hướng phát triển

- [ ] Lưu lịch sử các lần làm bài.
- [ ] Đánh dấu câu hỏi yêu thích.
- [ ] Tìm kiếm câu hỏi theo từ khóa.
- [ ] Lọc câu hỏi theo mức độ khó.
- [ ] Theo dõi tiến độ học tập qua nhiều lần kiểm tra.
- [ ] Mở rộng ngân hàng câu hỏi cho các môn học khác.

## 👨‍💻 Tác giả

**Nguyễn Như Đức**

- GitHub: [@nguyennhuduc-dev](https://github.com/nguyennhuduc-dev)
- Repository: [mangmaytinh](https://github.com/nguyennhuduc-dev/mangmaytinh)
- Website: [Ôn thi Mạng máy tính](https://nguyennhuduc-dev.github.io/mangmaytinh/)

---

<p align="center">
  <strong>🌐 COMPUTER NETWORKING — ONLINE QUIZ</strong><br>
  <em>Learn smarter. Practice better. Improve every day.</em><br><br>
  ⭐ Nếu dự án hữu ích, hãy để lại một Star trên GitHub nhé!
</p>
