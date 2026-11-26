import { motion } from 'framer-motion'

const links = [
  { href: '#event', label: '📍 Sự kiện' },
  { href: '#countdown', label: '⏳ Đếm ngược' },
  { href: '#rsvp', label: '💌 RSVP' },
]

/** Thanh điều hướng nổi, cuộn mượt (smooth scroll) tới từng section. */
export default function NavPills() {
  return (
    <motion.nav
      aria-label="Các phần của thiệp mời"
      initial={{ y: -60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1, type: 'spring', stiffness: 120, damping: 16 }}
      className="fixed inset-x-0 top-3 z-40 flex justify-center px-3"
    >
      <ul className="flex max-w-full gap-1 overflow-x-auto rounded-full border-[3px] border-ink bg-white/90 p-1 shadow-card backdrop-blur [scrollbar-width:none]">
        {links.map((l) => (
          <li key={l.href} className="shrink-0">
            <a href={l.href} className="block rounded-full px-2.5 py-1.5 text-[11px] font-extrabold transition-colors hover:bg-sun sm:px-4 sm:text-sm">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}
