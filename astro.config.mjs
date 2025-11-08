// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  vite: {
    server: {
      host: true,              // allows all network connections
      allowedHosts: ['all'],   // accept ngrok / external URLs
      port: 4321,              // optional, but good to fix the port
    },
  },
});