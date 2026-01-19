export interface EtcActivity {
  period: string;
  title: string;
  details?: string;
}

export const etcActivities: EtcActivity[] = [
  // 교육 및 수료
  {
    period: '2025.03 - 2025.08',
    title: "[K-Digital Training] KB IT's Your Life 6기",
    details:
      'HTML/CSS/JavaScript 클론코딩, Vue.js 기반 가계부 웹 개발, Spring/MySQL 연동 금융 서비스 개발, Git/GitHub/Notion/Jira 활용 협업 경험',
  },
  {
    period: '2024.01 - 2024.02',
    title: 'LG Aimers/Data Intelligence 4기',
    details:
      'AI 윤리, 머신러닝 기초, 지도학습, 인과추론 등 온라인 교육 수료 및 B2B 영업 전환 예측 모델 개발 해커톤 참여',
  },
  {
    period: '2024.04',
    title: '실무에서 사용하는 엑셀 기초 수료',
  },

  // 활동 내역
  {
    period: '2025.03 - 2025.08',
    title: "KB IT's Your Life 6기 최우수 기자단",
    details:
      '프로그램 홍보 콘텐츠 제작, TIL 주 3회 이상 작성으로 학습 기록 공유, 전체 기자단 중 최우수 기자단 선정 (블로그: ajsklaoao.tistory.com)',
  },
  {
    period: '2024.09 - 2025.02',
    title: '헝가리 ELTE 교환학생',
    details:
      '알고리즘, 데이터베이스, 다변량 통계 수강 및 R 기반 World Happiness Report 2024 데이터 분석 프로젝트 수행',
  },
  {
    period: '2022.09 - 2023.08',
    title: '교내 빅데이터 분석 중앙동아리(IBAS) 총무',
    details:
      '동아리 예산 관리 및 투명한 회계 운영, 장학재단 후원 유치, 선후배 교류 프로그램 기획·운영, 세미나·스터디 예산 편성',
  },
  {
    period: '2022.09 - 2023.02',
    title: '통계이론연구실 학부연구생 (PI: 온일상)',
    details:
      'R 시뮬레이션을 활용한 회귀모형 통계적 문제 분석, 모수 추정 민감도 실험, 이상치 탐지 기법 실습, 논문 리뷰 및 발표',
  },
  {
    period: '2022.09 - 2023.02',
    title: '경영정보연구실 학부연구생 (PI: 허원창)',
  },
  {
    period: '2022.08 - 2024.03',
    title: '머신러닝 스터디 (IBAS)',
  },
  {
    period: '2023.09 - 2024.02',
    title: '인하대학교 입학팀 근로',
  },

  // 장학금
  {
    period: '2023.09',
    title: '학업우수장학금 (최태성장학회)',
    details:
      '수업 성실 참여, 우수한 학업 성적, 동아리 운영 기여를 바탕으로 선발',
  },
  {
    period: '2023.06',
    title: '성적우수장학금 (수원시장학재단)',
    details:
      '학점 12학점 이상 취득 및 4.5 만점 기준 4.0 이상 달성, 성적 우수자로 선발',
  },
];
