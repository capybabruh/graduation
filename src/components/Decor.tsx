import { motion } from 'framer-motion'
import type { CSSProperties } from 'react'

/** Các sticker/doodle dùng chung. Tất cả là SVG inline nên nhẹ và sắc nét ở mọi kích thước. */

const stroke = '#333333'

export function Star({ size = 40, fill = '#FFE99A' }: { size?: number; fill?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden>
      <path d="M24 4l5.5 13.2 14.2 1.2-10.8 9.3 3.3 13.9L24 34.4 11.8 41.6l3.3-13.9L4.3 18.4l14.2-1.2z"
        fill={fill} stroke={stroke} strokeWidth="2.5" strokeLinejoin="round" />
    </svg>
  )
}

export function Sparkle({ size = 28, fill = '#A9DDF5' }: { size?: number; fill?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden>
      <path d="M20 3c1.5 9 5 14.5 17 17-12 2.5-15.5 8-17 17-1.5-9-5-14.5-17-17C15 17.5 18.5 12 20 3z"
        fill={fill} stroke={stroke} strokeWidth="2.5" strokeLinejoin="round" />
    </svg>
  )
}

export function Balloon({ size = 56, fill = '#FFB8C8' }: { size?: number; fill?: string }) {
  return (
    <svg width={size} height={size * 1.6} viewBox="0 0 50 80" aria-hidden>
      <path d="M25 3C12 3 5 13 5 25c0 13 11 22 20 25 9-3 20-12 20-25C45 13 38 3 25 3z"
        fill={fill} stroke={stroke} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M21 50l4 5 4-5z" fill={fill} stroke={stroke} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M25 55c-5 6 5 10 0 22" fill="none" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M14 14c2-3 5-5 8-5.5" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity=".8" />
    </svg>
  )
}

export function GradCap({ size = 64, fill = '#D8C7FF' }: { size?: number; fill?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden>
      <path d="M16 33v12c0 4.5 7 8.5 16 8.5s16-4 16-8.5V33L32 41z" fill={fill} stroke={stroke} strokeWidth="3" strokeLinejoin="round" />
      <path d="M32 12L4 26l28 14 28-14z" fill="#333" stroke={stroke} strokeWidth="3" strokeLinejoin="round" />
      <path d="M56 28v15" stroke="#FFB8C8" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="56" cy="46" r="3.5" fill="#FFB8C8" stroke={stroke} strokeWidth="2" />
    </svg>
  )
}

export function Squiggle({ width = 90, color = '#FFB8C8' }: { width?: number; color?: string }) {
  return (
    <svg width={width} height={width * 0.22} viewBox="0 0 100 22" aria-hidden>
      <path d="M2 11c8-14 14 14 22 0s14 14 22 0 14 14 22 0 14 14 22 0" fill="none" stroke={color} strokeWidth="5" strokeLinecap="round" />
    </svg>
  )
}

export function Cloud({ width = 110, fill = '#fff' }: { width?: number; fill?: string }) {
  return (
    <svg width={width} height={width * 0.55} viewBox="0 0 110 60" aria-hidden>
      <path d="M26 54a20 20 0 01-2-39.9A28 28 0 0178 18a18 18 0 013 36z" fill={fill} stroke={stroke} strokeWidth="2.5" strokeLinejoin="round" />
    </svg>
  )
}

/** Bọc một sticker, cho nó trôi nhẹ nhàng. `delay` giúp các sticker không chuyển động đồng loạt. */
export function Floaty({
  children, className = '', style, delay = 0, amplitude = 12, rotate = 6, duration = 4.5,
}: {
  children: React.ReactNode
  className?: string
  style?: CSSProperties
  delay?: number
  amplitude?: number
  rotate?: number
  duration?: number
}) {
  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none absolute select-none ${className}`}
      style={style}
      animate={{ y: [0, -amplitude, 0], rotate: [-rotate, rotate, -rotate] }}
      transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
}

/** Avatar dự phòng khi ảnh bị lỗi hoặc thiếu: một nhân vật đội mũ cử nhân dễ thương. */
export function FallbackAvatar() {
  return (
    <svg viewBox="0 0 200 200" className="h-full w-full" role="img" aria-label="Avatar mặc định">
      <rect width="200" height="200" fill="#D8C7FF" />
      <circle cx="30" cy="40" r="26" fill="#FFE99A" opacity=".7" />
      <circle cx="175" cy="165" r="34" fill="#A9DDF5" opacity=".8" />
      <path d="M40 200c0-38 26-58 60-58s60 20 60 58z" fill="#FFB8C8" />
      <circle cx="100" cy="106" r="40" fill="#FFF0DD" stroke="#333" strokeWidth="4" />
      <circle cx="85" cy="108" r="5" fill="#333" />
      <circle cx="115" cy="108" r="5" fill="#333" />
      <path d="M88 124c5 7 19 7 24 0" fill="none" stroke="#333" strokeWidth="4" strokeLinecap="round" />
      <circle cx="73" cy="120" r="6" fill="#FFB8C8" opacity=".8" />
      <circle cx="127" cy="120" r="6" fill="#FFB8C8" opacity=".8" />
      <path d="M100 38L46 62l54 26 54-26z" fill="#333" />
      <path d="M70 72v14c0 6 14 12 30 12s30-6 30-12V72L100 84z" fill="#333" />
      <path d="M150 66v24" stroke="#FFE99A" strokeWidth="5" strokeLinecap="round" />
      <circle cx="150" cy="94" r="5" fill="#FFE99A" />
    </svg>
  )
}
