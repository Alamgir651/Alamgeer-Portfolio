import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

// https://vite.dev/config/
export default defineConfig({
  // Ye line sabse zaroori hai GitHub Pages ke liye
  base: "/",
  plugins: [react()],
  build: {
    // Enable minification with esbuild (default, faster than terser)
    minify: "esbuild",
    // Optimize chunk size
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunk for react libraries
          "react-vendor": ["react", "react-dom"],
          // Icons chunk
          icons: ["react-icons/fa", "react-icons/si"],
          // Animation libraries
          animations: ["aos", "gsap"],
        },
      },
    },
    // Set chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Enable CSS code splitting
    cssCodeSplit: true,
  },
  // Optimize deps
  optimizeDeps: {
    include: ["react", "react-dom", "aos"],
  },
});
