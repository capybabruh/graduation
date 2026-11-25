import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import type { Guest } from '../data/types'
import { Balloon, Cloud, Floaty, GradCap, Sparkle, Squiggle, Star } from './Decor'
import InvitationCard from './InvitationCard'

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } }
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 140, damping: 16 } },
}

export default function Hero({ guest }: { guest: Guest }) {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-sky/60 via-lav/40 to-cream px-4 pb-24 pt-20 sm:pt-24">
      <div className="bg-dots absolute inset-0" aria-hidden />

      {/* sticker trang trí */}
      <Floaty className="left-[4%] top-24 hidden sm:block"><Balloon fill="#FFB8C8" /></Floaty>
      <Floaty className="right-[5%] top-40 hidden sm:block" delay={1}><Balloon fill="#FFE99A" size={64} /></Floaty>
      <Floaty className="left-[8%] top-[52%]" delay={0.5}><Star size={36} /></Floaty>
      <Floaty className="right-[9%] top-[60%]" delay={1.4}><Sparkle size={32} fill="#FFB8C8" /></Floaty>
      <Floaty className="left-[3%] bottom-24 hidden md:block" delay={0.8} rotate={3}><Cloud /></Floaty>
      <Floaty className="right-[3%] top-10 hidden md:block" delay={0.2} rotate={3}><Cloud width={90} /></Floaty>
      <Floaty className="right-[14%] bottom-28 hidden md:block" delay={1.1}><GradCap size={56} fill="#FFE99A" /></Floaty>

      <motion.div variants={container} initial="hidden" animate="show" className="relative mx-auto max-w-3xl text-center">
        <motion.p variants={item}
          className="hand mx-auto inline-flex items-center gap-2 rounded-full border-[3px] border-ink bg-sun px-4 py-1 text-sm font-extrabold uppercase tracking-wider shadow-card sm:text-base">
          <GradCap size={24} /> Tùng's Graduation Party
        </motion.p>

        <motion.h1 variants={item} className="hand mt-6 text-5xl font-extrabold leading-[1.05] sm:text-7xl">
          HEY,{' '}
          <span className="inline-block -rotate-2 rounded-2xl bg-pink px-3 text-ink shadow-[0_5px_0_0_#333] [text-wrap:balance]">
            {guest.name.toUpperCase()}!
          </span>{' '}
          <motion.span className="inline-block origin-[70%_70%]" animate={{ rotate: [0, 20, -8, 20, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 1.5 }}>👋</motion.span>
        </motion.h1>

        <motion.h2 variants={item} className="hand mt-4 text-2xl font-bold uppercase tracking-wide text-ink/80 sm:text-4xl">
          You're invited to my graduation!
        </motion.h2>

        <motion.div variants={item} className="mt-3 flex justify-center"><Squiggle /></motion.div>
      </motion.div>

      <div className="relative mx-auto mt-20 max-w-3xl sm:mt-24"><InvitationCard guest={guest} /></div>

      <motion.a
        href="#event"
        aria-label="Cuộn xuống xem thông tin lễ tốt nghiệp"
        className="btn-pop relative mx-auto mt-14 flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-base"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
      >
        Xem chi tiết nào
        <motion.span animate={{ y: [0, 5, 0] }} transition={{ duration: 1.2, repeat: Infinity }}><ChevronDown size={20} /></motion.span>
      </motion.a>
    </section>
  )
}
