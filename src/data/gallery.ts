import type { GalleryPhoto } from './types'

/**
 * ẢNH KỶ NIỆM. Bỏ ảnh vào public/images/gallery/ và thêm 1 dòng ở đây.
 * Thêm bao nhiêu ảnh cũng được; xoá một dòng là ảnh biến mất.
 */
export const gallery: GalleryPhoto[] = [
  { id: 'g1', src: '/images/gallery/photo-01.svg', caption: 'Ngày nhập học 🎒', tilt: -4 },
  { id: 'g2', src: '/images/gallery/photo-02.svg', caption: 'Cà phê deadline ☕', tilt: 3 },
  { id: 'g3', src: '/images/gallery/photo-03.svg', caption: 'Team đồ án 💻', tilt: -2 },
  { id: 'g4', src: '/images/gallery/photo-04.svg', caption: 'Mùa thi căng thẳng 📚', tilt: 5 },
  { id: 'g5', src: '/images/gallery/photo-05.svg', caption: 'Đi chơi cùng lớp 🌈', tilt: -5 },
  { id: 'g6', src: '/images/gallery/photo-06.svg', caption: 'Chụp kỷ yếu 📸', tilt: 2 },
]
