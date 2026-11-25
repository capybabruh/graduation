import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import InvitationPage from './pages/InvitationPage'
import NotFound from './pages/NotFound'

// Trang chủ chỉ cần khi truy cập "/", nên tách chunk riêng để trang thiệp mời nhẹ hơn.
const Home = lazy(() => import('./pages/Home'))

export default function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invite/:id" element={<InvitationPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}
