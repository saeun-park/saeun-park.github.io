import toss_mobile from '../assets/images/projects/toss_mobile.png';
import nohoodorak from '../assets/images/projects/nohoodorak.jpg';
import finto from '../assets/images/projects/finto.jpg';
import aimers from '../assets/images/projects/aimers.png';
import loan from '../assets/images/projects/loan.jpeg';
import temperature from '../assets/images/projects/temperature.jpeg';
import price from '../assets/images/projects/price.png';
import ifood from '../assets/images/projects/ifood.png';
// import ht from '../assets/images/projects/ht.jpeg';
import start0 from '../assets/images/projects/nohoodorak_details/start0.jpg';
import invest0 from '../assets/images/projects/nohoodorak_details/invest0.jpg';
import inherit0 from '../assets/images/projects/nohoodorak_details/inherit0.jpg';
import live0 from '../assets/images/projects/nohoodorak_details/live0.jpg';
import finto_main from '../assets/images/projects/finto_main.png';
import lg_aimers_1 from '../assets/images/projects/lg_aimers_ai_practice_completion.jpg';
import lg_aimers_2 from '../assets/images/projects/lg_aimers_hackathon_certificate.jpg';
import loan_eda_1 from '../assets/images/projects/loan_details/loan_eda_1.png';
import loan_eda_2 from '../assets/images/projects/loan_details/loan_eda_2.png';
import loan_eda_3 from '../assets/images/projects/loan_details/loan_eda_3.png';
import loan_eda_4 from '../assets/images/projects/loan_details/loan_eda_4.png';

export type ProjectDetail =
  | {
      type: 'text';
      title: string;
      description: string;
    }
  | {
      type: 'image';
      src: string;
      alt?: string;
    }
  | {
      type: 'image-gallery';
      images: { src: string; alt?: string }[];
    }
  | {
      type: 'image-grid';
      images: { src: string; alt?: string }[];
    };

export interface ProjectData {
  title: string;
  period: string;
  description: string; // for card
  tools: string[];
  link: string;
  overview: string;
  teamSize: string;
  role: string;
  details: ProjectDetail[];
  category: '기획/개발' | 'ML 모델링' | '데이터 분석';
  thumbnail?: string;
  isImportant?: boolean;
}

export const projects: ProjectData[] = [
  // ################################ 신분증 진위확인 테스트 앱 개발
  {
    title: '신분증 진위확인 테스트 앱 개발',
    period: '2025.11 - 2025.12',
    thumbnail: toss_mobile,
    description:
      '사내 ML 팀의 신분증 위조 탐지 모델을 실제 모바일 환경에서 테스트할 수 있도록 Android 앱을 자발적으로 기획·개발하여, 모델 성능 검증 프로세스를 구축했습니다.',
    tools: ['Kotlin', 'TensorFlow Lite', 'CameraX', 'Jetpack Compose'],
    link: '',
    overview:
      '금융권 KYC 프로세스에 적용할 ML 모델을 실제 촬영 환경에서 테스트할 수 있는 도구가 필요했으나, 별도의 앱 개발 리소스가 없는 상황에서 이를 해결하기 위해 테스트 앱 개발을 제안하고 완성했습니다.',
    teamSize: '1명',
    role: '앱 기획 및 개발',
    category: '기획/개발',
    isImportant: true,
    details: [
      {
        type: 'text',
        title: '프로젝트 배경 및 목표',
        description: `• ML 팀이 개발한 신분증 위조 탐지 모델을 실제 모바일 환경에서 테스트할 수 있는 도구 필요
• 다양한 조명, 각도, 디바이스 환경에서의 모델 성능 검증
• ML 모델의 실사용 가능성을 빠르게 검증할 수 있는 프로토타입 개발`,
      },
      {
        type: 'text',
        title: '주요 구현 내용',
        description: `[핵심 기능]
  • TensorFlow Lite 기반 신분증 위조 탐지 모델을 Android에 통합
  • CameraX로 실시간 신분증 촬영 및 갤러리 이미지 분석 기능 구현
  • 가이드 프레임 제공으로 일관된 촬영 품질 확보
  • 위조 탐지 결과 및 신뢰도를 직관적으로 표시하는 UI 개발
    
[기술 스택]
  • Kotlin + Jetpack Compose로 UI 구현
  • TensorFlow Lite로 모델 추론 및 전처리 파이프라인 구현
  • 비동기 처리로 UI 반응성 유지`,
      },
      {
        type: 'text',
        title: '구현 과정 및 해결',
        description: `[1] TFLite 모델 통합 학습 과정
  • NSFW 분류 모델: 기본 전처리(리사이징, 정규화) 파이프라인 이해
  • ViT (Vision Transformer): ImageNet 분류로 Transformer 구조 학습
  • YOLO 객체 탐지: 복잡한 출력 파싱 및 NMS(Non-Maximum Suppression) 알고리즘 구현
  • 최종적으로 실제 신분증 위조 탐지 모델 성공적으로 통합
    
[2] 실사용 환경 대응
  • CameraX와 Jetpack Compose를 통합하여 카메라 기능 구현
  • 비동기 처리로 추론 중에도 UI가 끊기지 않도록 최적화
  • 이미지 처리 후 메모리 즉시 해제하여 안정성 확보
    
[3] 성능 최적화
  • 평균 추론 시간 200ms 이하로 실시간 사용 가능한 수준 달성
  • 다양한 촬영 조건(조명, 각도)에서 안정적으로 동작하도록 개선`,
      },
      {
        type: 'text',
        title: '프로젝트 성과',
        description: `• ML 팀에 실제 모바일 환경 테스트 도구 제공
• 다양한 촬영 조건에서의 모델 성능 데이터 수집 가능
• 프로토타입 단계에서 실사용 이슈 조기 발견 및 피드백 제공
• 4가지 타입의 ML 모델(분류, Transformer, 객체 탐지) 통합 경험 확보`,
      },
    ],
  },
  // ################################ 시니어 맞춤형 노후 설계 서비스 개발
  {
    title: '시니어 맞춤형 노후 설계 플랫폼 기획 및 개발',
    period: '2025.07 - 2025.08',
    thumbnail: nohoodorak,
    description:
      'KB국민은행 부트캠프에서 초고령사회 시니어의 자산관리, 증여/상속, 생활편의를 통합 지원하는 웹앱을 PM 겸 프론트엔드 개발자로 기획·개발했습니다.',
    tools: [
      'Vue.js',
      'TypeScript',
      'Pinia',
      'TailwindCSS',
      'Storybook',
      'Spring',
      'MyBatis',
      'MySQL',
      'Figma',
    ],
    link: 'https://github.com/jejugom',
    overview:
      '초고령사회 진입에 따른 시니어의 디지털 격차 해소와 통합 자산 관리 니즈를 해결하기 위해, 자산관리·증여/상속·생활편의 기능을 하나의 플랫폼에서 제공하는 시니어 친화적 금융 서비스를 기획하고 개발했습니다.',
    teamSize: '6명',
    isImportant: true,
    role: 'PM & 프론트엔드 개발자',
    category: '기획/개발',
    details: [
      {
        type: 'text',
        title: '프로젝트 배경 및 목표',
        description: `• 초고령사회 진입으로 시니어의 금융 니즈 증가하나 디지털 접근성은 낮음
• 자산관리, 증여/상속, 생활편의 서비스가 분산되어 있어 통합 플랫폼 필요
• 시니어도 쉽게 사용할 수 있는 직관적 UI/UX와 맞춤형 금융 서비스 제공 목표`,
      },
      {
        type: 'text',
        title: '주요 기능',
        description: ``,
      },
      {
        type: 'image-gallery',
        images: [
          {
            src: start0,
            alt: '서비스 시작 화면',
          },
          {
            src: invest0,
            alt: '자산 관리 화면',
          },
          {
            src: inherit0,
            alt: '증여/상속 시뮬레이션 화면',
          },
          {
            src: live0,
            alt: '생활 편의 서비스 화면',
          },
        ],
      },
      {
        type: 'text',
        title: '담당 역할',
        description: `[기능 개발]
• 증여/상속 시뮬레이션 로직 설계 및 구현  
  • 문제: 다양한 자산/수증자 조합에서 너무 많은 절세 전략이 노출되어 사용자 혼란 발생
  • 해결: 전략을 3단계 우선순위(Tier)로 분류하고 동적 가중치 알고리즘 적용
  • 결과: 하이브리드 정렬(우선순위→가중치)로 상위 7개 핵심 전략만 노출하여 사용자 이해도 향상

• 맞춤형 금융상품 추천 시스템 설계 및 구현
  • 사용자의 투자 성향, 자산 정보를 벡터화하여 코사인 유사도 기반 추천 시스템 구현
  • 금융상품과 사용자 프로필 간 유사도 계산으로 개인화된 상품 추천

• 시니어 친화적 UI/UX 구현 (Vue.js, TypeScript, TailwindCSS)
  • 큰 글씨, 명확한 아이콘, 간결한 네비게이션으로 시니어의 디지털 접근성 향상
  • 클릭 중심의 단순하고 직관적인 화면 구성
  • 튜토리얼 및 단계별 도움말로 초기 사용 장벽 해소
  • 가족과의 정보 공유 기능으로 세대 간 연계 강화

[PM 역할]
• 서비스 기획, 와이어프레임 제작, 회의록 작성 및 의사결정 문서화
• Jira Sprint 운영: 업무 티켓화, 담당자 지정, 일일 현황 공유, Sprint 회고
• Notion 기반 팀 정보 통합 관리 (일정표, 회의록, 산출물)
• Git Flow 전략 적용 및 Jira-Github 연동으로 이슈 추적 자동화`,
      },
      {
        type: 'text',
        title: '프로젝트 성과',
        description: `• 기획부터 개발, 배포까지 전 과정 경험하며 End-to-End 프로젝트 수행 역량 확보
• KB국민은행과의 실질적 연계 가능성을 고려한 서비스 확장 계획 수립
  • O2O 연계: 온라인 계획 수립 → 오프라인(KB 시니어라운지) 전문 상담 연결
  • 은행 예약 기능 확장: KB 시스템과 실시간 연동 구조 설계
  • 포인트리 전환 시스템: 노후도락 챌린지 보상 → KB 통합 포인트 전환 설계
  • 생태계 확장: 법무법인, 세무사, 복지기관 등 외부 파트너 연계 방안 기획`,
      },
    ],
  },
  // ################################ 외국인 이주민 맞춤형 금융 멘토링 플랫폼 개발
  {
    title: '외국인 이주민 맞춤형 금융 멘토링 플랫폼 기획 및 프로토타입 개발',
    period: '2025.08 - 2025.09',
    thumbnail: finto,
    description:
      '디지털 금융약자인 외국인 이주민을 위한 멘토링 기반 금융 교육 플랫폼을 기획하고 프로토타입을 개발하여 해커톤 장려상을 수상했습니다.',
    tools: ['Figma', 'React', 'JavaScript'],
    link: '',
    overview:
      '국내 거주 외국인 265만 명이 겪는 금융 접근성 문제를 해결하기 위해, 같은 문화권 멘토와 1:1 매칭되어 실전 금융 챌린지를 함께 수행하는 멘토링 기반 금융 교육 플랫폼을 기획하고 프로토타입을 개발했습니다.',
    teamSize: '6명',
    role: 'PM & 프로토타입 개발',
    category: '기획/개발',
    details: [
      { type: 'image', src: finto_main, alt: 'FinTo 서비스 화면' },
      {
        type: 'text',
        title: '프로젝트 배경 및 문제 정의',
        description: `• 국내 거주 외국인 약 265만 명(전체 인구의 5% 이상), 본격적인 다문화 사회 진입
• 외국인 어려움 TOP 3: 언어 장벽(29.8%), 외로움(13.0%), 금융+경제(12.5%)
• 기존 지원 체계의 한계: 브로슈어, 다국어 웹사이트 등 정보 중심 안내에 치중, 실행 방법에 대한 이해 부족
• 목표: 정보 제공이 아닌 '경험 기반 실행형 학습'으로 실질적 금융 자립 지원`,
      },
      {
        type: 'text',
        title: '서비스 기획',
        description: `[핵심 컨셉 및 차별화 전략]
  • 경쟁 서비스 분석 (Bravo, Glow, Kommunity)를 통한 차별화 포인트 도출
  • P2P 멘토링 모델: 같은 문화권 선배 이주민이 멘토가 되어 문화적 공감대 형성
  • 실전 금융 챌린지: 계좌 개설, 자동이체, 월세 송금 등 단계별 미션 수행
  • 멘티→멘토 성장 구조: 일정 챌린지 완료 시 멘토 자격 부여로 선순환 생태계 구축
    
[주요 기능 설계]
  • 멘토 매칭: 국적·언어·챌린지 기반 필터링 및 멘토 프로필 카드 (멘토 정보, 별점, 리뷰)
  • 1:1 실시간 채팅 및 화상 멘토링: 채팅방 생성, 화상 연결, 메시지 알림
  • 금융 챌린지 시스템: 단계별 미션, 진행 상황 관리, 게이미피케이션 (뱃지, 레벨업)
  • 다국어 지원: 위치 기반 자동 언어 전환 및 다국어 금융 가이드 제공`,
      },
      {
        type: 'text',
        title: '담당 역할',
        description: `[서비스 기획 및 전략 수립]
  • 서비스 기획 및 방향성 설정, 해커톤 기획서 작성
  • 타겟 사용자 분석 및 페르소나 설계, 경쟁 서비스 분석
  • 비즈니스 모델 설계: 시장 규모 분석, 수익 모델, 확장 전략
    
[PM 역할 및 프로젝트 관리]
  • WBS 작성 및 일정 관리
  • 팀 회의 진행 및 회의록 작성, 의사결정 문서화
  
[프로토타입 개발]
  • Figma를 활용한 전체 서비스 화면 설계 및 디자인 시스템 구축
  • React로 멘토 매칭, 화상 멘토링, 챌린지 관리 등 핵심 화면 웹 구현
  • 영어 기반 UI 구현`,
      },
      {
        type: 'text',
        title: '프로젝트 성과',
        description: `• 해커톤 장려상 수상
• 사회적 문제(외국인 금융 소외)를 기술로 해결하는 소셜 임팩트 서비스 기획 및 프로토타입 개발 완료
• 멘토-멘티 매칭 알고리즘, 게이미피케이션 등 플랫폼 핵심 로직 설계 경험
• 문화적 차이를 고려한 글로벌 서비스 설계 및 프로토타입 구현 역량 습득
• PM으로서 기획부터 프로토타입 개발까지 프로젝트 전체 흐름 관리 경험`,
      },
    ],
  },
  // ################################ MQL 데이터 기반 B2B 영업기회 창출 예측 모델 개발
  {
    title: 'MQL 데이터 기반 B2B 영업기회 창출 예측 모델 개발',
    period: '2024.01 - 2024.02',
    thumbnail: aimers,
    isImportant: true,
    description:
      'LG Aimers 4기 해커톤에서 MQL 고객 데이터를 활용하여 B2B 영업 전환 성공 여부를 예측하는 ML 모델을 개발했습니다.',
    tools: [
      'Python',
      'Scikit-learn',
      'LightGBM',
      'XGBoost',
      'CatBoost',
      'AutoGluon',
    ],
    link: 'https://github.com/saeun-park/lg-aimers-4th',
    overview:
      'B2B Marketing에서 MQL(Marketing Qualified Lead) 고객 정보를 활용해 영업 전환 성공 여부를 예측하는 AI 모델을 개발하고, 이를 통해 한정된 영업 인력을 효율적으로 배치하는 것을 목표로 한 프로젝트입니다.',
    teamSize: '4명',
    role: '데이터 분석 및 모델링',
    category: '데이터 분석',
    details: [
      {
        type: 'image-grid',
        images: [
          {
            src: lg_aimers_1,
            alt: 'LG Aimers AI Practice Completion Certificate',
          },
          { src: lg_aimers_2, alt: 'LG Aimers Hackathon Certificate' },
        ],
      },
      {
        type: 'text',
        title: '프로젝트 배경 및 목표',
        description: `• MQL 고객을 기반으로 영업사원을 할당하고 최종 구매로 이어지게 하는 개인화 마케팅 활동 진행
• 할당 가능한 영업 인력은 한정적이므로, 영업 전환 가능성이 높은 고객을 사전에 예측하여 효율적 배치 필요
• 약 60,000건 이상의 MQL 데이터(고객 정보, 제품/전략 정보, 문의 정보 등) 활용`,
      },
      {
        type: 'text',
        title: 'EDA 및 인사이트 도출',
        description: `• Lead Description 텍스트 길이와 전환율 관계 분석: 텍스트가 길수록 전환율이 높은 경향 확인
• 고객 문의 유형별 전환율 분석: quotation/purchase 카테고리에서 전환율이 높게 나타남
• lead_desc_length 변수 분포 분석 후 Box-Cox 변환 수행
• 파생변수와 타겟 변수 간 상관관계 분석: customer_idx_converted_rate와 is_converted 간 0.97 상관계수 확인`,
      },
      {
        type: 'text',
        title: '데이터 전처리 및 피처 엔지니어링',
        description: `• Google Maps API를 활용한 국가 정보 보완 및 대륙 파생변수 생성
• 정제되지 않은 컬럼들을 유사한 카테고리끼리 그룹화하여 범주화 처리
• 범주형 컬럼별 카테고리별 전환율 계산하여 converted_rate 파생변수 생성
• LightGBM 모델을 활용한 결측값 처리
• 전처리 함수 모듈화로 코드 재사용성 및 유지보수성 향상
• 최종적으로 84개의 컬럼으로 확장`,
      },
      {
        type: 'text',
        title: '모델링 및 최적화',
        description: `• 단일 모델 비교: LightGBM (F1: 0.67), AutoGluon (F1: 0.68)
• Soft Voting 앙상블 (LightGBM + XGBoost + CatBoost) 적용하여 F1: 0.72로 향상
• Bayesian Optimization을 통한 하이퍼파라미터 튜닝
• 클래스 불균형 처리: class_weight 설정 및 임계값(threshold) 0.5 → 0.058로 조정
• 상관관계 기반 변수 제거로 과적합 방지 및 일반화 성능 향상
• 최종 모델 F1-score 약 0.76 달성`,
      },
      {
        type: 'text',
        title: '프로젝트 성과',
        description: `• 최종 상위 6.6%의 성과 달성
• 범주별 전환율 기반 파생변수 생성으로 모델 성능 크게 향상
• 앙상블 기법과 베이지안 최적화를 활용한 체계적인 모델 개선 프로세스 구축
• ML 기반 결측값 처리로 데이터 손실 최소화 및 예측 정확도 향상`,
      },
    ],
  },
  // ################################ 고객 대출등급 분류 예측 모델 개발
  {
    title: '고객 대출등급 분류 예측 모델 개발',
    period: '2024.01 - 2024.02',
    thumbnail: loan,
    description:
      'DACON AI 해커톤에서 금융 고객 데이터를 활용하여 대출등급(A~G)을 예측하는 다중 분류 ML 모델을 개발했습니다.',
    tools: [
      'Python',
      'Scikit-learn',
      'CatBoost',
      'Seaborn',
      'imbalanced-learn',
    ],
    link: '',
    overview:
      '대출금액, 연간소득, 상환이력 등 고객 금융 정보를 기반으로 대출등급(A~G, 7개 클래스)을 예측하는 분류 모델을 개발하여, 금융사의 신용평가 자동화를 목표로 한 프로젝트입니다.',
    teamSize: '1명',
    role: '데이터 분석 및 모델링 전체',
    category: '데이터 분석',
    details: [
      {
        type: 'text',
        title: '프로젝트 배경 및 목표',
        description: `• 대출금액, 대출기간, 근로기간, 연간소득 등 14개 고객 금융 피처 활용
• 타겟변수: 대출등급 A~G (7개 클래스)
• 클래스 불균형 문제 존재 (C, B등급 다수, F, G등급 소수)`,
      },
      {
        type: 'text',
        title: 'EDA 및 인사이트 도출',
        description: `• Countplot으로 대출등급 분포 확인 및 클래스 불균형 식별
• '부채_대비_소득_비율' 컬럼에서 9999 이상치 탐지
• Violin Plot으로 등급별 연속형 변수 분포 차이 시각화
• 대출 목적 분석: '부채 통합', '신용 카드'가 전체의 대다수 차지`,
      },
      {
        type: 'image-gallery',
        images: [
          {
            src: loan_eda_1,
            alt: '서비스 시작 화면',
          },
          {
            src: loan_eda_2,
            alt: '자산 관리 화면',
          },
          {
            src: loan_eda_3,
            alt: '증여/상속 시뮬레이션 화면',
          },
          {
            src: loan_eda_4,
            alt: '생활 편의 서비스 화면',
          },
        ],
      },

      {
        type: 'text',
        title: '데이터 전처리 및 피처 엔지니어링',
        description: `• 대출기간 문자열 → 정수형 변환, 근로기간 범주 통일화
• Z-score 기반 이상치 제거 (3 sigma 초과)
• 인코딩: 근로기간(Ordinal), 대출등급/주택소유상태(Label), 대출목적(One-Hot)
• StandardScaler로 연속형 변수 정규화
• 파생변수: '연체계좌비율' (연체계좌수 / 총계좌수) 생성
• 전처리 함수 모듈화로 재사용성 및 코드 가독성 향상`,
      },
      {
        type: 'text',
        title: '모델링 및 최적화',
        description: `• RandomOverSampler로 클래스 불균형 처리 (SMOTE, ADASYN, BorderlineSMOTE 비교 실험)
• CatBoost Classifier 선정 (범주형 변수 직접 처리 가능)
• Bayesian Optimization을 통한 효율적인 하이퍼파라미터 튜닝
• MultiClass Loss + Accuracy 평가 지표 사용`,
      },
      {
        type: 'text',
        title: '프로젝트 성과 및 인사이트',
        description: `• 최종 점수: 0.8점대 달성
• 클래스 불균형 처리 기법 비교 실험을 통한 최적 샘플링 방법 도출
• 전처리 함수 모듈화로 실험 효율성 및 코드 재사용성 향상
  
[파생변수 설계의 중요성]
• 대회 종료 후 상위권 분석 결과, '상환비율'(총상환원금/대출금액) 단일 파생변수로 0.8점대 → 0.95점 이상 성능 향상 가능 확인
• 신용평가 도메인에서 '상환능력'이 핵심 지표임을 사후 학습
• 향후 프로젝트에서는 EDA 단계에서 도메인 지식을 적극 활용하여 의미 있는 파생변수 설계 필요성 인식`,
      },
    ],
  },
  // ################################ 서울시 평균 기온 예측 모델 개발
  {
    title: '서울시 평균 기온 예측 모델 개발',
    period: '2023.12 - 2024.01',
    thumbnail: temperature,
    description:
      'DACON AI 해커톤에서 1960년부터 2022년까지의 기상 데이터를 활용하여 2023년 서울시 평균기온을 예측하는 시계열 모델을 개발했습니다.',
    tools: ['Python', 'Scikit-learn', 'Seaborn'],
    link: '',
    overview:
      '1960년부터 2022년까지의 기온, 일교차, 강수량, 평균습도 등 기상 데이터를 분석하여 2023년 1월 1일부터 12월 24일까지(358일)의 평균기온을 예측하는 시계열 예측 프로젝트입니다.',
    teamSize: '1명',
    role: '데이터 분석 및 모델링 전체',
    category: '데이터 분석',
    details: [
      {
        type: 'text',
        title: '프로젝트 배경 및 목표',
        description: `• 학습 데이터: 1960-01-01 ~ 2022-12-31 (약 63년간 기상 데이터)
• 예측 대상: 2023-01-01 ~ 2023-12-24 (358일간 평균기온)
• 피처: 최고기온, 최저기온, 일교차, 강수량, 평균습도, 평균풍속, 일조합, 일사합, 일조율`,
      },
      {
        type: 'text',
        title: 'EDA 및 인사이트 도출',
        description: `• Correlation Heatmap으로 날씨 변수 간 높은 상관관계 확인
• Boxplot으로 계절별 평균기온 분포 차이 시각화
• Pairplot으로 설명변수와 예측변수 간 관계 분석`,
      },
      {
        type: 'text',
        title: '데이터 전처리 및 피처 엔지니어링',
        description: `• 시계열 특성을 고려한 결측값 처리 (backward fill 방식 적용)
• 계절 파생변수 생성 및 One-Hot Encoding 적용
• 데이터 범위 최적화: 1960년 전체 데이터 대신 2014년 이후 데이터로 축소하여 예측 성능 향상
• Prophet 입력 형식에 맞게 컬럼명 변환 (일시→ds, 평균기온→y)`,
      },
      {
        type: 'text',
        title: '모델링 및 최적화',
        description: `• Prophet 모델 선정 (시계열 예측 특화 모델)
• Grid Search를 통한 하이퍼파라미터 조합 탐색
• MAE(Mean Absolute Error)를 평가 지표로 사용하여 최적 모델 선정
• 최적 파라미터 조합으로 358일 기온 예측`,
      },
      {
        type: 'text',
        title: '프로젝트 성과 및 인사이트',
        description: `• 최종 순위: 1,064명 중 55등 (상위 5%)
  
[데이터 범위 최적화의 효과]
• 1960년 전체 데이터 사용 대비 2014년 이후 데이터 사용 시 성능 향상 확인
• 최근 데이터의 기후 패턴이 예측에 더 유효함을 확인

[향후 개선 방향 도출]
• 결측값 처리: backward fill 대신 선형 보간(interpolate) 적용 시 성능 개선 가능
• 하이퍼파라미터 확장: holidays_prior_scale, n_changepoints, seasonality_mode 등 추가 튜닝 여지 존재
• 앙상블 기법 적용 및 재현성을 위한 시드 고정 필요성 확인`,
      },
    ],
  },
  // ################################ 제주 특산물 가격 예측 모델 개발
  {
    title: '제주 특산물 가격 예측 모델 개발',
    thumbnail: price,
    period: '2023.10 - 2023.11',
    description:
      'DACON AI 경진대회에서 제주도 특산물의 가격을 예측하는 시계열 모델을 개발했습니다.',
    tools: ['Python', 'Scikit-learn', 'pytimekr'],
    link: '',
    overview:
      '2019년부터 2023년 3월까지의 제주 특산물 거래 데이터를 활용하여, 2023년 3월 4일부터 31일까지(28일간)의 품목별 가격(원/kg)을 예측하는 시계열 예측 프로젝트입니다.',
    teamSize: '1명',
    role: '데이터 분석 및 모델링 전체',
    category: '데이터 분석',
    details: [
      {
        type: 'text',
        title: '프로젝트 배경 및 목표',
        description: `• 예측 대상: 제주 특산물 5종 (감귤, 브로콜리, 무, 당근, 양배추)
• 학습 데이터: 2019-01-01 ~ 2023-03-03 거래 데이터
• 예측 기간: 2023-03-04 ~ 2023-03-31 (28일)
• 목표: 특산물 가격 예측을 통한 안정적이고 효율적인 수급 관리`,
      },
      {
        type: 'text',
        title: 'EDA 및 인사이트 도출',
        description: `• 감귤을 중심으로 가격 추세 패턴 분석
• 회사별, 지역별 가격 변동 추이 시각화
• 수요(supply)와 가격의 일별 변화 관계 분석
• 가격, 수출 금액, 수출 중량 간 상관관계 확인`,
      },
      {
        type: 'text',
        title: '데이터 전처리 및 피처 엔지니어링',
        description: `• 공휴일/일요일에 price=0 패턴 발견 → pytimekr 라이브러리 활용하여 holiday 파생변수 생성
• 날짜 데이터 분해: year, month, day 컬럼 추가 및 datetime 타입 변환
• Label Encoding 적용 (location, corporation, item)
• AutoGluon TimeSeries 입력 형식에 맞게 item_id, timestamp 컬럼 구성`,
      },
      {
        type: 'text',
        title: '모델링 및 최적화',
        description: `• AutoGluon TimeSeriesPredictor 선정 (AutoML 기반 자동화된 시계열 예측)
• prediction_length=28, eval_metric=RMSE 설정
• random_seed=42로 재현성 확보
• refit_full()로 전체 데이터 재학습하여 최종 예측 수행`,
      },
      {
        type: 'text',
        title: '프로젝트 성과 및 인사이트',
        description: `• 최종 순위: 2,368명 중 271등 (상위 11%)
  
[AutoML 기반 시계열 예측 경험]
• AutoGluon TimeSeries를 활용한 자동화된 모델 선택 및 앙상블 적용
• Time Series, Tabular, Multi-Modal 등 다양한 데이터 유형에 대한 AutoML 활용 가능성 확인
  
[도메인 기반 피처 설계]
• 공휴일/일요일과 price=0의 패턴을 발견하여 holiday 파생변수로 활용
• Data Leakage(데이터 누수) 방지의 중요성 인식 및 적용`,
      },
    ],
  },
  // ################################ 상품 유형별 주요 소비자층 분산분석
  {
    title: '상품 유형별 주요 소비자층 분산분석',
    period: '2023.05 - 2023.06',
    thumbnail: ifood,
    description:
      'Superstore 데이터를 활용하여 고객 인구통계학적 특성에 따른 일반재/사치재 소비량 차이를 ANOVA로 분석하고 마케팅 전략을 제안했습니다.',
    tools: ['R', 'ggplot2', 'ANOVA', 'Tukey HSD'],
    link: 'https://github.com/saeun-park/ifood-anova-analysis',
    overview:
      'IFood Superstore 데이터를 활용하여 고객의 소득, 학력, 연령, 자녀 유무 등이 일반재와 사치재 소비량에 미치는 영향을 Two-way ANOVA로 검정하고, 타겟 마케팅 전략을 도출한 프로젝트입니다.',
    teamSize: '4명',
    role: '데이터 분석 및 통계 모델링',
    category: '데이터 분석',
    details: [
      {
        type: 'text',
        title: '프로젝트 배경 및 목표',
        description: `• CRM 기반 개인 맞춤형 마케팅 전략 수립을 위한 소비자 세분화
• 일반재(Mntnomal) vs 사치재(Mntluxury) 소비량 차이 분석
• 설명변수: 소득, 학력, 연령, 자녀 유무, 결혼 상태`,
      },
      {
        type: 'text',
        title: '분석 방법론',
        description: `• EDA: 소득/학력/연령대별 소비 패턴 Boxplot 시각화
• 전처리: 소득·연령 범주화, 자녀 유무 이진화, 결혼 상태 통합
• Two-way ANOVA: 교호작용 검정 및 Interaction Plot 시각화
• 잔차 분석: 등분산성/정규성 검정으로 모델 신뢰도 확인
• Tukey HSD 사후검정으로 집단 간 차이 분석`,
      },
      {
        type: 'text',
        title: '분석 결과',
        description: `[사치재 분석 결과]
• 소득과 자녀 유무가 가장 큰 영향 (MSE 최고)
• 결혼 상태는 유의하지 않음 (p = 0.417)
• 교호작용 없음, 잔차 분석 통과 → 높은 신뢰도
  
[일반재 분석 결과]
• 유의한 교호작용: 소득×교육, 나이×자녀, 소득×자녀
• QQ-plot에서 정규성 불만족 → 신뢰도 제한적`,
      },
      {
        type: 'text',
        title: '마케팅 전략 제안 및 기대효과',
        description: `[사치재 타겟] 중상위 소득 + 자녀 보유 고객
  • 분석 결과, 소득과 자녀 유무가 사치재 소비량에 가장 큰 영향
  • 고소득층은 와인/귀금속 전문점 선호 → IFood 같은 식품 중심 업체에서는 중상위 소득층이 더 효율적인 타겟
  • 소득탄력성 분석 결과가 일반 경제 이론과 상이한 이유: 데이터 제공 기업의 업종 특성 반영

[일반재 타겟] 중하위 소득 + 자녀 보유 고객
  • 소득×자녀, 나이×자녀 교호작용 유의: 자녀가 있으면 일상 필수재 소비 증가
  • 저소득층에서 높은 구매량 차이, 고소득층으로 갈수록 구매량 차이 감소
  • 단, 일반재 모델은 정규성 가정 불만족으로 신뢰도 제한적 → 추가 데이터 수집 필요

[기대효과]
  • 고객 세분화를 통한 타겟 마케팅으로 마케팅 비용 절감 및 매출 증대
  • 가계 동향 조사 및 소비 흐름 파악에 활용 가능`,
      },
    ],
  },
  // ################################ 현대자동차 vs 테슬라 주가 수익률 및 리스크 비교분석
  // {
  //   title: '현대자동차 vs 테슬라 주가 수익률 및 리스크 비교분석',
  //   period: '2022.06 - 2022.07',
  //   thumbnail: ht,
  //   description:
  //     'Yahoo Finance API를 활용하여 현대자동차와 테슬라의 5년간 주가 데이터를 수집하고 핵심 투자 지표를 산출하여 비교 분석했습니다.',
  //   tools: ['Python', 'Pandas', 'yfinance', 'Matplotlib', 'NumPy'],
  //   link: 'https://finance.yahoo.com/',
  //   overview:
  //     '국내 대표 자동차 기업(현대차)과 글로벌 EV 선두 기업(테슬라)의 2017~2022년 주가 데이터를 기반으로 수익률 및 리스크 지표를 정량적으로 비교 분석하여, 투자 의사결정을 위한 인사이트를 도출하는 프로젝트입니다.',
  //   teamSize: '4명',
  //   role: '데이터 수집 및 수익률/리스크 지표 분석',
  //   category: '데이터 분석',
  //   details: [
  //     {
  //       type: 'text',
  //       title: '프로젝트 배경',
  //       description: `- 분석 대상: 현대자동차(005380.KS), 테슬라(TSLA)
  // - 분석 기간: 2017-06-15 ~ 2022-06-15 (약 5년, 1,258 거래일)
  // - 데이터 소스: Yahoo Finance API (yfinance)
  // - 수집 항목: 시가(Open), 고가(High), 저가(Low), 종가(Close), 거래량(Volume), 수정종가(Adj Close)`,
  //     },
  //     {
  //       type: 'text',
  //       title: '담당 역할',
  //       description: `[데이터 수집 및 전처리]
  // - yfinance API를 통한 일별 OHLCV 데이터 자동 수집
  // - 수정종가(Adjusted Close) 기반 분석으로 배당/액면분할 효과 반영
  // - 결측값 처리 및 거래일 기준 데이터 정합성 검증

  // [수익률 분석]
  // - 일간 수익률(Daily Return) 산출: Rt = (Pt - Pt-1) / Pt-1 × 100
  // - 일간 수익률 분포 히스토그램 시각화 → 변동성(Volatility) 비교
  // - 누적 수익률(Cumulative Return) 산출 및 시계열 비교

  // [리스크 지표 분석]
  // - MDD(Maximum Drawdown) 산출: 고점 대비 최대 낙폭률 계산
  // - Rolling Window 기반 MDD 추이 시각화
  // - 현대차 vs 테슬라 리스크-리턴 프로파일 비교`,
  //     },
  //     {
  //       type: 'text',
  //       title: '분석 결과',
  //       description: `[수익률 비교]
  // - 테슬라: 5년간 누적 수익률 약 300% 이상, 높은 변동성
  // - 현대차: 상대적으로 안정적인 수익률 곡선, 낮은 변동성

  // [리스크 비교 (MDD)]
  // - 테슬라: 최대 낙폭 약 -50% 수준, 고위험-고수익 특성
  // - 현대차: 최대 낙폭 약 -40% 수준, 상대적 안정성

  // [일간 수익률 분포]
  // - 테슬라: 넓은 분포 (±20% 범위), 높은 꼬리 리스크
  // - 현대차: 좁은 분포 (±10% 범위), 정규분포에 근접`,
  //     },
  //     {
  //       type: 'text',
  //       title: '활용 방안',
  //       description: `- MDD 기반 손절 라인 설정: 과거 최대 낙폭을 기준으로 리스크 허용 범위 산정
  // - 변동성 기반 포지션 사이징: 변동성이 큰 종목일수록 투자 비중 축소
  // - 시장 조정기 대응: MDD 구간 분석을 통해 조정기와 추세 전환 구분`,
  //     },
  //     {
  //       type: 'text',
  //       title: '배운 점 및 향후 계획',
  //       description: `- 정량적 리스크 관리: MDD, 변동성 등 리스크 지표의 실무적 의미 이해
  // - 금융 데이터 분석 파이프라인: API 수집 → 전처리 → 지표 산출 → 시각화 워크플로우 구축
  // - 향후 확장: LSTM 등 시계열 딥러닝 모델을 활용한 주가 예측 및 백테스팅 시스템 개발로의 확장 가능`,
  //     },
  //   ],
  // },
];
