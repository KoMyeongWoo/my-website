import { articles } from "@/lib/news";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NewsCard from "./components/NewsCard";
import Image from "next/image";

export default function Home() {
  const featured  = articles.find((a) => a.featured)!;
  const secondary = articles.filter((a) => !a.featured).slice(0, 2);
  const rest      = articles.filter((a) => !a.featured).slice(2);

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />

      <main style={{ flex: 1 }}>
        <div className="container" style={{ padding: "24px 16px 48px" }}>

          {/* ── 히어로 영역 ── */}
          <section className="hero-grid" style={{ marginBottom: 44 }}>

            {/* 메인 기사 */}
            <article className="hero-main" style={{
              position: "relative",
              borderRadius: 10,
              overflow: "hidden",
              cursor: "pointer",
              background: "#111",
            }}>
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                style={{ objectFit: "cover", opacity: 0.85 }}
                unoptimized
                priority
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.15) 55%, transparent 100%)" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 22px" }}>
                <span className="badge-red">{featured.category}</span>
                <h1 style={{ color: "#fff", fontSize: 20, fontWeight: 900, lineHeight: 1.45, margin: "8px 0 6px" }}>
                  {featured.title}
                </h1>
                <p style={{ color: "rgba(255,255,255,0.72)", fontSize: 13, lineHeight: 1.6 }} className="hero-summary">
                  {featured.summary}
                </p>
                <span style={{ color: "rgba(255,255,255,0.45)", fontSize: 12, marginTop: 6, display: "block" }}>
                  {featured.time}
                </span>
              </div>
            </article>

            {/* 서브 기사 2개 */}
            <div className="hero-sub-wrap" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {secondary.map((article) => (
                <article key={article.id} className="hero-sub" style={{
                  position: "relative",
                  borderRadius: 10,
                  overflow: "hidden",
                  cursor: "pointer",
                  background: "#111",
                  flex: 1,
                }}>
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    style={{ objectFit: "cover", opacity: 0.82 }}
                    unoptimized
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.84) 0%, rgba(0,0,0,0.08) 60%, transparent 100%)" }} />
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "12px 14px" }}>
                    <span className="badge-red" style={{ fontSize: 10 }}>{article.category}</span>
                    <h3 style={{ color: "#fff", fontSize: 14, fontWeight: 700, lineHeight: 1.45, margin: "5px 0 3px" }}>
                      {article.title}
                    </h3>
                    <span style={{ color: "rgba(255,255,255,0.45)", fontSize: 11 }}>{article.time}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ── 최신 뉴스 섹션 ── */}
          <section>
            <div style={{ display: "flex", alignItems: "center", marginBottom: 18, borderBottom: "2px solid #E24B4A", paddingBottom: 10 }}>
              <h2 style={{ fontSize: 17, fontWeight: 900, color: "#1a1a1a" }}>최신 뉴스</h2>
              <div style={{ flex: 1 }} />
              <a href="#" style={{ fontSize: 12, color: "#E24B4A", textDecoration: "none", fontWeight: 600, padding: "4px 0 4px 12px" }}>
                전체 보기 →
              </a>
            </div>

            <div className="card-grid">
              {rest.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: 32 }}>
              <button className="more-btn">뉴스 더 보기</button>
            </div>
          </section>
        </div>
      </main>

      <Footer />

      {/* 모바일 히어로 텍스트 조정 */}
      <style>{`
        @media (max-width: 768px) {
          .hero-summary { display: none; }
          .hero-sub-wrap { flex-direction: row !important; }
        }
      `}</style>
    </div>
  );
}
