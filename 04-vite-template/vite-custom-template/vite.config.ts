import { defineConfig } from "vite";
import pluginReact from "@vitejs/plugin-react";
import {fileURLToPath, URL} from 'node:url';

export default defineConfig({
  base: "/",
  server: {
    host: "localhost",
    port: 3000,
  },
  plugins: [
    pluginReact({
      jsxRuntime: "automatic", // jsx를 읽게 해줌
    }),
  ],

  resolve:{
    alias:{
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
