import type { EventInfo } from '../data/types'

/** Ghép BASE_URL của Vite với đường dẫn tài nguyên trong public/ (an toàn khi deploy vào sub-path). */
export function assetUrl(path: string): string {
  if (/^(https?:)?\/\//.test(path) || path.startsWith('data:')) return path
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  return `${base}${path.startsWith('/') ? path : `/${path}`}`
}

const pad = (n: number) => String(n).padStart(2, '0')

export function getStart(event: EventInfo): Date {
  return new Date(event.startsAt)
}

export function formatDate(event: EventInfo): string {
  if (event.dateLabel) return event.dateLabel
  return new Intl.DateTimeFormat('vi-VN', {
    weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric', timeZone: 'Asia/Ho_Chi_Minh',
  }).format(getStart(event))
}

export function formatTime(event: EventInfo): string {
  if (event.timeLabel) return event.timeLabel
  return new Intl.DateTimeFormat('vi-VN', {
    hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Asia/Ho_Chi_Minh',
  }).format(getStart(event))
}

const toCalDate = (d: Date) =>
  `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}${pad(d.getUTCSeconds())}Z`

export function googleCalendarUrl(event: EventInfo): string {
  const start = getStart(event)
  const end = new Date(start.getTime() + event.durationHours * 3600_000)
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: `Tùng's Graduation Party 🎓`,
    dates: `${toCalDate(start)}/${toCalDate(end)}`,
    details: `${event.title} – ${event.university}`,
    location: `${event.locationName}, ${event.locationAddress}`,
  })
  return `https://calendar.google.com/calendar/render?${params.toString()}`
}

export function mapUrl(event: EventInfo): string {
  if (event.mapUrl) return event.mapUrl
  const q = encodeURIComponent(`${event.locationName}, ${event.locationAddress}`)
  return `https://www.google.com/maps/search/?api=1&query=${q}`
}

export function timeLeft(target: Date, now = Date.now()) {
  const diff = Math.max(0, target.getTime() - now)
  const s = Math.floor(diff / 1000)
  return {
    done: diff === 0,
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
  }
}
