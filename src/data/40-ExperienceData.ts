import TossLogo from '../assets/images/experiences/Toss.jpg';
import StatisticsLogo from '../assets/images/experiences/StatisticsKorea.svg';

export interface ExperienceData {
  company: string;
  period: string;
  description: string[];
  logo: string;
}

export const experiences: ExperienceData[] = [
  {
    company: '비바리퍼블리카 Vision Service Assistant',
    period: '2025.09 - 2025.12',
    description: [
      '라벨링 과정에서 위조 이미지가 정상 데이터로 포함되는 취약점을 발견하고, 위조 데이터 3,000장을 직접 설계·생성',
      '데이터 수집부터 전처리, 라벨링까지 이어지는 파이프라인을 자동화하여 학습데이터 구축 효율 향상',
      'ML 모델을 모바일 환경에서 검증할 수 있는 안드로이드 앱을 개발하여 실제 사용 환경 기반 성능 확인 지원',
    ],
    logo: TossLogo,
  },
  {
    company: '통계청 통계정보플랫폼과 인턴',
    period: '2024.05 - 2024.08',
    description: [
      '770개 통계 보고서를 분석 가능한 기계가독형 데이터로 변환',
      'YOLOv5 기반 표·수식 인식 결과를 검수·보정하여 데이터 품질 향상',
      '문서의 h1~h4 계층 구조를 설계하고 JSON으로 변환해 4.4만 개 표, 3만 개 수식을 체계적으로 구조화',
    ],
    logo: StatisticsLogo,
  },
];
