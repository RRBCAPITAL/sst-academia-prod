// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true, // 🚫 Desactiva ESLint durante el build
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
