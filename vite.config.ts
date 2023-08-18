import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "tailwindcss";
import { TailwindCSSVitePlugin } from "tailwindcss-vite-plugin";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/interpersonal-resolver/",
  plugins: [react(), TailwindCSSVitePlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
});
