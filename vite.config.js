import reactRefresh from '@vitejs/plugin-react-refresh';
import path from "path";
import { defineConfig } from 'vite';
/**
 * https://vitejs.dev/config/
 */
export default defineConfig({
  plugins: [reactRefresh()],
  server: {
    open: '/index.html',
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./"),
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
