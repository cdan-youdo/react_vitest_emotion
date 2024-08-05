import { defineConfig, loadEnv } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react-swc'
import browserslistToEsbuild from 'browserslist-to-esbuild'

// https://vitejs.dev/config/
export default defineConfig(vite => ({
  base: '/',
  plugins: [
    tsconfigPaths(),
    react({ jsxImportSource: '@emotion/react' })
  ],
  build: {
    // Read the target browser configuration from browserslist and pass the
    // correct browsers to esbuild's target option. See https://github.com/marcofugaro/browserslist-to-esbuild
    target: browserslistToEsbuild(),
  },
  esbuild: {
    // ESBuild allows you to specify a list of “supported” features that will
    // be prioritized over the compilation target coming from `build.target`.
    // See https://esbuild.github.io/api/#supported
    supported: {
    },
  },
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