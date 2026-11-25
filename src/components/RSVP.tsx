import { AnimatePresence, motion } from 'framer-motion'
import { useRef, useState } from 'react'
import type { Guest, RsvpStatus } from '../data/types'
import { loadRsvp, saveRsvp } from '../lib/rsvp'
import { fireCelebrationConfetti } from './Confetti'
import { Balloon, Floaty, Sparkle, Star } from './Decor'

export default function RSVP({ guest }: { guest: Guest }) {
  const [status, setStatus] = useState<RsvpStatus>(() => loadRsvp(guest))
  const yesRef = useRef<HTMLButtonElement>(null)

  const choose = (next: RsvpStatus, e?: React.MouseEvent) => {
    setStatus(next)
    void saveRsvp(guest, next)
    if (next === 'yes') {
      const r = (e?.currentTarget ?? yesRef.current)?.getBoundingClientRect()
      fireCelebrationConfetti(r ? { x: (r.left + r.width / 2) / innerWidth, y: (r.top + r.height / 2) / innerHeight } : undefined)
    }
  }

  return (
    <section id="rsvp" className="relative overflow-hidden bg-gradient-to-b from-cream via-pink/30 to-sun/40 px-4 py-24">
      <Floaty className="left-[5%] top-12 hidden sm:block"><Balloon fill="#A9DDF5" /></Floaty>
      <Floaty className="right-[6%] top-20 hidden sm:block" delay={1}><Balloon fill="#D8C7FF" size={50} /></Floaty>
      <Floaty className="left-[12%] bottom-16" delay={0.6}><Star size={32} /></Floaty>
      <Floaty className="right-[12%] bottom-20" delay={1.2}><Sparkle size={30} fill="#FFE99A" /></Floaty>

      <div className="relative mx-auto max-w-2xl text-center">
        <AnimatePresence mode="wait">
          {status === 'pending' ? (
            <motion.div key="ask" exit={{ opacity: 0, scale: 0.9 }}>
              <div className="text-5xl" aria-hidden>💌</div>
              <h2 className="hand mt-2 text-3xl font-extrabold leading-tight sm:text-5xl">
                Will you celebrate this special day with me?
              </h2>
              <p className="mt-3 text-base font-semibold text-ink/70">Mình cần biết để chuẩn bị chỗ cho bạn, {guest.name.split(' ').slice(-1)[0]} ơi!</p>
              <div className="mt-8 flex flex-col items-stretch justify-center gap-4 sm:flex-row">
                <button ref={yesRef} type="button" onClick={(e) => choose('yes', e)}
                  className="btn-pop rounded-full bg-sun px-7 py-4 text-lg sm:text-xl">YES! I'LL BE THERE! 🎉</button>
                <button type="button" onClick={() => choose('no')}
                  className="btn-pop rounded-full bg-white px-7 py-4 text-lg sm:text-xl">SORRY, CAN'T MAKE IT 🥺</button>
              </div>
            </motion.div>
          ) : (
            <motion.div key={status}
              initial={{ opacity: 0, scale: 0.7, rotate: -6 }} animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 160, damping: 12 }}
              className="rounded-[2.5rem] border-[3px] border-ink bg-white px-6 py-10 shadow-card sm:px-10"
              role="status"
            >
              <motion.div
                className="text-7xl" aria-hidden
                animate={status === 'yes' ? { rotate: [0, -12, 12, -12, 0], scale: [1, 1.2, 1] } : { y: [0, 6, 0] }}
                transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 0.8 }}
              >
                {status === 'yes' ? '🥳' : '🥺'}
              </motion.div>
              {status === 'yes' ? (
                <>
                  <h2 className="hand mt-4 text-3xl font-extrabold sm:text-4xl">Yay! Cảm ơn bạn nhiều lắm!</h2>
                  <p className="mt-3 text-lg font-semibold text-ink/75">
                    Mình rất mong được gặp <b>{guest.name}</b> ở buổi lễ. Nhớ mặc thật xinh/đẹp để chụp ảnh nhé! 📸
                  </p>
                </>
              ) : (
                <>
                  <h2 className="hand mt-4 text-3xl font-extrabold sm:text-4xl">Không sao đâu, mình hiểu mà!</h2>
                  <p className="mt-3 text-lg font-semibold text-ink/75">
                    Cảm ơn <b>{guest.name}</b> đã dành thời gian đọc thiệp. Mình vẫn sẽ gửi ảnh cho bạn và hẹn bạn một buổi cà phê khác nhé! ☕💛
                  </p>
                </>
              )}
              <button type="button" onClick={() => choose('pending')}
                className="mt-6 text-sm font-bold text-ink/60 underline decoration-wavy underline-offset-4 hover:text-ink">
                Đổi câu trả lời
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
