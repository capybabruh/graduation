import type { Guest } from './types'

/**
 * DANH SÁCH KHÁCH MỜI
 * ------------------
 * Thêm khách: thêm 1 object mới, bỏ ảnh vào public/images/friends/ rồi trỏ `avatar` tới đó.
 * Link riêng của mỗi người:  https://<domain>/invite/<id>
 * Xoá khách: xoá object (và ảnh nếu muốn).
 */
export const guests: Guest[] = [
  {
    id: 'friend-001',
    name: 'Nguyễn Văn A',
    avatar: '/images/friends/friend-001.svg',
    invitation_message: 'Hy vọng bạn sẽ đến chung vui cùng mình!',
    rsvp_status: 'pending',
  },
  {
    id: 'friend-002',
    name: 'Trần Thị Bảo Ngọc',
    avatar: '/images/friends/friend-002.svg',
    invitation_message: 'Cảm ơn vì đã luôn ngồi cạnh mình trong những buổi học dài lê thê. Nhất định phải có mặt nhé!',
    rsvp_status: 'pending',
  },
  {
    id: 'friend-003',
    name: 'Lê Minh Khoa',
    avatar: '/images/friends/friend-003.svg',
    invitation_message: 'Team đồ án năm cuối không thể thiếu ông được. Đến chụp ảnh với mình nha!',
    rsvp_status: 'pending',
  },
  {
    id: 'friend-004',
    name: 'Phạm Hà My',
    avatar: '/images/friends/friend-004.svg',
    invitation_message: 'Mình nợ bạn rất nhiều ly trà sữa, hôm đó để mình mời lại nhé!',
    rsvp_status: 'pending',
  },
  {
    id: 'friend-005',
    name: 'Võ Quốc Bảo',
    // Cố ý trỏ tới file không tồn tại để bạn thấy avatar dự phòng (fallback) hoạt động
    avatar: '/images/friends/khong-ton-tai.jpg',
    invitation_message: 'Anh em cây khế, nhớ đến sớm giữ chỗ cho mình nhé!',
    rsvp_status: 'pending',
  },
]

const byId = new Map(guests.map((g) => [g.id.toLowerCase(), g]))

export function getGuestById(id: string | undefined): Guest | undefined {
  if (!id) return undefined
  return byId.get(id.trim().toLowerCase())
}
