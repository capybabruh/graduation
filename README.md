# 🎓 Tùng's Graduation Party – Thiệp mời tốt nghiệp cá nhân hoá

Website thiệp mời React + Vite + TypeScript + Tailwind CSS v4 + Framer Motion.
Mỗi người bạn có **một đường link riêng** (`/invite/friend-001`) hiển thị đúng **tên, avatar và lời nhắn** của họ.

## Chạy project

```bash
npm install
npm run dev        # http://localhost:5173  (trang chủ ở chế độ dev liệt kê link của từng khách)
npm run build      # kiểm tra kiểu TypeScript + build ra thư mục dist/
npm run preview    # xem thử bản build
```

## Thông tin sự kiện

Mở `src/data/event.ts` và sửa:

| Trường | Ý nghĩa |
| --- | --- |
| `startsAt` | Ngày giờ thật, ISO 8601, hiện là `2026-11-29T10:30:00+07:00` (dùng cho đếm ngược và Google Calendar) |
| `locationName`, `locationAddress` | Hội trường / địa chỉ thật (dùng cho nút View Location) |
| `mapUrl` | (Tuỳ chọn) link Google Maps cụ thể |
| `isPlaceholder` | Đổi thành `false` khi đã điền xong để tắt banner nhắc ở chế độ dev |

Đã đặt: 29/11/2026, 10:30, University of Science - VNUHCM, 227 Nguyễn Văn Cừ, Quận 5.

## Quản lý khách mời và avatar

Tất cả nằm ở `src/data/guests.ts`, tách biệt hoàn toàn với giao diện.

```ts
{
  id: 'friend-006',                              // dùng trong URL: /invite/friend-006
  name: 'Nguyễn Văn B',
  avatar: '/images/friends/friend-006.jpg',      // file nằm trong public/images/friends/
  invitation_message: 'Lời nhắn riêng cho bạn này!',
  rsvp_status: 'pending',                        // pending | yes | no
}
```

- **Thêm:** bỏ ảnh vào `public/images/friends/`, thêm một object vào mảng `guests`.
- **Thay ảnh:** ghi đè file ảnh (giữ nguyên tên) hoặc đổi `avatar`.
- **Xoá:** xoá object (và file ảnh nếu muốn). Link của người đó sẽ hiện trang Not Found thân thiện.
- Hỗ trợ **JPG, PNG, WEBP**. Ảnh luôn `object-fit: cover` nên không méo; ảnh lỗi/thiếu sẽ tự chuyển sang avatar mặc định. `friend-005` cố ý trỏ tới file không tồn tại để bạn thấy điều này.
- ID không phân biệt hoa thường. Ảnh mẫu hiện tại chỉ là hình minh hoạ, hãy thay bằng ảnh thật.

Link gửi cho bạn bè: `https://<domain-của-bạn>/invite/<id>`

## Ảnh kỷ niệm (Polaroid)

Sửa `src/data/gallery.ts`, bỏ ảnh vào `public/images/gallery/`. Thêm bao nhiêu ảnh cũng được. Click để xem lớn, dùng phím ← → để chuyển ảnh, `Esc` để đóng.

## RSVP hoạt động thế nào

Website là **frontend tĩnh**, không có backend, nên mặc định câu trả lời chỉ được lưu trong trình duyệt của người đó (`localStorage`); **bạn sẽ không nhận được câu trả lời**.
Để nhận câu trả lời, đặt `VITE_RSVP_ENDPOINT` (xem `.env.example`) trỏ tới một URL nhận POST, ví dụ Google Apps Script ghi vào Google Sheet, Formspree hoặc webhook. Mỗi lần bấm RSVP sẽ gửi JSON:

```json
{ "id": "friend-001", "name": "Nguyễn Văn A", "status": "yes", "at": "2026-11-25T03:00:00.000Z" }
```

## Deploy

Đây là SPA nên server phải trả `index.html` cho mọi đường dẫn (để `/invite/...` hoạt động khi truy cập trực tiếp). Project đã kèm sẵn cấu hình:

- **Netlify:** kéo thả thư mục `dist/` hoặc kết nối repo (build command `npm run build`, publish directory `dist`). File `public/_redirects` đã lo phần rewrite.
- **Vercel:** import repo; `vercel.json` đã có rewrite.
- **Cloudflare Pages:** build command `npm run build`, output `dist`. File `_redirects` được hỗ trợ.
- **GitHub Pages:** không hỗ trợ rewrite SPA, nên cách đơn giản nhất là dùng Netlify, Vercel hoặc Cloudflare Pages. Nếu bắt buộc dùng GitHub Pages, bạn cần đổi sang `HashRouter` hoặc thêm trang `404.html` chuyển hướng.
- Nếu deploy vào sub-path, đặt `VITE_BASE=/ten-repo/` trước khi build.

## Cấu trúc

```
src/
├── components/   Hero, InvitationCard, EventDetails, Countdown, PhotoGallery, RSVP,
│                 Confetti, Avatar, Decor (sticker SVG), NavPills, SectionTitle, Footer
├── data/         guests.ts, event.ts, gallery.ts, types.ts
├── lib/          utils.ts (ngày giờ, link Calendar/Maps), rsvp.ts
├── pages/        InvitationPage.tsx, NotFound.tsx, Home.tsx
├── App.tsx       routes
└── main.tsx
public/images/    friends/ (avatar), gallery/ (ảnh kỷ niệm)
```

## Hiệu năng và trợ năng

- Sticker là SVG inline; ảnh gallery dùng lazy-load; font tự host (Baloo 2 + Nunito, có tiếng Việt) và tải theo subset.
- Animation chỉ dùng `transform`/`opacity`; đồng hồ đếm ngược chỉ re-render 1 lần/giây.
- Người dùng bật "giảm chuyển động" sẽ không thấy confetti và animation dài.
