import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // Permite abrir o servidor de desenvolvimento pelo IP da rede local (ex.: no celular)
  allowedDevOrigins: ["192.168.15.21"],
  turbopack: {
    // Fixa a raiz no projeto: existe um package-lock.json solto em C:\Users\User
    root: __dirname,
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
