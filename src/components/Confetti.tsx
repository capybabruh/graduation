import { useEffect } from 'react'
import confetti from 'canvas-confetti'

const COLORS = ['#FFE99A', '#A9DDF5', '#D8C7FF', '#FFB8C8', '#ffffff']

const base = { colors: COLORS, disableForReducedMotion: true, zIndex: 100 } as const

/** Pháo giấy bắn từ hai bên màn hình – dùng khi mở thiệp. */
export function fireWelcomeConfetti() {
  const end = Date.now() + 1400
  const frame = () => {
    confetti({ ...base, particleCount: 4, angle: 60, spread: 65, origin: { x: 0, y: 0.75 }, startVelocity: 55, scalar: 1.1 })
    confetti({ ...base, particleCount: 4, angle: 120, spread: 65, origin: { x: 1, y: 0.75 }, startVelocity: 55, scalar: 1.1 })
    if (Date.now() < end) requestAnimationFrame(frame)
  }
  frame()
}

/** Bùng nổ pháo giấy lớn – dùng khi bấm "YES". */
export function fireCelebrationConfetti(origin?: { x: number; y: number }) {
  const o = origin ?? { x: 0.5, y: 0.6 }
  confetti({ ...base, particleCount: 140, spread: 100, startVelocity: 48, origin: o, scalar: 1.2 })
  setTimeout(() => confetti({ ...base, particleCount: 80, spread: 140, startVelocity: 32, origin: o, shapes: ['circle', 'square'], scalar: 0.9 }), 220)
  setTimeout(() => confetti({ ...base, particleCount: 50, angle: 90, spread: 180, origin: { x: 0.5, y: 0 }, gravity: 0.8, ticks: 260 }), 450)
}

/** Component không render gì cả; chỉ bắn confetti một lần khi được mount. */
export default function Confetti({ delay = 500 }: { delay?: number }) {
  useEffect(() => {
    const t = setTimeout(fireWelcomeConfetti, delay)
    return () => { clearTimeout(t); confetti.reset() }
  }, [delay])
  return null
}
