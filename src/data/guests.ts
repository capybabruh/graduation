import type { Guest } from './types'

/**
 * DANH SÁCH KHÁCH MỜI
 * ------------------
 * Thêm khách: thêm 1 object mới, bỏ ảnh vào public/images/friends/ rồi trỏ `avatar` tới đó.
 * Link riêng của mỗi người:  https://<domain>/invite/<id>
 * `id` được cố ý đặt khó đoán (có đuôi ngẫu nhiên) để người ngoài không dò ra link của bạn bè.
 * Xoá khách: xoá object (và ảnh nếu muốn).
 */
export const guests: Guest[] = [
  {
    id: 'tuyet-trinh-g9far',
    name: 'Tuyết Trinh',
    avatar: '/images/friends/friend-001.jpg',
    invitation_message: 'Anh rất mong em sẽ đến chung vui cùng anh nhé! 💕',
    rsvp_status: 'pending',
    style: 'love',
    love_letter: [
      'Gửi em, người anh thương nhất,',
      'Những năm đại học có áp lực, có mệt mỏi, có những lúc anh tưởng mình không đi nổi tới cuối. Nhưng có em ở bên, mọi thứ đều nhẹ đi rất nhiều.',
      'Ngày anh mặc áo cử nhân, người anh muốn đứng cạnh anh nhất chính là em. Cảm ơn em đã luôn tin anh, chờ anh và thương anh.',
      'Đến với anh nhé, để khoảnh khắc này trọn vẹn nhất. 💕',
    ],
  },
  {
    id: 'thai-duong-xgbq3',
    name: 'Nguyễn Thái Dương',
    avatar: '/images/friends/friend-002.jpg',
    invitation_message: 'Hy vọng bạn sẽ đến chung vui cùng mình!',
    rsvp_status: 'pending',
  },
  {
    id: 'bui-hong-xaxj3',
    name: 'Bùi Hưng',
    avatar: '/images/friends/friend-003.jpg',
    invitation_message: 'Hy vọng bạn sẽ đến chung vui cùng mình!',
    rsvp_status: 'pending',
  },
  {
    id: 'hoai-phong-4p642',
    name: 'Nguyễn Hoài Phong',
    avatar: '/images/friends/friend-004.jpg',
    invitation_message: 'Hy vọng bạn sẽ đến chung vui cùng mình!',
    rsvp_status: 'pending',
  },
  {
    id: 'xuan-nam-9izk8',
    name: 'Phạm Xuân Nam',
    avatar: '/images/friends/friend-005.jpg',
    invitation_message: 'Hy vọng bạn sẽ đến chung vui cùng mình!',
    rsvp_status: 'pending',
  },
  {
    id: 'tien-phong-j64kd',
    name: 'Phong Phạm',
    avatar: '/images/friends/friend-006.jpg',
    invitation_message: 'Hy vọng bạn sẽ đến chung vui cùng mình!',
    rsvp_status: 'pending',
  },
  {
    id: 'phu-hao-bwie9',
    name: 'Nguyễn Hào',
    avatar: '/images/friends/friend-007.jpg',
    invitation_message: 'Hy vọng bạn sẽ đến chung vui cùng mình!',
    rsvp_status: 'pending',
  },
  {
    id: 'khoi-otkcx',
    name: 'Nguyễn Khôi',
    avatar: '/images/friends/friend-008.jpg',
    invitation_message: 'Hy vọng bạn sẽ đến chung vui cùng mình!',
    rsvp_status: 'pending',
  },
]

const byId = new Map(guests.map((g) => [g.id.toLowerCase(), g]))

export function getGuestById(id: string | undefined): Guest | undefined {
  if (!id) return undefined
  return byId.get(id.trim().toLowerCase())
}
