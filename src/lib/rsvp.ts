import type { Guest, RsvpStatus } from '../data/types'

const key = (id: string) => `tung-grad:rsvp:${id}`

export function loadRsvp(guest: Guest): RsvpStatus {
  try {
    const v = localStorage.getItem(key(guest.id))
    if (v === 'yes' || v === 'no' || v === 'pending') return v
  } catch { /* localStorage có thể bị chặn */ }
  return guest.rsvp_status
}

/**
 * Lưu lựa chọn trên trình duyệt của khách và (nếu có cấu hình VITE_RSVP_ENDPOINT)
 * gửi kèm lên endpoint của bạn để bạn thu thập câu trả lời.
 */
export async function saveRsvp(guest: Guest, status: RsvpStatus): Promise<void> {
  try { localStorage.setItem(key(guest.id), status) } catch { /* bỏ qua */ }
  const endpoint = import.meta.env.VITE_RSVP_ENDPOINT as string | undefined
  if (!endpoint) return
  try {
    await fetch(endpoint, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ id: guest.id, name: guest.name, status, at: new Date().toISOString() }),
    })
  } catch { /* lỗi mạng: lựa chọn vẫn được giữ cục bộ */ }
}
