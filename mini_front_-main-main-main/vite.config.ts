import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteMockServe } from 'vite-plugin-mock'

export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    tailwindcss(),
    viteMockServe({
      mockPath: 'mock',
      localEnabled: command === 'serve',
    }),
  ],
  server: {
    proxy: {
      // 기존 프록시 설정 유지
      '/v1': {
        target: 'https://openapi.naver.com',
        changeOrigin: true,
      },
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      },
      // 8081 포트 프록시 추가
      '/backend': {
        target: 'http://localhost:8081', // 8081 포트로 연결
        changeOrigin: true,
        secure: false,
        // cookieDomainRewrite: { '10.125.121.190': '' },
        rewrite: path => path.replace(/^\/backend/, '') // 경로 재작성
      }
    },
  },
}))
