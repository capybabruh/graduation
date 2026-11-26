import { motion } from 'framer-motion'
import type { Guest } from '../data/types'
import { getCopy } from '../lib/copy'
import Avatar from './Avatar'
import { GradCap, Heart, Rose, Sparkle, Star, Tulip } from './Decor'

export default function InvitationCard({ guest }: { guest: Guest }) {
  const copy = getCopy(guest)
  const love = guest.style === 'love'
  return (
    // Lớp ngoài: animation xuất hiện; lớp trong: floating liên tục (tách riêng để không xung đột transform)
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.92, rotate: -3 }}
      animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 14, delay: 0.25 }}
      className="relative mx-auto w-full max-w-xl"
    >
      <motion.article
        animate={{ y: [0, -10, 0], rotate: [-0.6, 0.6, -0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative rounded-[2.5rem] border-[3px] border-ink bg-white px-6 pb-10 pt-24 text-center shadow-card sm:px-10"
      >
        {/* băng keo dán thiệp */}
        <div className="absolute -top-3 left-1/2 h-7 w-32 -translate-x-1/2 -rotate-2 rounded-md bg-pink/80" aria-hidden />

        {/* Avatar nổi bật, bay lên khỏi mép thiệp */}
        <motion.div
          initial={{ scale: 0, rotate: -25 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 220, damping: 12, delay: 0.55 }}
          className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
        >
          <div className="relative">
            <div className="rounded-full bg-sun p-2 shadow-card ring-[3px] ring-ink">
              <Avatar
                src={guest.avatar}
                name={guest.name}
                className="h-36 w-36 rounded-full border-[3px] border-ink sm:h-44 sm:w-44"
              />
            </div>
            <motion.div
              className="absolute -right-4 -top-5 rotate-12"
              animate={{ rotate: [12, 22, 12] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <GradCap size={62} />
            </motion.div>
            <div className="absolute -bottom-1 -left-4">{love ? <Heart size={40} fill="#FF4F87" /> : <Star size={34} fill="var(--color-pink)" />}</div>
            {love && <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-3xl heartbeat" aria-hidden>💗</div>}
            <div className="absolute -right-6 bottom-6"><Sparkle size={26} /></div>
          </div>
        </motion.div>

        <p className="hand text-2xl font-bold text-ink/80 sm:text-3xl">
          {copy.dear} <span className="rounded-xl bg-sun px-2 py-0.5 text-ink">{guest.name}</span>{love ? ' 💖' : ','}
        </p>

        <h2 className="hand mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          I finally made it! <span className="inline-block animate-bounce">🎓</span>
        </h2>

        <p className="mx-auto mt-4 max-w-md text-base font-semibold leading-relaxed text-ink/75 sm:text-lg">
          {copy.intro}
        </p>

        <p className="hand mt-4 text-xl font-bold sm:text-2xl">
          {love ? copy.want : <>And I really want <span className="text-[var(--color-accent,#e8678a)]">YOU</span> to be there!</>}
        </p>

        {/* Lời nhắn cá nhân hoá */}
        <div className="relative mx-auto mt-7 max-w-md rounded-3xl border-[3px] border-dashed border-ink/60 bg-lav/50 px-5 py-4">
          <span className="absolute -top-4 left-5 rounded-full border-2 border-ink bg-pink px-3 py-0.5 text-xs font-extrabold uppercase tracking-wide">
            {copy.messageLabel}
          </span>
          <p className="text-base font-bold leading-relaxed sm:text-lg">“{guest.invitation_message}”</p>
        </div>
        {love && (
          <>
            <div className="pointer-events-none absolute -bottom-9 -left-4 -rotate-12 sm:-left-8"><Rose size={54} /></div>
            <div className="pointer-events-none absolute -bottom-9 -right-4 rotate-12 sm:-right-8"><Tulip size={54} /></div>
            <div className="pointer-events-none absolute -bottom-7 left-[22%] hidden rotate-6 sm:block"><Tulip size={38} fill="#FFC2D6" /></div>
            <div className="pointer-events-none absolute -bottom-7 right-[22%] hidden -rotate-6 sm:block"><Rose size={38} fill="#FF7FA3" /></div>
          </>
        )}
      </motion.article>
    </motion.div>
  )
}
