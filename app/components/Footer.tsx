export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <div className="text-2xl font-black text-white mb-2">NewsHub</div>
            <p className="text-sm max-w-xs">
              국내외 최신 뉴스를 빠르고 정확하게 전달합니다.
            </p>
          </div>
          <div className="flex gap-12 text-sm">
            <div>
              <p className="text-white font-semibold mb-2">섹션</p>
              {["정치", "경제", "국제", "사회", "기술", "스포츠"].map((c) => (
                <a key={c} href="#" className="block py-0.5 hover:text-white transition">{c}</a>
              ))}
            </div>
            <div>
              <p className="text-white font-semibold mb-2">안내</p>
              {["회사 소개", "광고 문의", "개인정보처리방침", "이용약관"].map((c) => (
                <a key={c} href="#" className="block py-0.5 hover:text-white transition">{c}</a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-xs text-center">
          © 2026 NewsHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
