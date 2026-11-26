import { useEffect } from 'react'
import confetti from 'canvas-confetti'

const COLORS = ['var(--color-sun)', 'var(--color-sky)', 'var(--color-lav)', 'var(--color-pink)', '#ffffff']

const HEART_SHAPES = ['💖', '🌹', '💗', '🌷', '💕'].map((text) => confetti.shapeFromText({ text, scalar: 2 }))

const base = { colors: COLORS, disableForReducedMotion: true, zIndex: 100 } as const

/** Pháo giấy bắn từ hai bên màn hình – dùng khi mở thiệp. */
export function fireWelcomeConfetti(love = false) {
  const extra = love ? { shapes: HEART_SHAPES, scalar: 2.2 } : {}
  const end = Date.now() + 1400
  const frame = () => {
    confetti({ ...base, particleCount: 4, angle: 60, spread: 65, origin: { x: 0, y: 0.75 }, startVelocity: 55, scalar: 1.1, ...extra })
    confetti({ ...base, particleCount: 4, angle: 120, spread: 65, origin: { x: 1, y: 0.75 }, startVelocity: 55, scalar: 1.1, ...extra })
    if (Date.now() < end) requestAnimationFrame(frame)
  }
  frame()
}

/** Bùng nổ pháo giấy lớn – dùng khi bấm "YES". */
export function fireCelebrationConfetti(origin?: { x: number; y: number }, love = false) {
  const o = origin ?? { x: 0.5, y: 0.6 }
  if (love) {
    const hearts = { ...base, shapes: HEART_SHAPES, scalar: 2.4 }
    confetti({ ...hearts, particleCount: 60, spread: 100, startVelocity: 45, origin: o })
    setTimeout(() => confetti({ ...hearts, particleCount: 40, spread: 160, startVelocity: 30, origin: o }), 220)
    setTimeout(() => confetti({ ...hearts, particleCount: 40, angle: 90, spread: 180, origin: { x: 0.5, y: 0 }, gravity: 0.7, ticks: 280 }), 450)
    return
  }
  confetti({ ...base, particleCount: 140, spread: 100, startVelocity: 48, origin: o, scalar: 1.2 })
  setTimeout(() => confetti({ ...base, particleCount: 80, spread: 140, startVelocity: 32, origin: o, shapes: ['circle', 'square'], scalar: 0.9 }), 220)
  setTimeout(() => confetti({ ...base, particleCount: 50, angle: 90, spread: 180, origin: { x: 0.5, y: 0 }, gravity: 0.8, ticks: 260 }), 450)
}

/** Component không render gì cả; chỉ bắn confetti một lần khi được mount. */
export default function Confetti({ delay = 500, love = false }: { delay?: number; love?: boolean }) {
  useEffect(() => {
    const t = setTimeout(() => fireWelcomeConfetti(love), delay)
    return () => { clearTimeout(t); confetti.reset() }
  }, [delay, love])
  return null
}
