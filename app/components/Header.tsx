"use client";

import { useState } from "react";

const navLinks = [
  { label: "홈",      href: "/" },
  { label: "정치",    href: "#" },
  { label: "경제",    href: "#" },
  { label: "국제",    href: "#" },
  { label: "사회",    href: "#" },
  { label: "기술",    href: "#" },
  { label: "스포츠",  href: "#" },
  { label: "문화",    href: "#" },
  { label: "오시는 길", href: "/location" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* ── 네비게이션 ── */}
      <header style={{
        background: "#fff",
        borderBottom: "1px solid #e5e5e5",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}>
        <div className="container" style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 56,
        }}>
          {/* 로고 */}
          <a href="/" style={{
            fontSize: 24,
            fontWeight: 900,
            color: "#E24B4A",
            textDecoration: "none",
            letterSpacing: "-0.5px",
            flexShrink: 0,
          }}>
            NewsHub
          </a>

          {/* 카테고리 링크 — 데스크탑 */}
          <nav className="desktop-nav" style={{ gap: 0, overflow: "hidden" }}>
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          {/* 우측 아이콘 영역 */}
          <div style={{ display: "flex", alignItems: "center", gap: 4, flexShrink: 0 }}>
            {/* 검색 아이콘 — 44px 터치 영역 */}
            <button style={{
              background: "none", border: "none", cursor: "pointer",
              width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center",
              color: "#555", borderRadius: 8,
            }}>
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" strokeWidth="2" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            {/* 햄버거 — 44px 터치 영역, 모바일만 표시 */}
            <button
              className="mobile-menu-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="메뉴 열기"
              style={{
                background: "none", border: "none", cursor: "pointer",
                width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center",
                color: "#555", borderRadius: 8,
              }}
            >
              <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* 모바일 드롭다운 — 링크 높이 48px로 손가락 누르기 편하게 */}
        {menuOpen && (
          <nav className="mobile-nav" style={{
            borderTop: "1px solid #eee",
            background: "#fff",
            paddingBottom: 8,
          }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: 48,
                  padding: "0 20px",
                  fontSize: 15,
                  fontWeight: 500,
                  color: "#222",
                  textDecoration: "none",
                  borderBottom: "1px solid #f3f3f3",
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* ── 속보 바 ── */}
      <div style={{
        background: "#E24B4A",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        height: 38,
        flexShrink: 0,
      }}>
        <div style={{
          background: "#c0392b",
          padding: "0 14px",
          height: "100%",
          display: "flex",
          alignItems: "center",
          fontWeight: 700,
          fontSize: 12,
          whiteSpace: "nowrap",
          flexShrink: 0,
          letterSpacing: "0.5px",
        }}>
          속보
        </div>
        <div style={{ flex: 1, overflow: "hidden", height: "100%", display: "flex", alignItems: "center" }}>
          <span className="marquee" style={{ fontSize: 12, paddingLeft: 20 }}>
            서울시, 오늘 오후 2시 긴급 기자회견 예정 — 한반도 기상 이변 대응책 발표 &nbsp;&nbsp;|&nbsp;&nbsp; 코스피 2,700선 회복, 외국인 매수세 지속 &nbsp;&nbsp;|&nbsp;&nbsp; G7 정상회의 기후변화 공동선언 채택
          </span>
        </div>
      </div>
    </>
  );
}
