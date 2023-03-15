import dotenv from "dotenv";
dotenv.config();

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const { PORT = 3001 } = process.env;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    proxy: {
      "/api": {
        target: `http://localhost:${PORT}`,
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: "dist/client",
  },
});
