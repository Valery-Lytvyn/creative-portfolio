import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/creative-portfolio/",
  define: {
    "process.env": process.env,
  },
  build: {
    outDir: "dist",
  },
});
