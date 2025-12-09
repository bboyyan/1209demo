// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static', // 靜態輸出，無需 Node.js 伺服器
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  }
});