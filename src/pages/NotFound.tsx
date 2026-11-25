import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { Cloud, Floaty, GradCap, Star } from '../components/Decor'

export default function NotFound() {
  useEffect(() => { document.title = 'Không tìm thấy thiệp 🥲' }, [])
  return (
    <main className="bg-dots relative grid min-h-screen place-items-center overflow-hidden bg-sky/40 px-4 py-16 text-center">
      <Floaty className="left-[8%] top-[15%]"><Cloud /></Floaty>
      <Floaty className="right-[10%] top-[22%]" delay={1}><Star size={40} fill="#FFB8C8" /></Floaty>
      <Floaty className="bottom-[18%] left-[14%]" delay={0.5}><Star size={30} /></Floaty>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -4 }} animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 140, damping: 12 }}
        className="relative max-w-md rounded-[2.5rem] border-[3px] border-ink bg-white px-8 py-12 shadow-card"
      >
        <motion.div className="mx-auto w-fit" animate={{ rotate: [-8, 8, -8] }} transition={{ duration: 2.5, repeat: Infinity }}>
          <GradCap size={90} />
        </motion.div>
        <h1 className="hand mt-4 text-4xl font-extrabold">Ơ, thiệp đâu rồi? 🥲</h1>
        <p className="mt-3 text-lg font-semibold text-ink/75">
          Đường link này chưa đúng hoặc chưa có trong danh sách khách mời. Bạn thử kiểm tra lại link Tùng gửi nhé,
          hoặc nhắn trực tiếp cho Tùng để được gửi lại thiệp!
        </p>
      </motion.div>
    </main>
  )
}
