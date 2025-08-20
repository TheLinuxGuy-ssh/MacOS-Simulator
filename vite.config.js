import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import compression from 'vite-plugin-compression';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
  define: {
    'process.env': env
  },
  plugins: [
    react(),
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
      deleteOriginFile: false
    })
  ],
  base: './',
  server: {
    allowedHosts: ['macos.thelinuxguy.tech']
  }
}
})