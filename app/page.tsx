import { articles } from "@/lib/news";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NewsCard from "./components/NewsCard";
import Image from "next/image";

export default function Home() {
  const featured = articles.find((a) => a.featured)!;
  const secondary = articles.filter((a) => !a.featured).slice(0, 2);
  const rest = articles.filter((a) => !a.featured).slice(2);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8">

        {/* ───── 속보 티커 ───── */}
        <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-lg px-4 py-2 mb-8 overflow-hidden">
          <span className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded shrink-0">속보</span>
          <p className="text-sm text-gray-700 truncate">
            서울시, 오늘 오후 2시 긴급 기자회견 예정 — 한반도 기상 이변 대응책 발표
          </p>
        </div>

        {/* ───── 메인 히어로 (Featured + 2 secondary) ───── */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {/* 대형 피처드 카드 */}
          <article className="lg:col-span-2 group cursor-pointer">
            <div className="relative overflow-hidden rounded-xl aspect-video bg-gray-100">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
                unoptimized
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded mb-3 inline-block">
                  {featured.category}
                </span>
                <h1 className="text-white text-2xl md:text-3xl font-black leading-tight mb-2 group-hover:text-red-300 transition">
                  {featured.title}
                </h1>
                <p className="text-gray-300 text-sm line-clamp-2 hidden md:block">{featured.summary}</p>
                <p className="text-gray-400 text-xs mt-2">{featured.time}</p>
              </div>
            </div>
          </article>

          {/* 세컨더리 카드 2개 */}
          <div className="flex flex-col gap-6">
            {secondary.map((article) => (
              <article key={article.id} className="group cursor-pointer flex gap-4">
                <div className="relative w-28 h-20 shrink-0 rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                    unoptimized
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-bold text-red-600 uppercase">{article.category}</span>
                  <h3 className="font-bold text-gray-900 text-sm leading-snug mt-0.5 line-clamp-3 group-hover:text-red-600 transition">
                    {article.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">{article.time}</p>
                </div>
              </article>
            ))}

            {/* 광고 자리 */}
            <div className="flex-1 bg-gray-100 rounded-xl flex items-center justify-center min-h-[80px]">
              <p className="text-xs text-gray-400">광고</p>
            </div>
          </div>
        </section>

        {/* ───── 섹션 구분선 ───── */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-1 h-6 bg-red-600 rounded-full inline-block" />
          <h2 className="text-lg font-black text-gray-900">최신 뉴스</h2>
          <div className="flex-1 h-px bg-gray-200" />
          <a href="#" className="text-xs text-red-600 hover:underline font-medium">전체 보기 →</a>
        </div>

        {/* ───── 뉴스 카드 그리드 ───── */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {rest.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </section>

        {/* ───── 더 보기 버튼 ───── */}
        <div className="text-center mb-8">
          <button className="border-2 border-red-600 text-red-600 font-bold px-8 py-2.5 rounded-full hover:bg-red-600 hover:text-white transition">
            뉴스 더 보기
          </button>
        </div>

      </main>

      <Footer />
    </div>
  );
}
