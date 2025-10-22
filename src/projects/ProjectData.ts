export interface ProjectData {
  title: string;
  period: string;
  tools: string[];
  link: string;
  role: string;
  content: string;
  achievement: string;
  bgColor: string;
}

export const projects: ProjectData[] = [
  {
    title: '시니어 맞춤형 노후 설계 서비스 기획 및 개발',
    period: '2025.07 - 2025.08',
    tools: ['Vue.js', 'Tailwind CSS', 'Spring', 'Java', 'MYSQL', 'MyBatis'],
    link: 'https://github.com',
    role: 'PM & 프론트엔드 개발자',
    content:
      '내용 작성 내용 작성 내용 작성 내용 작성 내용 작성 내용 작성 내용 작성 내용 작성 내용 작성 내용 작성 내용 작성',
    achievement:
      '성과 작성 성과 작성 성과 작성 성과 작성 성과 작성 성과 작성 성과 작성',
    bgColor: 'bg-gray-800',
  },
  {
    title: 'MQL 데이터 기반 B2B 영업기회 창출 예측 모델 개발',
    period: '2024.01 - 2024.02',
    tools: ['Python', 'Sckit-learn'],
    link: 'https://github.com',
    role: 'EDA & 데이터 전처리 & ML 모델링',
    content:
      '고객 데이터를 분석하여 영업 전환율 예측 모델 구축 내용 작성 내용 작성 내용 작성 내용 작성 내용 작성 내용 작성 내용 작성',
    achievement: '상위 6.6% 성과 달성',
    bgColor: 'bg-gray-800',
  },
  {
    title: '고객 대출등급 분류',
    period: '2023.09 - 2023.12',
    tools: ['Python', 'Sckit-learn'],
    link: 'https://github.com',
    role: 'EDA & 데이터 전처리 & ML 모델링',
    content:
      '내용 작성 내용 작성 내용 작성 내용 작성 내용 작성 내용 작성 내용 작성 내용 작성 내용 작성 내용 작성 내용 작성',
    achievement: '도메인 지식의 중요성 체감',
    bgColor: 'bg-gray-800',
  },
  {
    title: '서울시 기온 예측',
    period: '2023.01 - 2023.04',
    tools: ['Python', 'Scikit-learn', 'Autogluon TimeSeries'],
    link: 'https://github.com',
    role: 'EDA & 데이터 전처리 & ML 모델링',
    content:
      '내용 작성 내용 작성 내용 작성 내용 작성 내용 작성 내용 작성 내용 작성 내용 작성 내용 작성 내용 작성 내용 작성',
    achievement: 'AutoML 지식 습득, 상위 몇퍼센트였더라',
    bgColor: 'bg-gray-800',
  },
];
