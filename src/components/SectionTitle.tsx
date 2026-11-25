import { motion } from 'framer-motion'
import { Squiggle } from './Decor'

export default function SectionTitle({ emoji, title, subtitle }: { emoji: string; title: string; subtitle?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5 }}
      className="mb-10 text-center"
    >
      <div className="text-4xl" aria-hidden>{emoji}</div>
      <h2 className="hand mt-1 text-3xl font-extrabold sm:text-5xl">{title}</h2>
      {subtitle && <p className="mx-auto mt-2 max-w-md text-base font-semibold text-ink/70">{subtitle}</p>}
      <div className="mt-2 flex justify-center"><Squiggle width={70} color="#A9DDF5" /></div>
    </motion.div>
  )
}
