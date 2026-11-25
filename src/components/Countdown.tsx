import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { getStart, timeLeft } from '../lib/utils'
import type { EventInfo } from '../data/types'
import { Floaty, Star } from './Decor'
import SectionTitle from './SectionTitle'

function useCountdown(target: Date) {
  const [left, setLeft] = useState(() => timeLeft(target))
  useEffect(() => {
    setLeft(timeLeft(target))
    const id = setInterval(() => setLeft(timeLeft(target)), 1000)
    return () => clearInterval(id)
  }, [target])
  return left
}

function Tile({ value, label, bg, tilt }: { value: number; label: string; bg: string; tilt: number }) {
  const text = String(value).padStart(2, '0')
  return (
    <motion.div
      whileHover={{ y: -6, rotate: 0 }}
      style={{ rotate: tilt }}
      className={`rounded-3xl border-[3px] border-ink ${bg} px-2 py-4 text-center shadow-[0_6px_0_0_#333] sm:px-4 sm:py-6`}
    >
      <div className="relative h-14 overflow-hidden sm:h-20" aria-hidden>
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={text}
            initial={{ y: '-100%', opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: '100%', opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="hand absolute inset-0 flex items-center justify-center text-5xl font-extrabold tabular-nums sm:text-7xl"
          >
            {text}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="sr-only">{value} {label}</span>
      <p className="hand mt-2 text-sm font-bold uppercase tracking-widest sm:text-lg" aria-hidden>{label}</p>
    </motion.div>
  )
}

export default function Countdown({ event }: { event: EventInfo }) {
  const target = useMemo(() => getStart(event), [event])
  const left = useCountdown(target)

  return (
    <section id="countdown" className="relative overflow-hidden bg-lav/40 px-4 py-20">
      <div className="bg-dots absolute inset-0" aria-hidden />
      <Floaty className="left-[6%] top-10"><Star size={34} fill="#FFE99A" /></Floaty>
      <Floaty className="right-[7%] bottom-10" delay={1}><Star size={28} fill="#FFB8C8" /></Floaty>

      <div className="relative mx-auto max-w-3xl">
        <SectionTitle emoji="⏳" title={left.done ? "It's party time!" : 'Đếm ngược đến ngày tốt nghiệp'}
          subtitle={left.done ? 'Ngày trọng đại đã đến rồi 🎉' : 'Chỉ còn một chút xíu nữa thôi…'} />
        <div role="timer" aria-live="off" className="grid grid-cols-4 gap-2 sm:gap-5">
          <Tile value={left.days} label="Days" bg="bg-sun" tilt={-2} />
          <Tile value={left.hours} label="Hours" bg="bg-sky" tilt={2} />
          <Tile value={left.minutes} label="Minutes" bg="bg-pink" tilt={-1.5} />
          <Tile value={left.seconds} label="Seconds" bg="bg-white" tilt={2.5} />
        </div>
      </div>
    </section>
  )
}
