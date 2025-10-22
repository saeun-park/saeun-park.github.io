export interface ExperienceData {
  company: string;
  position: string;
  months: string;
  period: string;
  description: string[];
  logo: string;
}

export const experiences: ExperienceData[] = [
  {
    company: 'Toss',
    position: 'Vision Service Assistant',
    period: '2025.09 - present',
    months: '2 months',
    description: [
      'OCR 관련 모델 학습 데이터 구축 및 이미 품질 검수 업무 수행',
      '이미지 내 객체를 박스로 표시하는 Bounding Box 및 텍스트 및 객체에 대한 Annotation',
    ],
    logo: 'src/assets/images/Toss.jpg',
  },
  {
    company: `KB국민은행 IT's Your Life 6기`,
    position: '풀스택 개발자 양성과정',
    period: '2025.03 - 2025.08',
    months: '6 months',
    description: [
      '클론코딩 실습: 웹사이트를 클론코딩하며 HTML/CSS/JavaScript 기반 UI 구조 설계 및 동적 기능 구현',
      '가계부 웹 개발 프로젝트: Vue.js 기반 프론트엔드 구조 설계 및 상태 관리(Pinia) 적용',
      '금융 서비스 기획 및 개발: Vue.js 프론트엔드 구현, Spring 백엔드 및 MySQL 연동, 증여 시뮬레이션·금융상품 추천·챗봇 기능 개발',
      '협업 경험: Git/GitHub으로 버전 관리, Notion/Jira 활용 팀 일정·문서 관리 및 협업 진행',
    ],
    logo: 'src/assets/images/kb1.png',
  },
  {
    company: '통계청',
    position: '통계정보플랫폼과 인턴',
    period: '2024.05 - 2024.08',
    months: '3 months',
    description: [
      '챗봇 개발을 위한 AI 학습데이터 구축 및 라벨링 업무 수행 (https://ai.kosis.kr)',
      'PDF를 Machine Readable 형태로 변환, YOLOv5 기반 표·셀 단위 라벨링 수행',
      '총 770문서·7만 페이지·4.4만 표·3만 수식 처리로 AI 학습데이터 구축 과정 실무 경험 보유',
      '모델 생성 annotation 검수·큐레이션, Segmentation 기법으로 표 구조 재현 및 효율 향상',
      '구축 데이터 기반 학습 모델, annotation 97% · 표 인식 98% mAP 성능 달성에 기여',
    ],
    logo: 'src/assets/images/StatisticsKorea.svg',
  },
];
