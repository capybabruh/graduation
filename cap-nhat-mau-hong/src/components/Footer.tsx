import { Heart } from 'lucide-react'
import type { Guest } from '../data/types'
import { GradCap } from './Decor'

export default function Footer({ guest }: { guest: Guest }) {
  const love = guest.style === 'love'
  return (
    <footer className="bg-ink px-4 py-10 text-center text-cream">
      <div className="mx-auto flex w-fit items-center gap-2"><GradCap size={36} fill="var(--color-sun)" /></div>
      <p className="hand mt-2 text-xl font-bold">Tùng's Graduation Party</p>
      <p className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-cream/70">
        Làm với <Heart size={14} className="fill-pink text-pink" /> {love ? 'dành riêng cho em' : 'dành cho bạn bè của Tùng'}
      </p>
    </footer>
  )
}
