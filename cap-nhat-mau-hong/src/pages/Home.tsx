import { Link } from 'react-router-dom'
import { GradCap } from '../components/Decor'
import { guests } from '../data/guests'

/** Trang chủ: khách cần dùng link riêng. Ở chế độ dev, liệt kê link của từng khách để bạn kiểm tra nhanh. */
export default function Home() {
  return (
    <main className="bg-dots grid min-h-screen place-items-center bg-sun/50 px-4 py-16 text-center">
      <div className="max-w-md rounded-[2.5rem] border-[3px] border-ink bg-white px-8 py-10 shadow-card">
        <div className="mx-auto w-fit"><GradCap size={80} /></div>
        <h1 className="hand mt-3 text-4xl font-extrabold">Tùng's Graduation Party</h1>
        <p className="mt-3 text-lg font-semibold text-ink/75">
          Thiệp mời được gửi riêng cho từng người. Hãy mở đúng đường link mà Tùng đã nhắn cho bạn nhé! 💌
        </p>
        {import.meta.env.DEV && (
          <div className="mt-6 rounded-2xl bg-lav/50 p-4 text-left">
            <p className="text-xs font-extrabold uppercase tracking-widest text-ink/60">Chỉ hiện ở chế độ dev</p>
            <ul className="mt-2 space-y-1 font-bold">
              {guests.map((g) => (
                <li key={g.id}><Link className="underline decoration-wavy underline-offset-4" to={`/invite/${g.id}`}>{g.name}</Link> <span className="text-ink/50">/invite/{g.id}</span></li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </main>
  )
}
