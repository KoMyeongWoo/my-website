"use client";

import { useState } from "react";
import { categories } from "@/lib/news";

const navLinks = ["홈", "정치", "경제", "국제", "사회", "기술", "스포츠", "문화"];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 sticky top-0 bg-white z-50 shadow-sm">
      {/* 상단 바 */}
      <div className="bg-red-600 text-white text-xs text-center py-1 font-semibold tracking-widest">
        BREAKING NEWS
      </div>

      {/* 로고 + 검색 */}
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-3">
        <div className="text-3xl font-black tracking-tight text-red-600 select-none">
          NewsHub
        </div>
        <div className="hidden md:flex items-center gap-2">
          <input
            type="text"
            placeholder="뉴스 검색..."
            className="border border-gray-300 rounded-full px-4 py-1.5 text-sm w-56 focus:outline-none focus:border-red-400"
          />
          <button className="bg-red-600 text-white rounded-full px-4 py-1.5 text-sm hover:bg-red-700 transition">
            검색
          </button>
        </div>
        {/* 모바일 햄버거 */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* 카테고리 네비게이션 */}
      <nav className="border-t border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
          <ul className="flex gap-0 text-sm font-medium whitespace-nowrap">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="block px-4 py-2.5 text-gray-700 hover:text-red-600 hover:bg-red-50 transition border-b-2 border-transparent hover:border-red-600"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* 모바일 메뉴 */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 pb-4">
          {navLinks.map((link) => (
            <a key={link} href="#" className="block py-2 text-gray-700 border-b border-gray-100 text-sm">
              {link}
            </a>
          ))}
          <div className="mt-3 flex gap-2">
            <input
              type="text"
              placeholder="뉴스 검색..."
              className="border border-gray-300 rounded-full px-4 py-1.5 text-sm flex-1 focus:outline-none"
            />
            <button className="bg-red-600 text-white rounded-full px-4 py-1.5 text-sm">검색</button>
          </div>
        </div>
      )}
    </header>
  );
}
