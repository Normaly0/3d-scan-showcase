import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command, mode, ssrBuild }) => {
  if (command === 'serve') {
    return {
      plugins: [react()]
    }
  } else {
    return {
      base: 'https://normaly.net/3d-scan',
      plugins: [react()]
    }
  }
})