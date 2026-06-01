export default function Footer() {
  return (
    <footer style={{ background: "#1a1a1a", color: "#ccc", marginTop: 64 }}>
      <div className="container" style={{ padding: "44px 16px 20px" }}>

        <div className="footer-grid">
          {/* 로고 + 설명 */}
          <div>
            <div style={{ fontSize: 22, fontWeight: 900, color: "#E24B4A", marginBottom: 10 }}>
              NewsHub
            </div>
            <p style={{ fontSize: 13, color: "#888", lineHeight: 1.7 }}>
              국내외 최신 뉴스를<br />빠르고 정확하게 전달합니다.
            </p>
          </div>

          {/* 섹션 링크 */}
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#fff", marginBottom: 12 }}>섹션</p>
            {["정치", "경제", "국제", "사회", "기술", "스포츠", "문화"].map((c) => (
              <a key={c} href="#" className="footer-link">{c}</a>
            ))}
          </div>

          {/* 안내 링크 */}
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#fff", marginBottom: 12 }}>안내</p>
            {["회사 소개", "광고 문의", "개인정보처리방침", "이용약관", "제보하기"].map((c) => (
              <a key={c} href="#" className="footer-link">{c}</a>
            ))}
          </div>
        </div>

        <div style={{
          borderTop: "1px solid #2e2e2e",
          marginTop: 36,
          paddingTop: 20,
          textAlign: "center",
          fontSize: 12,
          color: "#555",
        }}>
          © 2026 NewsHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
