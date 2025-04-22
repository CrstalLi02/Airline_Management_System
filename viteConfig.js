// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // 拦截所有以 /api 开头的请求
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        // 把 /api 前缀去掉，映射到后端的 /procedures/...
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
