import type { Guest } from '../data/types'

/** Lời thoại hiển thị theo từng khách: mặc định xưng "mình – bạn", style 'love' xưng "anh – em". */
export function getCopy(guest: Guest) {
  const lastName = guest.name.split(' ').slice(-1)[0]
  if (guest.style === 'love') {
    return {
      pageTitle: `${guest.name} ơi, anh mời em dự Tùng's Graduation Party 🎓`,
      messageLabel: 'Lời nhắn riêng cho em 💌',
      rsvpHint: `Anh cần biết để chuẩn bị chỗ cho em, ${lastName} ơi!`,
      yesTitle: 'Yay! Cảm ơn em nhiều lắm! 💕',
      yesText: `Anh rất mong được gặp ${guest.name} ở buổi lễ. Nhớ mặc thật xinh để anh chụp ảnh cho em nhé! 📸`,
      noTitle: 'Không sao đâu, anh hiểu mà!',
      noText: `Cảm ơn ${guest.name} đã đọc thiệp của anh. Anh sẽ gửi ảnh cho em và mình hẹn một buổi khác nhé! ☕💕`,
    }
  }
  return {
    pageTitle: `${guest.name}, bạn được mời dự Tùng's Graduation Party 🎓`,
    messageLabel: 'Lời nhắn riêng cho bạn 💌',
    rsvpHint: `Mình cần biết để chuẩn bị chỗ cho bạn, ${lastName} ơi!`,
    yesTitle: 'Yay! Cảm ơn bạn nhiều lắm!',
    yesText: `Mình rất mong được gặp ${guest.name} ở buổi lễ. Nhớ mặc thật xinh/đẹp để chụp ảnh nhé! 📸`,
    noTitle: 'Không sao đâu, mình hiểu mà!',
    noText: `Cảm ơn ${guest.name} đã dành thời gian đọc thiệp. Mình vẫn sẽ gửi ảnh cho bạn và hẹn bạn một buổi cà phê khác nhé! ☕💛`,
  }
}
