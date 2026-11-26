import { useEffect, useState } from 'react'
import { assetUrl } from '../lib/utils'
import { FallbackAvatar } from './Decor'

interface Props {
  src: string
  name: string
  className?: string
}

/**
 * Avatar tròn/bo góc, luôn `object-fit: cover` nên không bao giờ bị méo.
 * Nếu ảnh lỗi (sai đường dẫn, file hỏng...) sẽ tự chuyển sang avatar mặc định.
 */
export default function Avatar({ src, name, className = '' }: Props) {
  const [failed, setFailed] = useState(false)
  useEffect(() => setFailed(false), [src])

  return (
    <div className={`overflow-hidden bg-lav ${className}`}>
      {failed ? (
        <FallbackAvatar />
      ) : (
        <img
          src={assetUrl(src)}
          alt={`Avatar của ${name}`}
          className="h-full w-full object-cover"
          decoding="async"
          draggable={false}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  )
}
