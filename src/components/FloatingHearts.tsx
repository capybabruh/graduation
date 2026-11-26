const HEARTS = ['💗', '🌹', '💕', '🌷', '💖', '🌹', '💘', '🌷']

/** Tim bay lên liên tục phía sau nội dung (chỉ dùng cho thiệp style 'love'). Tắt khi người dùng giảm chuyển động. */
export default function FloatingHearts({ count = 16 }: { count?: number }) {
  return (
    <div aria-hidden className="floating-hearts pointer-events-none fixed inset-0 z-30 overflow-hidden">
      {Array.from({ length: count }, (_, i) => (
        <span
          key={i}
          className="floating-heart"
          style={{
            left: `${(i * 37 + 8) % 96}%`,
            fontSize: `${16 + ((i * 7) % 18)}px`,
            animationDuration: `${9 + ((i * 5) % 9)}s`,
            animationDelay: `-${(i * 3) % 14}s`,
          }}
        >
          {HEARTS[i % HEARTS.length]}
        </span>
      ))}
    </div>
  )
}
