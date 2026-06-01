import Header from "../components/Header";
import Footer from "../components/Footer";

const mapUrl =
  "https://map.naver.com/p/entry/address/3zlkQy,2AyX2Z,%EA%B2%BD%EA%B8%B0%EB%8F%84%20%EC%88%98%EC%9B%90%EC%8B%9C%20%EC%98%81%ED%86%B5%EA%B5%AC%20%EC%98%81%ED%86%B5%EB%8F%99%20963-2?c=15.00,0,0,0,dh";

export default function LocationPage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />

      <main style={{ flex: 1 }}>
        <div className="container" style={{ padding: "32px 16px 60px" }}>

          {/* 타이틀 */}
          <div style={{ marginBottom: 24 }}>
            <h1 style={{ fontSize: 24, fontWeight: 900, color: "#1a1a1a", marginBottom: 8 }}>오시는 길</h1>
            <div style={{ width: 36, height: 3, background: "#E24B4A", borderRadius: 2 }} />
          </div>

          {/* 지도 + 정보 */}
          <div className="location-grid">

            {/* 네이버 지도 iframe */}
            <div style={{
              borderRadius: 12,
              overflow: "hidden",
              border: "1px solid #e5e5e5",
              boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
              lineHeight: 0,
            }}>
              <iframe
                src={mapUrl}
                width="100%"
                height="460"
                style={{ border: "none", display: "block" }}
                title="NewsHub 오시는 길 — 네이버 지도"
                allowFullScreen
              />
            </div>

            {/* 정보 카드 묶음 */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

              <InfoCard icon="📍" title="주소">
                <p style={{ fontWeight: 700, fontSize: 15, marginBottom: 8 }}>
                  경기도 수원시 영통구 영통동 963-2
                </p>
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    height: 36,
                    padding: "0 14px",
                    background: "#E24B4A",
                    color: "#fff",
                    fontSize: 12,
                    fontWeight: 700,
                    borderRadius: 6,
                    textDecoration: "none",
                  }}
                >
                  네이버 지도에서 보기 →
                </a>
              </InfoCard>

              <InfoCard icon="📞" title="전화번호">
                <a
                  href="tel:031-000-0000"
                  style={{ fontSize: 22, fontWeight: 900, color: "#1a1a1a", textDecoration: "none", display: "block", marginBottom: 4 }}
                >
                  031-000-0000
                </a>
                <p style={{ fontSize: 12, color: "#999" }}>긴급 상담: 010-0000-0000 (24시간)</p>
              </InfoCard>

              <InfoCard icon="🕐" title="영업시간">
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                  <tbody>
                    {[
                      { day: "평일",         time: "09:00 – 18:00", note: "",        open: true  },
                      { day: "토요일",       time: "09:00 – 13:00", note: "예약 필수", open: true  },
                      { day: "일요일·공휴일", time: "휴무",          note: "",        open: false },
                    ].map(({ day, time, note, open }) => (
                      <tr key={day} style={{ borderBottom: "1px solid #f0f0f0" }}>
                        <td style={{ padding: "9px 0", color: "#555", width: 110, fontSize: 13 }}>{day}</td>
                        <td style={{ padding: "9px 0", fontWeight: 600, color: open ? "#1a1a1a" : "#bbb" }}>
                          {time}
                          {note && <span style={{ fontSize: 11, color: "#E24B4A", marginLeft: 6 }}>({note})</span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </InfoCard>

              <InfoCard icon="🚇" title="교통편">
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <TransportItem type="지하철" color="#009640" desc="수인분당선 영통역 1번 출구 도보 5분" />
                  <TransportItem type="버스"   color="#0066cc" desc="영통사거리 정류장 하차 — 7, 7-2, 82번" />
                  <TransportItem type="자가용" color="#555555" desc="영통IC 진출 후 영통로 방면 5분 / 건물 내 주차 가능" />
                </div>
              </InfoCard>

            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* 모바일: 지도 높이 축소 */}
      <style>{`
        @media (max-width: 768px) {
          iframe { height: 300px !important; }
        }
      `}</style>
    </div>
  );
}

function InfoCard({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) {
  return (
    <div style={{
      background: "#fafafa",
      border: "1px solid #eee",
      borderRadius: 10,
      padding: "18px 20px",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
        <span style={{ fontSize: 18 }}>{icon}</span>
        <h3 style={{ fontSize: 14, fontWeight: 700, color: "#333" }}>{title}</h3>
      </div>
      {children}
    </div>
  );
}

function TransportItem({ type, color, desc }: { type: string; color: string; desc: string }) {
  return (
    <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
      <span style={{
        background: color,
        color: "#fff",
        fontSize: 11,
        fontWeight: 700,
        padding: "3px 8px",
        borderRadius: 3,
        whiteSpace: "nowrap",
        flexShrink: 0,
        marginTop: 2,
      }}>
        {type}
      </span>
      <span style={{ fontSize: 13, color: "#444", lineHeight: 1.6 }}>{desc}</span>
    </div>
  );
}
