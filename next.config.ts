import type { NextConfig } from "next";

// NEXT_PUBLIC_BASE_PATH 는 GitHub Actions 워크플로우에서만 주입됨
// 로컬(dev/build) 에서는 빈 문자열 → basePath 없음
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",           // 정적 HTML로 내보내기
  trailingSlash: true,        // GitHub Pages 경로 호환
  basePath,                   // "/my-website" (GitHub Pages) 또는 "" (로컬)
  assetPrefix: basePath,      // CSS·JS·이미지 경로도 동일하게
  images: {
    unoptimized: true,        // next/image 정적 환경 호환
  },
};

export default nextConfig;
