import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  base: './Vite-Nextui-Flask',
  plugins: [react()],
  build: {
    assetsDir: 'static',
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
    cors: true,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:3001/",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
})
