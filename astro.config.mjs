// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://emilianomt.github.io',
  // base: 'Web_Estatica_Cloud', 
  vite: {
    plugins: [tailwindcss()]
  }
});