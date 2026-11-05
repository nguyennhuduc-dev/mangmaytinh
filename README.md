# Ôn thi mạng máy tính

Web ôn thi trắc nghiệm môn Mạng máy tính với **333 câu hỏi**, chấm điểm ngay trên trình duyệt. Không cần cài đặt, không cần máy chủ, không cần tài khoản.

**Dùng thử:** https://nguyennhuduc-dev.github.io/mangmaytinh/

## Tính năng

- **333 câu hỏi dạng chữ**, chia theo 7 chương, mỗi câu có các đáp án A, B, C, D.
- **Hai chế độ làm bài:**
  - *Luyện tập*: báo đúng hoặc sai ngay sau mỗi câu.
  - *Thi*: chỉ chấm điểm khi nộp bài.
- **Chọn phạm vi ôn:** chọn một hay nhiều chương, rồi chọn 20, 30, 50, 100 hoặc tất cả số câu. Có tùy chọn trộn thứ tự câu hỏi.
- **Trộn thứ tự đáp án (tùy chọn):** đảo vị trí các đáp án để không nhớ theo vị trí. Những lựa chọn kiểu "Cả 3 ý trên đều đúng" hay "Tất cả đều đúng" luôn giữ nguyên vị trí, và các câu có lựa chọn nhắc đến chữ cái (như "Cả A và B") không bị đảo.
- **Câu chọn nhiều đáp án:** 19 câu cần chọn đủ các đáp án đúng, chọn thiếu hoặc thừa đều tính là sai.
- **Câu có hình minh họa:** 5 câu (sơ đồ mạng, danh sách tài khoản) hiển thị kèm hình.
- **Trang kết quả:** điểm phần trăm, số câu đúng, sai, bỏ trống, kết quả theo từng chương và danh sách xem lại từng câu.
- **Làm lại câu sai:** một nút để làm lại riêng các câu sai và bỏ trống.
- **Phím tắt trên máy tính:** `A` `B` `C` `D` (hoặc `1` đến `4`) để chọn đáp án, `←` `→` để chuyển câu, `Enter` để sang câu sau.
- **Giao diện:** hỗ trợ điện thoại, có chế độ sáng và tối (tự theo thiết bị, có nút đổi tay), tự giảm hiệu ứng nếu thiết bị bật chế độ giảm chuyển động.

## Cấu trúc thư mục

```
.
├── index.html   # Khung trang, nạp các file bên dưới
├── style.css    # Giao diện
├── app.js       # Logic: chọn phạm vi, làm bài, chấm điểm, kết quả
├── data.js      # Dữ liệu 333 câu hỏi và đáp án
└── README.md
```

Bốn file đầu phải nằm **cùng một thư mục**, trong đó `index.html` là trang chính.

## Chạy trên máy

Tải mã nguồn về, giữ nguyên các file trong cùng một thư mục rồi mở `index.html` bằng trình duyệt. Hoặc chạy một máy chủ tĩnh:

```bash
git clone https://github.com/nguyennhuduc-dev/mangmaytinh.git
cd mangmaytinh
python3 -m http.server 8000
```

Sau đó mở http://localhost:8000.

Font chữ (Be Vietnam Pro và Space Grotesk) được tải từ Google Fonts. Khi không có mạng, trang tự dùng font hệ thống và vẫn hoạt động bình thường.

## Cấu trúc dữ liệu

`data.js` khai báo mảng `Q`, mỗi phần tử là một câu hỏi theo thứ tự trong file đề gốc:

```js
{
  n: 26,                                   // số thứ tự câu
  t: "Hệ điều hành nào là hệ điều hành server? (Chọn 2 đáp án)",   // nội dung câu hỏi
  o: ["Microsoft Windows server 2012", "Microsoft Windows 7",
      "Microsoft Windows Vista", "Microsoft Windows server 2008"], // các đáp án A, B, C, D
  k: [0, 3],                               // đáp án đúng (0 là A, 1 là B, ...)
  c: 1                                     // chương
  // f: "data:image/webp;base64,..."       // hình minh họa (chỉ một số câu)
}
```

- `k` có nhiều phần tử thì đó là câu chọn nhiều đáp án.
- Nếu câu hỏi có hình, trường `f` chứa hình dạng base64 và đoạn `[[fig]]` trong `t` đánh dấu vị trí hiện hình.

**Sửa một đáp án:** mở `data.js`, tìm câu cần sửa theo `n`, đổi giá trị `k`, ví dụ `k: [2]` nghĩa là đáp án đúng là C.

## Triển khai lên GitHub Pages

Vì chỉ gồm file tĩnh, web chạy được trên GitHub Pages miễn phí:

1. Đẩy toàn bộ file lên nhánh `main` của repo.
2. Vào **Settings**, chọn **Pages**.
3. Ở mục **Build and deployment**, chọn **Deploy from a branch**, nhánh `main`, thư mục `/ (root)`, rồi bấm **Save**.
4. Sau khoảng một phút, web sẽ chạy tại `https://<tên-tài-khoản>.github.io/<tên-repo>/`.

## Lưu ý về đáp án

Đáp án lấy từ các file chương của giáo viên (dạng `The correct answer is: ...`), chưa đối chiếu lại với kiến thức bên ngoài. Một số đáp án trong bài gốc có thể không trùng với thực tế, ví dụ câu về cơ quan cấp phát địa chỉ IPv6 global unicast, loại địa chỉ chỉ có trong IPv6, địa chỉ broadcast của mạng 150.20.0.0 và ý nghĩa của địa chỉ 127.0.0.1. Nếu bạn ôn để thi theo đúng bài của giáo viên thì dùng như hiện tại, còn muốn đáp án theo kiến thức thực tế thì sửa trong `data.js` như hướng dẫn ở trên.

Việc chia câu hỏi theo 7 chương dựa trên thứ tự các file chương trong đề gốc. Các câu trùng đề được xếp vào chương đứng ngay trước chúng.

## Công nghệ

HTML, CSS và JavaScript thuần, không dùng thư viện hay công cụ build nào.

## Tác giả

[nguyennhuduc-dev](https://github.com/nguyennhuduc-dev)
