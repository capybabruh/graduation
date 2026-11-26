import { motion } from 'framer-motion'
import type { Guest } from '../data/types'
import { Floaty, Heart, Rose, Tulip } from './Decor'

/** Bức thư tay riêng cho người thương (đọc từ guest.love_letter). Chỉ hiện khi có nội dung. */
export default function LoveLetter({ guest }: { guest: Guest }) {
  const paragraphs = guest.love_letter
  if (!paragraphs?.length) return null
  const [greeting, ...body] = paragraphs

  return (
    <section id="letter" className="relative overflow-hidden px-4 py-20">
      <div className="bg-dots absolute inset-0" aria-hidden />
      <Floaty className="left-[3%] top-8" rotate={4}><Rose size={48} /></Floaty>
      <Floaty className="right-[3%] top-10" delay={1} rotate={4}><Tulip size={48} /></Floaty>
      <Floaty className="left-[8%] bottom-10" delay={0.5}><Heart size={30} fill="#FF4F87" /></Floaty>
      <Floaty className="right-[8%] bottom-12" delay={1.4}><Heart size={34} /></Floaty>

      <motion.article
        initial={{ opacity: 0, y: 40, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, rotate: -0.8 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ type: 'spring', stiffness: 110, damping: 16 }}
        className="relative mx-auto max-w-xl rounded-[2rem] border-[3px] border-ink bg-white px-6 pb-10 pt-12 shadow-card sm:px-10"
      >
        {/* con dấu thư */}
        <div className="absolute -top-7 left-1/2 grid h-14 w-14 -translate-x-1/2 place-items-center rounded-full border-[3px] border-ink bg-pink text-2xl shadow-card" aria-hidden>
          <span className="heartbeat">💌</span>
        </div>

        <h2 className="hand text-3xl font-extrabold text-[var(--color-accent,#ff4f87)] sm:text-4xl">{greeting}</h2>
        <div className="mt-5 space-y-4 text-lg font-semibold leading-relaxed text-ink/85 sm:text-xl">
          {body.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <p className="hand mt-7 text-right text-2xl font-extrabold">
          Yêu em nhiều, <span className="text-[var(--color-accent,#ff4f87)]">Tùng</span> <span className="heartbeat">💗</span>
        </p>
      </motion.article>
    </section>
  )
}
