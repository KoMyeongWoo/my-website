import { Article } from "@/lib/news";
import Image from "next/image";

export default function NewsCard({ article }: { article: Article }) {
  return (
    <article className="news-card" style={{
      background: "#fff",
      borderRadius: 8,
      overflow: "hidden",
      border: "1px solid #eee",
    }}>
      {/* 이미지 */}
      <div className="card-img" style={{
        position: "relative",
        width: "100%",
        height: 180,
        background: "#f0f0f0",
        flexShrink: 0,
      }}>
        <Image
          src={article.image}
          alt={article.title}
          fill
          style={{ objectFit: "cover" }}
          unoptimized
        />
      </div>

      {/* 내용 */}
      <div className="card-body" style={{ padding: "14px 16px 16px" }}>
        <span style={{
          display: "inline-block",
          background: "#1a6dcc",
          color: "#fff",
          fontSize: 11,
          fontWeight: 700,
          padding: "2px 8px",
          borderRadius: 3,
          marginBottom: 8,
        }}>
          {article.category}
        </span>
        <h3 style={{
          fontSize: 15,
          fontWeight: 700,
          lineHeight: 1.5,
          color: "#1a1a1a",
          marginBottom: 6,
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical" as const,
          overflow: "hidden",
        }}>
          {article.title}
        </h3>
        <p style={{
          fontSize: 13,
          color: "#666",
          lineHeight: 1.6,
          marginBottom: 8,
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical" as const,
          overflow: "hidden",
        }}>
          {article.summary}
        </p>
        <span style={{ fontSize: 12, color: "#aaa" }}>{article.time}</span>
      </div>
    </article>
  );
}
