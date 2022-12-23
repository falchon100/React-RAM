import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://falchon100.github.io/React-RAM/",
  plugins: [react()]
})
