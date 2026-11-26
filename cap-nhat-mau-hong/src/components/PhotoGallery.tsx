import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import type { GalleryPhoto } from '../data/types'
import { assetUrl } from '../lib/utils'
import SectionTitle from './SectionTitle'

function Photo({ photo, className }: { photo: GalleryPhoto; className: string }) {
  const [failed, setFailed] = useState(false)
  if (failed) return <div className={`${className} grid place-items-center bg-lav text-4xl`} aria-label={photo.caption}>📷</div>
  return <img src={assetUrl(photo.src)} alt={photo.caption} className={className} loading="lazy" decoding="async" onError={() => setFailed(true)} />
}

export default function PhotoGallery({ photos }: { photos: GalleryPhoto[] }) {
  const [open, setOpen] = useState<number | null>(null)
  const close = useCallback(() => setOpen(null), [])
  const step = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + photos.length) % photos.length)), [photos.length])

  useEffect(() => {
    if (open === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev }
  }, [open, close, step])

  if (photos.length === 0) return null
  const current = open === null ? null : photos[open]

  return (
    <section id="memories" className="px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionTitle emoji="📸" title="Những khoảnh khắc đáng nhớ" subtitle="Một chặng đường sinh viên đầy ắp kỷ niệm. Bấm vào ảnh để xem lớn hơn nhé!" />

        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-3">
          {photos.map((p, i) => (
            <motion.button
              key={p.id}
              type="button"
              onClick={() => setOpen(i)}
              aria-label={`Xem ảnh lớn: ${p.caption}`}
              initial={{ opacity: 0, y: 40, rotate: p.tilt * 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: p.tilt }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ type: 'spring', stiffness: 120, damping: 14, delay: (i % 3) * 0.08 }}
              whileHover={{ rotate: 0, scale: 1.06, y: -8, zIndex: 10 }}
              whileTap={{ scale: 0.97 }}
              className="relative cursor-pointer rounded-md border-[3px] border-ink bg-white p-2 pb-3 text-left shadow-card sm:p-3 sm:pb-4"
            >
              <span className="absolute -top-3 left-1/2 h-5 w-16 -translate-x-1/2 rotate-3 rounded-sm bg-sun/90" aria-hidden />
              <Photo photo={p} className="aspect-square w-full rounded-sm object-cover" />
              <span className="hand mt-2 block text-center text-sm font-bold sm:text-lg">{p.caption}</span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {current && (
          <motion.div
            role="dialog" aria-modal="true" aria-label={current.caption}
            className="fixed inset-0 z-50 grid place-items-center bg-ink/70 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={close}
          >
            <motion.figure
              key={current.id}
              initial={{ scale: 0.85, rotate: -4, opacity: 0 }} animate={{ scale: 1, rotate: current.tilt / 2, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }} transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-full w-full max-w-2xl rounded-md border-[3px] border-ink bg-white p-3 pb-4 shadow-card sm:p-5 sm:pb-6"
            >
              <Photo photo={current} className="max-h-[70vh] w-full rounded-sm object-contain bg-cream" />
              <figcaption className="hand mt-3 text-center text-xl font-bold sm:text-2xl">{current.caption}</figcaption>
            </motion.figure>

            <button type="button" onClick={close} aria-label="Đóng"
              className="btn-pop absolute right-4 top-4 grid h-12 w-12 place-items-center rounded-full bg-pink"><X size={22} /></button>
            {photos.length > 1 && (
              <>
                <button type="button" onClick={(e) => { e.stopPropagation(); step(-1) }} aria-label="Ảnh trước"
                  className="btn-pop absolute left-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-sky"><ChevronLeft size={24} /></button>
                <button type="button" onClick={(e) => { e.stopPropagation(); step(1) }} aria-label="Ảnh sau"
                  className="btn-pop absolute right-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-sky"><ChevronRight size={24} /></button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
