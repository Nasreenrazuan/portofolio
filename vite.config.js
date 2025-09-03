import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/portofolio/", // Change to "/" if deploying to root
  plugins: [react()],
})