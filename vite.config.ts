import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are required for this landing page.
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    cssCodeSplit: false,
  },
  server: {
    // OneDrive/Windows setups can miss fs events; polling keeps HMR reliable.
    watch: {
      usePolling: true,
      interval: 120,
    },
    // Prevent stale responses during local refreshes.
    headers: {
      "Cache-Control": "no-store",
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
