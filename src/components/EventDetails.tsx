import { motion } from 'framer-motion'
import { CalendarDays, CalendarPlus, Clock, GraduationCap, MapPin, School } from 'lucide-react'
import type { ReactNode } from 'react'
import type { EventInfo, Guest } from '../data/types'
import { getCopy } from '../lib/copy'
import { formatDate, formatTime, googleCalendarUrl, mapUrl } from '../lib/utils'
import SectionTitle from './SectionTitle'

function Row({ icon, label, value, bg, i }: { icon: ReactNode; label: string; value: string; bg: string; i: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }} transition={{ delay: i * 0.08, type: 'spring', stiffness: 140, damping: 16 }}
      whileHover={{ scale: 1.02, rotate: -0.5 }}
      className="flex items-center gap-4 rounded-3xl border-[3px] border-ink bg-white p-4 shadow-card"
    >
      <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl border-[3px] border-ink ${bg}`}>{icon}</span>
      <div className="min-w-0">
        <p className="text-xs font-extrabold uppercase tracking-widest text-ink/50">{label}</p>
        <p className="hand text-xl font-bold leading-tight sm:text-2xl [overflow-wrap:anywhere]">{value}</p>
      </div>
    </motion.li>
  )
}

export default function EventDetails({ event, guest }: { event: EventInfo; guest: Guest }) {
  const copy = getCopy(guest)
  const location = `${event.locationName} – ${event.locationAddress}`
  return (
    <section id="event" className="relative px-4 py-20">
      <div className="mx-auto max-w-3xl">
        <SectionTitle emoji="📍" title="Thông tin buổi lễ" subtitle={copy.eventSubtitle} />

        <ul className="grid gap-4 sm:grid-cols-2">
          <Row i={0} bg="bg-pink" icon={<GraduationCap size={26} />} label="Event" value={event.title} />
          <Row i={1} bg="bg-sun" icon={<CalendarDays size={26} />} label="Date" value={formatDate(event)} />
          <Row i={2} bg="bg-sky" icon={<Clock size={26} />} label="Time" value={formatTime(event)} />
          <Row i={3} bg="bg-lav" icon={<School size={26} />} label="University" value={event.university} />
          <li className="sm:col-span-2">
            <ul><Row i={4} bg="bg-pink" icon={<MapPin size={26} />} label="Location" value={location} /></ul>
          </li>
        </ul>

        <div className="mt-8 flex flex-col items-stretch justify-center gap-4 sm:flex-row">
          <a href={mapUrl(event)} target="_blank" rel="noopener noreferrer"
            className="btn-pop inline-flex items-center justify-center gap-2 rounded-full bg-sky px-6 py-3 text-lg">
            <MapPin size={20} /> View Location
          </a>
          <a href={googleCalendarUrl(event)} target="_blank" rel="noopener noreferrer"
            className="btn-pop inline-flex items-center justify-center gap-2 rounded-full bg-sun px-6 py-3 text-lg">
            <CalendarPlus size={20} /> Add to Google Calendar
          </a>
        </div>
      </div>
    </section>
  )
}
