export type Article = {
  id: number;
  category: string;
  title: string;
  summary: string;
  image: string;
  time: string;
  featured?: boolean;
};

export const articles: Article[] = [
  {
    id: 1,
    category: "정치",
    title: "정부, 내년도 예산안 역대 최대 규모 편성 확정",
    summary:
      "기획재정부는 내년도 예산안을 올해보다 5.2% 증가한 700조 원 규모로 편성했다고 밝혔다. 복지·교육·국방 분야에 중점 배분될 예정이다.",
    image: "https://picsum.photos/seed/news1/800/500",
    time: "2시간 전",
    featured: true,
  },
  {
    id: 2,
    category: "경제",
    title: "코스피, 외국인 매수세에 2,700선 회복",
    summary:
      "코스피가 외국인 투자자들의 강한 매수세에 힘입어 2,700선을 다시 탈환했다. 반도체·자동차 업종이 상승을 주도했다.",
    image: "https://picsum.photos/seed/news2/800/500",
    time: "3시간 전",
  },
  {
    id: 3,
    category: "국제",
    title: "G7 정상회의, 기후변화 대응 공동선언문 채택",
    summary:
      "주요 7개국 정상들이 2035년까지 탄소 배출량 50% 감축에 합의했다. 개발도상국 지원 기금도 별도 조성하기로 했다.",
    image: "https://picsum.photos/seed/news3/800/500",
    time: "4시간 전",
  },
  {
    id: 4,
    category: "사회",
    title: "전국 폭염 특보 확대…서울 체감온도 38도",
    summary:
      "기상청은 오늘 전국 대부분 지역에 폭염 경보를 발령했다. 서울의 체감온도는 38도까지 오를 것으로 예보됐다.",
    image: "https://picsum.photos/seed/news4/800/500",
    time: "1시간 전",
  },
  {
    id: 5,
    category: "기술",
    title: "삼성전자, 차세대 AI 반도체 양산 성공 발표",
    summary:
      "삼성전자가 3나노 공정 기반의 AI 전용 반도체 양산에 성공했다고 공식 발표했다. 내년 상반기 글로벌 시장 공급 예정이다.",
    image: "https://picsum.photos/seed/news5/800/500",
    time: "5시간 전",
  },
  {
    id: 6,
    category: "스포츠",
    title: "손흥민, 시즌 15호 골…토트넘 유럽대항전 진출 확정",
    summary:
      "손흥민이 후반 추가시간 극적인 결승골을 터뜨리며 토트넘의 유럽대항전 진출을 이끌었다. 그는 이번 시즌 팀 내 최다 득점자다.",
    image: "https://picsum.photos/seed/news6/800/500",
    time: "30분 전",
  },
  {
    id: 7,
    category: "문화",
    title: "한국 영화 '새벽빛', 칸 영화제 황금종려상 수상",
    summary:
      "박지수 감독의 영화 '새벽빛'이 제77회 칸 국제영화제에서 최고 영예인 황금종려상을 수상했다. 한국 영화의 두 번째 수상이다.",
    image: "https://picsum.photos/seed/news7/800/500",
    time: "6시간 전",
  },
  {
    id: 8,
    category: "건강",
    title: "하루 30분 걷기, 심장병 위험 40% 낮춘다",
    summary:
      "국립보건연구원의 10년 추적 연구 결과, 하루 30분 이상 걷는 사람은 심장병 발병 위험이 40% 낮은 것으로 나타났다.",
    image: "https://picsum.photos/seed/news8/800/500",
    time: "7시간 전",
  },
];

export const categories = ["전체", "정치", "경제", "국제", "사회", "기술", "스포츠", "문화", "건강"];
