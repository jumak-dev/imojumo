import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    proxy: {
      '/api': {
<<<<<<< HEAD
        target: 'http://www.aladin.co.kr/ttb/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        secure: false,
        ws: true,
=======
        target: 'http://www.aladin.co.kr/ttb/api/ItemSearch.aspx',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
>>>>>>> 932e17791c89790d0021cf41dcc425adce8ec164
      },
    },
  },
});
