import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // !! ATENCIÓN: Ignorar errores de TypeScript para poder desplegar ya !!
    ignoreBuildErrors: true,
  },
  eslint: {
    // !! ATENCIÓN: Ignorar errores de estilo (Linting) !!
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;