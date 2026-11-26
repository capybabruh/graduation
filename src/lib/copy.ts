import type { Guest } from '../data/types'

/** Lời thoại hiển thị theo từng khách: mặc định xưng "mình – bạn", style 'love' xưng "anh – em". */
export function getCopy(guest: Guest) {
  const lastName = guest.name.split(' ').slice(-1)[0]
  if (guest.style === 'love') {
    return {
      hello: 'MY LOVE,',
      helloEmoji: '💖',
      invited: 'Em là người anh muốn mời đầu tiên 💕',
      dear: 'Dear my love',
      intro: 'Sau bao năm học hành, bài tập, deadline và vô số ly cà phê… cuối cùng anh cũng tốt nghiệp. Và người anh muốn chia sẻ khoảnh khắc này nhất là em!',
      want: 'Anh muốn có em ở bên cạnh nhất, mãi mãi 💖',
      eventSubtitle: 'Em nhớ dành ngày này cho anh nhé 💕',
      countdownTitle: 'Đếm từng giây để được gặp em',
      countdownSubtitle: 'Mỗi giây trôi qua là anh lại gần em thêm một chút 💗',
      countdownDone: 'Hôm nay rồi em ơi! 💖',
      rsvpQuestion: 'Em sẽ ở bên anh trong ngày đặc biệt này chứ, người thương? 💖',
      yesButton: 'EM ĐỒNG Ý! 💖',
      noButton: 'EM XIN LỖI ANH 🥺',
      yesEmoji: '🥰',
      pageTitle: `${guest.name} ơi, anh mời em dự Tùng's Graduation Party 🎓`,
      messageLabel: 'Lời nhắn riêng cho em 💌',
      rsvpHint: `Anh cần biết để chuẩn bị chỗ cho em, ${lastName} ơi!`,
      yesTitle: 'Yay! Cảm ơn em nhiều lắm! 💕',
      yesText: `Anh sẽ đứng chờ ${guest.name} ngay trước cổng trường, với một bó hoa thật đẹp. Nhớ mặc thật xinh để mình chụp thật nhiều ảnh nhé! 🌹📸`,
      noTitle: 'Không sao đâu, anh hiểu mà!',
      noText: `Cảm ơn ${guest.name} đã đọc thiệp của anh. Anh sẽ gửi ảnh cho em và mình hẹn một buổi khác nhé! ☕💕`,
    }
  }
  return {
    hello: 'HEY,',
    helloEmoji: '👋',
    invited: "You're invited to my graduation!",
    dear: 'Dear',
    intro: "After years of studying, assignments, deadlines and countless cups of coffee, I'm finally graduating!",
    want: 'And I really want YOU to be there!',
    eventSubtitle: 'Ghi lại ngay kẻo quên nha!',
    countdownTitle: 'Đếm ngược đến ngày tốt nghiệp',
    countdownSubtitle: 'Chỉ còn một chút xíu nữa thôi…',
    countdownDone: "It's party time!",
    rsvpQuestion: 'Will you celebrate this special day with me?',
    yesButton: "YES! I'LL BE THERE! 🎉",
    noButton: "SORRY, CAN'T MAKE IT 🥺",
    yesEmoji: '🥳',
    pageTitle: `${guest.name}, bạn được mời dự Tùng's Graduation Party 🎓`,
    messageLabel: 'Lời nhắn riêng cho bạn 💌',
    rsvpHint: `Mình cần biết để chuẩn bị chỗ cho bạn, ${lastName} ơi!`,
    yesTitle: 'Yay! Cảm ơn bạn nhiều lắm!',
    yesText: `Mình rất mong được gặp ${guest.name} ở buổi lễ. Nhớ mặc thật xinh/đẹp để chụp ảnh nhé! 📸`,
    noTitle: 'Không sao đâu, mình hiểu mà!',
    noText: `Cảm ơn ${guest.name} đã dành thời gian đọc thiệp. Mình vẫn sẽ gửi ảnh cho bạn và hẹn bạn một buổi cà phê khác nhé! ☕💛`,
  }
}
