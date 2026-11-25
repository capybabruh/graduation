import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Confetti from '../components/Confetti'
import Countdown from '../components/Countdown'
import EventDetails from '../components/EventDetails'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import NavPills from '../components/NavPills'
import PhotoGallery from '../components/PhotoGallery'
import RSVP from '../components/RSVP'
import { event } from '../data/event'
import { gallery } from '../data/gallery'
import { getGuestById } from '../data/guests'
import NotFound from './NotFound'

export default function InvitationPage() {
  const { id } = useParams()
  const guest = getGuestById(id)

  useEffect(() => {
    document.title = guest ? `${guest.name}, bạn được mời dự Tùng's Graduation Party 🎓` : `Không tìm thấy thiệp 🥲`
    window.scrollTo(0, 0)
  }, [guest])

  if (!guest) return <NotFound />

  return (
    <main>
      {import.meta.env.DEV && event.isPlaceholder && (
        <div className="relative z-50 bg-ink px-4 py-2 text-center text-xs font-bold text-sun">
          ⚠️ DEV: hội trường trong src/data/event.ts vẫn là giá trị tạm. Hãy cập nhật rồi đặt isPlaceholder = false.
        </div>
      )}
      <NavPills />
      {/* key theo guest.id để đổi link /invite/x → /invite/y sẽ reset animation và RSVP */}
      <Hero key={guest.id} guest={guest} />
      <EventDetails event={event} />
      <Countdown event={event} />
      <PhotoGallery photos={gallery} />
      <RSVP key={`rsvp-${guest.id}`} guest={guest} />
      <Footer />
      <Confetti key={`confetti-${guest.id}`} />
    </main>
  )
}
