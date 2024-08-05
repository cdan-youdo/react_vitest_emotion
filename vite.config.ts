import { defineConfig, loadEnv } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(vite => ({
  base: '/',
  plugins: [
    tsconfigPaths(),
    react({ jsxImportSource: '@emotion/react' })
  ],
  define: {
    // This is a workaround so we don't have to get ENV variables from a different location to create-react-app
    // If we commit to Vite long term we should switch to import.meta.env instead of process.env and prefix our variables with VITE_ instead of REACT_APP_
    'process.env': {
      'NODE_ENV': process.env.NODE_ENV,
      ...loadEnv(vite.mode, process.cwd(), 'REACT_APP'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
        ws: true,
      },
      '/rails/active_storage': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      }
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/vitest-setup.ts',
  },
}))