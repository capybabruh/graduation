export type RsvpStatus = 'pending' | 'yes' | 'no'

export interface Guest {
  id: string
  name: string
  /** Đường dẫn ảnh, tính từ thư mục public/ (ví dụ "/images/friends/friend-001.jpg"). Hỗ trợ JPG, PNG, WEBP. */
  avatar: string
  invitation_message: string
  rsvp_status: RsvpStatus
}

export interface GalleryPhoto {
  id: string
  src: string
  caption: string
  /** Góc xoay nhẹ khi ở trạng thái nghỉ (độ) */
  tilt: number
}

export interface EventInfo {
  /** Tên sự kiện */
  title: string
  /** Trường đại học */
  university: string
  /** Thời điểm bắt đầu, ISO 8601 có timezone, ví dụ "2027-01-17T09:00:00+07:00" */
  startsAt: string
  /** Thời lượng dự kiến (giờ) – dùng cho Google Calendar */
  durationHours: number
  /** Chuỗi hiển thị cho ngày/giờ (tự sinh từ startsAt nếu để trống) */
  dateLabel?: string
  timeLabel?: string
  /** Tên địa điểm hiển thị */
  locationName: string
  /** Địa chỉ đầy đủ – dùng cho nút View Location */
  locationAddress: string
  /** Link Google Maps tuỳ chọn; nếu trống sẽ tạo link tìm kiếm từ địa chỉ */
  mapUrl?: string
  /** true = thông tin sự kiện vẫn là giá trị tạm. Đổi thành false khi đã điền thật. */
  isPlaceholder: boolean
}
