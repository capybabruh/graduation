import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Đổi `base` (hoặc đặt biến VITE_BASE) nếu deploy vào sub-path, ví dụ GitHub Pages: "/ten-repo/"
export default defineConfig({
  base: process.env.VITE_BASE ?? '/',
  plugins: [react(), tailwindcss()],
})
