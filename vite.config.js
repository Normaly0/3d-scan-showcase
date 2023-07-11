import { defineConfig } from 'vite'
import glsl from 'vite-plugin-glsl'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command, mode, ssrBuild }) => {
  if (command === 'serve') {
    return {
      plugins: [react(), glsl()]
    }
  } else {
    return {
      // base: 'https://normaly.net/3d-scan',
      plugins: [react(), glsl()]
    }
  }
})