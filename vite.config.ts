import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";
// get absolute path
const resolve = (relativePath: string) => path.resolve(__dirname, relativePath);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve("src"), // path alias
    },
  },
  server: {
    host: "0.0.0.0", // listen on IP address
  },
})
