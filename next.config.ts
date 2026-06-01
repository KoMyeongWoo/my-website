import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",                                    // 정적 HTML로 내보내기
  trailingSlash: true,                                 // GitHub Pages 경로 호환
  basePath: isProd ? "/my-website" : "",               // GitHub Pages 서브경로 대응
  assetPrefix: isProd ? "/my-website/" : "",           // CSS·JS·이미지 경로 prefix
  images: {
    unoptimized: true,                                 // next/image 정적 환경 호환
  },
};

export default nextConfig;
