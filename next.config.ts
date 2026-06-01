import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",        // 정적 HTML로 내보내기
  trailingSlash: true,     // GitHub Pages 경로 호환
  images: {
    unoptimized: true,     // next/image를 정적 환경에서 사용 가능하게
  },
};

export default nextConfig;
