import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),   // Ahora "@" apunta a "src/"
    },
  },
  server: {
    proxy: {
      // /api/... → localhost:8081/api/...
      "/api": {
        target: "http://localhost:8081",
        changeOrigin: true,
        secure: false,
        rewrite: (p) => p.replace(/^\/api/, "/api"),
      },
    },
  },
});