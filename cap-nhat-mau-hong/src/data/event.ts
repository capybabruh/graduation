import type { EventInfo } from './types'

/**
 * Thông tin sự kiện: 29/11/2026, 10:30, tại University of Science - VNUHCM (227 Nguyễn Văn Cừ, Quận 5).
 * Nếu buổi lễ diễn ra ở hội trường cụ thể, thêm tên hội trường vào `locationName`.
 */
export const event: EventInfo = {
  title: 'Graduation Ceremony',
  university: 'University of Science - VNUHCM',

  // 29/11/2026 lúc 10:30 (giờ Việt Nam, +07:00)
  startsAt: '2026-11-29T10:30:00+07:00',
  durationHours: 3,

  locationName: 'University of Science - VNUHCM',
  locationAddress: '227 Nguyễn Văn Cừ, Phường 4, Quận 5, TP. Hồ Chí Minh',
  mapUrl: undefined,

  isPlaceholder: false,
}
