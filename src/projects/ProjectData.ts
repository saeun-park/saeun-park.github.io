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
    title: '신분증 진위확인 테스트 앱 기획 및 개발',
    period: '2025.11 - 2025.12',
    thumbnail: '/src/assets/images/projects/toss_mobile.png',
    description:
      'TensorFlow Lite 기반의 신분증 위조 탐지 모델을 Android 앱에 통합하여 실제 모바일 환경에서 테스트할 수 있는 애플리케이션을 개발했습니다.',
    tools: ['Android Studio', 'Kotlin'],
    link: '',
    overview:
      '토스 사내 신분증 진위확인 ML 모델을 실제 모바일 환경에서 테스트하기 위한 애플리케이션 개발의 필요성이 대두되어, 자발적으로 업무를 맡아 진행한 프로젝트입니다.',
    teamSize: '1명',
    role: '안드로이드 앱 개발자',
    category: '기획/개발',
    isImportant: true,
    details: [
      {
        type: 'text',
        title: '주요 기능',
        description: `[메인] 신분증 위조 탐지
    - Swin Transformer 모델 통합: 신분증 위조 여부 실시간 판별
    - 카메라/갤러리 촬영: CameraX 기반 실시간 촬영 및 저장 이미지 분석
    - 결과 시각화: 위조 여부 및 신뢰도를 직관적인 UI로 표시
    
    [학습 과정] TFLite 모델 통합 경험
    - YOLO (객체 탐지): 복잡한 출력 파싱 및 NMS 알고리즘 직접 구현
    - ViT (ImageNet 분류): Transformer 모델 구조 학습
    - NSFW (분류): 기본 전처리/후처리 파이프라인 이해`,
      },
      // {
      //   type: 'image',
      //   src: '/src/assets/images/Toss.jpg',
      // },
      {
        type: 'text',
        title: '기술적 도전과 해결',
        description: `[1] TFLite 첫 사용 → 체계적 학습으로 극복
    - 문제: TensorFlow Lite를 처음 사용하는 상황에서 모델 통합 방법이 막연함
    - 해결: 간단한 모델(NSFW)부터 시작하여 점진적으로 복잡도 증가. YOLO에서 NMS, IoU 계산 등 후처리 알고리즘 직접 구현. 다양한 모델 타입 경험으로 TFLite 이해도 향상 후 실제 Swin Transformer 모델에 적용하여 성공적 통합.
    
    [2] CameraX + Compose 통합
    - 문제: CameraX의 PreviewView를 Jetpack Compose에서 사용하는 복잡성
    - 해결: AndroidView로 네이티브 뷰 통합, DisposableEffect로 Lifecycle 관리, LaunchedEffect로 초기화 로직 처리
    
    [3] 실제 촬영 환경 최적화
    - 문제: 다양한 조명, 각도, 이미지 품질 조건 대응 필요
    - 해결: 가이드 프레임 제공으로 촬영 품질 향상, 비동기 처리로 UI 블로킹 방지, 이미지 품질 검증 로직 추가`,
      },
      {
        type: 'text',
        title: '성과',
        description: `• 평균 추론 시간: 200ms 이하
    - 지원 버전: Android 7.0+ (API 24+)
    - 모델 통합 경험: 4가지 타입 (Swin, YOLO, ViT, NSFW)`,
      },
      {
        type: 'text',
        title: '배운 점',
        description: `• ML 모델 프로덕션화: 모바일 환경에서의 ML 모델 통합 전 과정 이해
    - 금융 도메인(KYC): 신원 확인 프로세스 및 보안 요구사항 이해
    - 문제 해결 능력: 처음 접하는 기술을 체계적으로 학습하고 적용하는 경험`,
      },
    ],
  },
  // ################################ 시니어 맞춤형 노후 설계 서비스 개발
  {
    title: '시니어 맞춤형 노후 설계 플랫폼 기획 및 개발',
    period: '2025.07 - 2025.08',
    thumbnail: '/src/assets/images/projects/nohoodorak.JPG',
    description:
      'KB국민은행의 부트캠프에서 국민은행과 연계 가능한 시니어 사용자를 위한 맞춤형 노후 설계 웹앱을 개발했습니다.',
    tools: [
      'Vue.js',
      'TypeScript',
      'Pinia',
      'TailwindCSS',
      'Storybook',
      'Spring',
      'MyBatis',
      'MySQL',
    ],
    link: 'https://github.com/jejugom',
    overview:
      '노후도락은 초고령사회 진입에 따라 시니어의 삶의 질과 디지털 격차 해소를 목표로 한 통합 시니어 금융 플랫폼입니다. 자산관리, 증여/상속, 생활편의 등 시니어의 핵심 관심사를 한 곳에서 해결할 수 있도록 설계되었습니다.',
    teamSize: '5명',
    isImportant: true,
    role: 'PM & 프론트엔드 개발자',
    category: '기획/개발',
    details: [
      {
        type: 'image',
        src: '/src/assets/images/projects/nohudorak.png',
      },
      {
        type: 'text',
        title: '주요 기능',
        description: `- 로그인/회원가입: 카카오, 네이버 소셜 로그인
  - 자산 연동 및 관리: CODEF API를 통한 국민은행 계정 연동, 자산 자동 조회 및 관리
  - 맞춤형 금융상품 추천: 자산 정보와 투자 성향 기반 최적의 금융상품 추천
  - 증여/상속 시뮬레이션: 세금 계산, 절세 전략, 결과 시각화, PDF 저장, 가족 공유, 은행 상담 연계
  - 생활편의 기능: 금융 퀴즈, 게임, 공원 방문 챌린지 등
  - 시니어 친화적 UI/UX: 큰 글씨, 명확한 아이콘, 단계별 도움말 등
  - 은행 지점 예약: 지도 기반 지점 선택, 예약 가능 시간 노출, 문자 알림
  - 금융 Q&A: 텍스트/음성 입력으로 금융 질문 답변
  - 마이페이지: 내 정보 관리, 예약 관리, 투자 상황 재설정, 자산 관리`,
      },
      {
        type: 'text',
        title: '담당 역할',
        description: `[기획]
- 전체 서비스 기획 및 방향성 설정, 기획안 작성, 와이어프레임 제작
- 회의록 작성 및 모든 내용 문서화
- 팀 내 자유로운 의견 제시와 토론 문화 조성

[일정 관리 - Jira 기반 Sprint 운영]
- Sprint 단위로 전체 일정과 업무를 체계적으로 관리
- 주요 업무별 티켓(NHDR-###) 생성 및 담당자 지정, 업무 분배
- 매일 업무 현황 공유, Sprint 종료 시 리뷰 및 회고 진행
- Jira와 Github 연동을 통해 실시간 업무 상태 추적 및 코드 리뷰 활성화

[운영 관리 - Notion 기반 정보 통합]
- 전체 일정표, 개인 일정표, 회의록, 아이디어 보드 등 팀 정보 통합 관리
- 초기 기획안부터 최종 산출물까지 실시간 공동 작성 및 피드백
- 팀 내 커뮤니케이션 효율화 및 산출물 관리 체계화

[버전 관리 - Git Flow 전략]
- main, develop, feature/, hotfix/ 브랜치로 역할 분리하여 협업 효율성 및 코드 품질 유지
- PR 기반 코드 리뷰를 통해 품질 관리 및 커뮤니케이션 활성화
- Jira 티켓 넘버를 커밋 메시지와 연동, 깃허브 PR과 이슈가 Jira 보드에서 자동 반영
- 이슈 → 브랜치 → PR → 머지 → 배포까지 체계적인 플로우로 안정적인 배포 환경 구축
  
  [증여/상속 시뮬레이션 기능 개발]
  - 사용자 입력(자산, 수증자) 기반 맞춤형 시뮬레이션 로직 설계 및 구현
  - 세금 계산, 절세 전략 추천, 결과 시각화, PDF 저장, 가족 공유, 은행 상담 연계 기능 개발
  - 문제: 다양한 자산/수증자 조합에서 정보 과부하 발생
  - 해결: 전략을 3단계 우선순위(Tier)로 분류하고 동적 가중치 알고리즘 적용, 하이브리드 정렬(우선순위→가중치)로 상위 7개 전략만 노출
  
  [맞춤형 상품 추천 로직 설계 (ML 모델 도입 시도)]
  - 개인화된 금융상품 추천을 위해 머신러닝 기반 예측 모델 설계 및 프로토타입 개발
  - 멀티라벨 분류, 세그먼트 기반 추천 등 다양한 접근 방식 검토
  - 경험한 한계: 데이터 불균형, 모델 설명 가능성 이슈, 더미 데이터 구축의 현실적 한계`,
      },
      {
        type: 'text',
        title: '성과 / 배운 점',
        description: `[성과]
  - Jira 기반 스프린트 운영, Git Flow 전략 적용, Notion을 통한 산출물 관리로 실제 업무와 유사한 개발 프로세스 경험
  
  [배운 점]
  - 복잡한 금융 시뮬레이션을 누구나 쉽게 사용할 수 있도록 구현하며 사용자 중심 사고 역량 성장
  - ML 모델 도입 시도를 통해 데이터 기반 의사결정의 현실적 어려움과 대안적 접근법 학습
  - 기획부터 개발까지 프로젝트 전반을 경험하며 효과적인 협업 방식과 문제 해결 능력 습득`,
      },
    ],
  },
  // ################################ 외국인 이주민 맞춤형 금융 멘토링 플랫폼 개발
  {
    title: '외국인 이주민 맞춤형 금융 멘토링 플랫폼 기획 및 개발',
    period: '2024.12 - 2025.01',
    thumbnail: '/src/assets/images/projects/finto.jpg',
    description:
      '디지털 금융약자인 외국인 이주민을 위한 멘토링 기반 금융 교육을 지원하는 웹서비스를 개발했습니다.',
    tools: [
      'JavaScript',
      'React',
      'Java',
      'Spring Boot',
      'MySQL',
      'WebRTC',
      'WebSocket',
      'Elasticsearch',
    ],
    link: '',
    overview:
      'FinTo는 외국인 이주민이 같은 문화권 선배 이주민 멘토와 1:1 매칭되어 실전 금융 챌린지를 함께 수행하며, 한국 금융 시스템에 성공적으로 정착할 수 있도록 돕는 멘토링 기반 금융 교육 플랫폼입니다. 단순 정보 제공을 넘어 경험 기반의 실행형 학습을 실현하여 실질적인 금융 자립을 촉진합니다.',
    teamSize: '6명',
    role: 'PM & 프론트엔드 개발자',
    category: '기획/개발',
    details: [
      {
        type: 'text',
        title: '프로젝트 배경',
        description: `- 국내 거주 외국인 약 265만 명(전체 인구의 5% 이상), 본격적인 다문화 사회 진입
  - 외국인 어려움 TOP 3: 언어 장벽(29.8%), 외로움(13.0%), 금융+경제(12.5%)
  - 기존 지원 체계의 한계: 브로슈어, 다국어 웹사이트 등 정보 중심 안내에 치중, 실행형 이해 부족
  - 목표 시장: 연평균 외국인 증가 10만 명 중 멘토링 공정 효과 60% 적용 시 연간 5,000명/년 확보 가능`,
      },
      {
        type: 'text',
        title: '주요 기능',
        description: `[멘토링 서비스]
  - 국적·언어 기반 멘토 검색: 같은 문화권 멘토 매칭으로 문화적 이해와 공감대 형성
  - WebRTC 기반 1:1 화상 연결: 실시간 화면 공유로 금융 서비스 사용법 직접 가이드
  - WebSocket 실시간 채팅: 문서, 이미지, 금융 사이트 링크 등 즉시 공유 가능
  - 멘토링 리뷰 시스템: 경험 공유 및 멘토 선택 참고 자료 제공
  - 멘토링 일정 관리: 캘린더 기반 세션 예약 및 알림
  
  [금융 챌린지 서비스]
  - 단계별 실전 금융 미션: 계좌 개설, 자동이체 설정, 월세 송금, 공과금 납부 등
  - 챌린지 진행 상황 관리: 멘토가 멘티의 각 미션 성공 여부 체크 및 기록
  - 게이미피케이션: 뱃지, 레벨업, 포인트 등 보상 시스템으로 동기 부여
  - 다국어 금융 가이드: 각 챌린지별 이미지, 영상, PDF 가이드 제공
  - 멘티→멘토 성장 구조: 일정 챌린지 완료 시 멘토 자격 부여로 선순환 생태계 구축`,
      },
      {
        type: 'text',
        title: '담당 역할',
        description: `[기획]
  - 전체 서비스 기획 및 방향성 설정, 해커톤 기획서 작성
  - 경쟁 서비스 분석 (Bravo, Glow, Kommunity) 및 차별화 전략 수립
  - 타겟 사용자 분석 및 페르소나 설계
  - 프로젝트 목표 설정: 경험 기반 P2P 학습 모델, 실전 미션 중심 설계, 선순환 멘토 생태계
  
  [일정 및 업무 관리]
  - WBS(Work Breakdown Structure) 작성 및 스프린트 단위 일정 관리
  - 팀 회의 진행 및 회의록 작성, 모든 논의사항 문서화
  - 프론트엔드-백엔드 간 API 명세 조율 및 협업 프로세스 구축
  
  [시스템 아키텍처 설계 참여]
  - Docker 기반 컨테이너화 구조 설계 (Spring Boot Application, MySQL, Nginx Proxy)
  - CI/CD 파이프라인 구성 (GitHub Actions, Repository)
  - REST API 설계 및 백엔드 팀과 API 명세 협의
  
  [멘토 매칭 기능 개발]
  - 국적·언어·챌린지 기반 멘토 검색 필터링 로직 설계 및 구현
  - Elasticsearch 기반 Full Text Search로 유사도 검색 기능 구현
  - 멘토 프로필 카드 UI/UX 설계 (별점, 리뷰 수, 전문 분야 표시)
  - 문제: 다국어 환경에서 검색어 일치율 저하
  - 해결: Elasticsearch 형태소 분석기 활용, 다국어 동의어 사전 구축으로 검색 정확도 향상
  
  [화상 멘토링 기능 개발]
  - WebRTC 기반 1:1 화상 통화 및 화면 공유 기능 구현
  - 저지연 실시간 피드백 시스템 구축 (화면 공유로 멘토가 직접 시연)
  - 채팅창 연동으로 화상 통화 중 자료 공유 가능하도록 UI 설계
  
  [지리 기반 언어 국제화 기능 구현]
  - 사용자의 위치 정보 기반 자동 언어 전환 기능 개발
  - i18n 라이브러리 활용, 한국어/영어/중국어/베트남어 등 다국어 지원
  - 언어별 폰트 최적화 및 RTL(Right-to-Left) 레이아웃 대응`,
      },
      {
        type: 'text',
        title: '배운 점',
        description: `[배운 점]
  - 사회적 문제(외국인 금융 소외)를 기술로 해결하는 소셜 임팩트 서비스 기획 역량 성장
  - 멘토-멘티 매칭 알고리즘, 게이미피케이션 설계 등 플랫폼 핵심 로직 설계 능력 습득
  - PM으로서 기획-개발-협업을 아우르는 프로젝트 전체 흐름 관리 능력 강화`,
      },
    ],
  },
  // ################################ MQL 데이터 기반 B2B 영업기회 창출 예측 모델 개발
  {
    title: 'MQL 데이터 기반 B2B 영업기회 창출 예측 모델 개발',
    period: '2024.01 - 2024.02',
    thumbnail: '/src/assets/images/projects/aimers.png',
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
    category: 'ML 모델링',
    details: [
      {
        type: 'text',
        title: '프로젝트 배경',
        description: `- MQL 고객을 기반으로 영업사원을 할당하고 최종 구매로 이어지게 하는 개인화 마케팅 활동 진행
  - 할당 가능한 영업 인력은 한정적이므로, 영업 전환 가능성이 높은 고객을 사전에 예측하여 효율적 배치 필요
  - 약 60,000건의 MQL 데이터(고객 정보, 제품/전략 정보, 문의 정보 등) 활용`,
      },
      {
        type: 'text',
        title: '담당 역할',
        description: `[EDA (탐색적 데이터 분석)]
  - Lead Description 텍스트 길이와 전환율 관계 분석: 텍스트가 길수록 전환율이 높은 경향 확인
  - 고객 문의 유형별 전환율 분석: quotation/purchase 카테고리에서 전환율이 높게 나타남
  - lead_desc_length 변수 분포 분석 후 Box-Cox 변환 수행
  - 파생변수와 타겟 변수 간 상관관계 분석: customer_idx_converted_rate와 is_converted 간 0.97 상관계수 확인
  
  [데이터 전처리]
  - Google Maps API를 활용한 국가 정보 보완 및 대륙 파생변수 생성
  - 정제되지 않은 컬럼들을 유사한 카테고리끼리 그룹화하여 범주화 처리
  - 범주형 컬럼별 카테고리별 전환율 계산하여 converted_rate 파생변수 생성
  - LightGBM 모델을 활용한 결측값 처리 (ver_win_rate_x, ver_win_ratio_per_bu, com_reg_ver_win_rate)
  - 최종적으로 84개의 컬럼으로 확장
  
  [모델링]
  - 단일 모델 비교: LightGBM (F1: 0.67), AutoGluon (F1: 0.68)
  - Soft Voting 앙상블 (LightGBM + XGBoost + CatBoost) 적용하여 F1: 0.72로 향상
  - Bayesian Optimization을 통한 하이퍼파라미터 튜닝
  - 클래스 불균형 처리: class_weight 설정 및 임계값(threshold) 0.5 → 0.058로 조정
  - 상관관계 기반 변수 제거로 과적합 방지 및 일반화 성능 향상
  - 최종 모델 F1-score 약 0.76 달성`,
      },
      {
        type: 'text',
        title: '성과',
        description: `- 해커톤 결과: 전체 844명 중 56등 (상위 6.6%)
  - Public LB: 38등 (상위 4.5%)
  - Private LB: 56등 (상위 6.6%)
  - 최종 F1-score: 약 0.76`,
      },
      {
        type: 'text',
        title: '배운 점',
        description: `- 전처리 함수 모듈화: Box-Cox 변환, 결측값 처리, 범주화 등의 작업을 함수로 분리하여 재사용성과 유지보수성 향상
  - 의미 있는 파생변수 생성 경험: 범주별 전환율 기반 파생변수를 생성하여 모델 성능 향상 및 도메인 기반 변수 설계 중요성 체감
  - 도메인 지식의 중요성 인식: MQL, BANT, Lead Description 등의 용어 학습을 통해 데이터 해석 및 모델 설계의 이해도 제고
  - 효율적인 하이퍼파라미터 튜닝: 베이지안 최적화를 통한 탐색 효율 개선과 성능 향상
  - 정교한 결측값 처리 방식: 단순 삭제나 일괄 치환이 아닌, 머신러닝 기반 예측으로 결측값을 대체하여 데이터 손실 최소화`,
      },
      // {
      //   type: 'image-gallery',
      //   images: [
      //     { src: '/src/assets/images/lg_aimers_hackathon_certificate.jpg' },
      //     { src: '/src/assets/images/lg_aimers_ai_practice_completion.jpg' },
      //   ],
      // },
    ],
  },
  // ################################ 고객 대출등급 분류 예측 모델 개발
  {
    title: '고객 대출등급 분류 예측 모델 개발',
    period: '2024.01 - 2024.02',
    thumbnail: '/src/assets/images/projects/loan.jpeg',
    description:
      'DACON AI 해커톤에서 금융 고객 데이터를 활용하여 대출등급(A~G)을 예측하는 다중 분류 ML 모델을 개발했습니다.',
    tools: [
      'Python',
      'Pandas',
      'NumPy',
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
    category: 'ML 모델링',
    details: [
      {
        type: 'text',
        title: '프로젝트 배경',
        description: `- 대출금액, 대출기간, 근로기간, 연간소득 등 14개 고객 금융 피처 활용
  - 타겟변수: 대출등급 A~G (7개 클래스)
  - 클래스 불균형 문제 존재 (C, B등급 다수, F, G등급 소수)`,
      },
      {
        type: 'text',
        title: '담당 역할',
        description: `[EDA (탐색적 데이터 분석)]
  - Countplot으로 대출등급 분포 확인 → 클래스 불균형 식별
  - '부채_대비_소득_비율' 컬럼에서 9999 이상치 탐지
  - Violin Plot으로 등급별 연속형 변수 분포 차이 시각화
  - 대출 목적 분석: '부채 통합', '신용 카드'가 전체의 대다수 차지
  
  [데이터 전처리]
  - 대출기간 문자열 → 정수형 변환 (36, 60 months)
  - 근로기간 범주 통일화 ('<1 year' = '< 1 year', '10+years' = '10+ years')
  - Z-score 기반 이상치 제거 (3 sigma 초과)
  - 인코딩: 근로기간(Ordinal), 대출등급/주택소유상태(Label), 대출목적(One-Hot)
  - StandardScaler로 연속형 변수 정규화
  - 파생변수: '연체계좌비율' (연체계좌수 / 총계좌수) 생성
  
  [모델링]
  - RandomOverSampler로 클래스 불균형 처리 (SMOTE, ADASYN, BorderlineSMOTE 비교 실험)
  - CatBoost Classifier 선정 (범주형 변수 직접 처리 가능)
  - Grid Search로 하이퍼파라미터 튜닝 (depth=6, l2_leaf_reg=1, learning_rate=0.01)
  - MultiClass Loss + Accuracy 평가 지표 사용`,
      },
      {
        type: 'text',
        title: '성과',
        description: `- 최종 점수: 0.8X점대
  - 상위권(0.95점대) 대비 파생변수 설계의 중요성 학습`,
      },
      {
        type: 'text',
        title: '배운 점',
        description: `- 파생변수의 중요성: '상환비율'(총상환원금/대출금액) 하나로 0.8 → 0.95 성능 향상 가능
  - 도메인 지식 필수: 신용평가에서 상환능력이 핵심 지표임을 사후 학습
  - 전처리 함수 모듈화: 재사용성과 실험 효율성 향상
  - Bayesian Optimization: Grid Search보다 효율적인 하이퍼파라미터 탐색 방법`,
      },
    ],
  },
  // ################################ 서울시 평균 기온 예측 모델 개발
  {
    title: '서울시 평균 기온 예측 모델 개발',
    period: '2023.12 - 2024.01',
    thumbnail: '/src/assets/images/projects/temperature.jpeg',
    description:
      'DACON AI 해커톤에서 1960년부터 2022년까지의 기상 데이터를 활용하여 2023년 서울시 평균기온을 예측하는 시계열 모델을 개발했습니다.',
    tools: ['Python', 'Pandas', 'Prophet', 'Scikit-learn', 'Seaborn'],
    link: '',
    overview:
      '1960년부터 2022년까지의 기온, 일교차, 강수량, 평균습도 등 기상 데이터를 분석하여 2023년 1월 1일부터 12월 24일까지(358일)의 평균기온을 예측하는 시계열 예측 프로젝트입니다.',
    teamSize: '1명',
    role: '데이터 분석 및 모델링 전체',
    category: 'ML 모델링',
    details: [
      {
        type: 'text',
        title: '프로젝트 배경',
        description: `- 학습 데이터: 1960-01-01 ~ 2022-12-31 (약 63년간 기상 데이터)
  - 예측 대상: 2023-01-01 ~ 2023-12-24 (358일간 평균기온)
  - 피처: 최고기온, 최저기온, 일교차, 강수량, 평균습도, 평균풍속, 일조합, 일사합, 일조율`,
      },
      {
        type: 'text',
        title: '담당 역할',
        description: `[EDA (탐색적 데이터 분석)]
  - Correlation Heatmap으로 날씨 변수 간 상관관계 분석
  - Boxplot으로 계절별 평균기온 분포 확인
  - Pairplot으로 설명변수와 예측변수 간 관계 시각화
  
  [데이터 전처리]
  - 시계열 특성을 고려한 결측값 처리 (backward fill)
  - 계절 파생변수 생성 및 One-Hot Encoding 적용
  - 데이터 범위 최적화: 1960년 → 2014년 이후 데이터로 축소하여 성능 향상
  - Prophet 입력 형식에 맞게 컬럼명 변환 (일시→ds, 평균기온→y)
  
  [모델링]
  - Prophet 모델 선정 (시계열 예측 특화)
  - Grid Search로 하이퍼파라미터 튜닝 (changepoint_prior_scale, seasonality_prior_scale)
  - 최적 파라미터: changepoint_prior_scale=0.1, seasonality_prior_scale=1
  - 평가 지표: MAE (Mean Absolute Error) = 2.44`,
      },
      {
        type: 'text',
        title: '성과',
        description: `- 최종 순위: 1,064명 중 55등 (상위 5%)
  - 최종 MAE: 2.64944`,
      },
      {
        type: 'text',
        title: '배운 점',
        description: `- 시계열 결측값 처리: bfill보다 선형 보간(interpolate)이 더 적합할 수 있음
  - 데이터 범위 최적화: 오래된 데이터 제거가 오히려 성능 향상에 기여
  - 하이퍼파라미터 확장: holidays_prior_scale, n_changepoints, seasonality_mode 등 추가 튜닝 여지
  - 재현성 확보: seed 고정의 중요성 인식`,
      },
    ],
  },
  // ################################ 제주 특산물 가격 예측 모델 개발
  {
    title: '제주 특산물 가격 예측 모델 개발',
    thumbnail: '/src/assets/images/projects/price.png',
    period: '2023.10 - 2023.11',
    description:
      'DACON AI 경진대회에서 제주도 특산물의 가격을 예측하는 시계열 모델을 개발했습니다.',
    tools: ['Python', 'Pandas', 'AutoGluon', 'Scikit-learn', 'pytimekr'],
    link: '',
    overview:
      '2019년부터 2023년 3월까지의 제주 특산물 거래 데이터를 활용하여, 2023년 3월 4일부터 31일까지(28일간)의 품목별 가격(원/kg)을 예측하는 시계열 예측 프로젝트입니다.',
    teamSize: '1명',
    role: '데이터 분석 및 모델링 전체',
    category: 'ML 모델링',
    details: [
      {
        type: 'text',
        title: '프로젝트 배경',
        description: `- 예측 대상: 제주 특산물 5종 (감귤, 브로콜리, 무, 당근, 양배추)
  - 학습 데이터: 2019-01-01 ~ 2023-03-03 거래 데이터
  - 예측 기간: 2023-03-04 ~ 2023-03-31 (28일)
  - 목표: 특산물 가격 예측을 통한 효율적인 수급 관리`,
      },
      {
        type: 'text',
        title: '담당 역할',
        description: `[EDA (탐색적 데이터 분석)]
  - 회사별, 지역별 가격 변동 추이 시각화
  - 수요(supply)와 가격의 일별 변화 패턴 분석
  - 가격, 수출 금액, 수출 중량 간 관계 분석
  - 감귤을 중심으로 가격 추세 확인
  
  [데이터 전처리]
  - 공휴일/일요일 price=0 패턴 발견 → pytimekr 활용 holiday 파생변수 생성
  - 날짜 데이터 분해: year, month, day 컬럼 추가
  - datetime 타입 변환 및 Label Encoding (location, corporation, item)
  - AutoGluon 입력 형식에 맞게 item_id, timestamp 컬럼 구성
  
  [모델링]
  - AutoGluon TimeSeriesPredictor 선정 (AutoML 기반 시계열 예측)
  - prediction_length=28, eval_metric=RMSE 설정
  - random_seed=42로 재현성 확보
  - refit_full()로 전체 데이터 재학습`,
      },
      {
        type: 'text',
        title: '성과',
        description: `- 최종 순위: 2,368명 중 271등 (상위 11%)
  - 최종 RMSE: 934.26893`,
      },
      {
        type: 'text',
        title: '배운 점',
        description: `- AutoML 활용: AutoGluon TimeSeries로 자동화된 모델 선택 및 앙상블 경험
  - Data Leakage 개념 학습: 머신러닝 프로젝트에서 데이터 누수 방지의 중요성 인식
  - 도메인 기반 피처 설계: 공휴일 변수가 가격=0 패턴과 연관됨을 발견하여 파생변수로 활용`,
      },
    ],
  },
  // ################################ 상품 유형별 주요 소비자층 분산분석
  {
    title: '상품 유형별 주요 소비자층 분산분석',
    period: '2023.05 - 2023.06',
    thumbnail: '/src/assets/images/projects/ifood.png',
    description:
      'Superstore 데이터를 활용하여 고객 인구통계학적 특성에 따른 일반재/사치재 소비량 차이를 ANOVA로 분석하고 마케팅 전략을 제안했습니다.',
    tools: ['R', 'ggplot2', 'ANOVA', 'Tukey HSD'],
    link: 'https://github.com/nailson/ifood-data-business-analyst-test',
    overview:
      'IFood brain team의 Superstore 데이터(2,237건)를 활용하여 고객의 소득, 학력, 연령, 자녀 유무 등 인구통계학적 속성이 일반재와 사치재 소비량에 미치는 영향을 분산분석으로 검정하고, 타겟 마케팅 전략을 도출하는 프로젝트입니다.',
    teamSize: '4명',
    role: '데이터 분석 및 통계 모델링',
    category: '데이터 분석',
    details: [
      {
        type: 'text',
        title: '프로젝트 배경',
        description: `- 목적: CRM 기반 개인 맞춤형 마케팅 전략 수립을 위한 소비자 세분화
  - 데이터: IFood Superstore 고객 데이터 (2,237건)
  - 분석 대상: 일반재(Mntnomal) vs 사치재(Mntluxury) 소비량
  - 설명변수: 소득(Income), 학력(Education), 연령(Age), 자녀 유무(Child), 결혼 상태(Marital)`,
      },
      {
        type: 'text',
        title: '담당 역할',
        description: `[EDA (탐색적 데이터 분석)]
  - 소득 구간별 사치재/일반재 소비량 Boxplot 시각화
  - 학력별 소비 패턴 분석: 기초학력자 사치재 소비량 낮음, 학력↑ 일반재 중앙값↓
  - 연령대별 분석: 40~50대 비중 최다, 연령↑ 사치재 소비↑
  
  [데이터 전처리]
  - 변수 범주화: 소득(분위수 기준 high/mid/low), 연령(연령대별 그룹화)
  - 자녀 유무 이진 변수화 (Kidhome + Teenhome → Child)
  - 결혼 상태 통합 (8개 → 그룹화)
  
  [통계 분석]
  - Two-way ANOVA 설계 및 가설 검정
  - 교호작용(Interaction) 검정: Interaction Plot으로 시각화
  - 잔차 분석: Residuals vs Fitted, Q-Q Plot으로 등분산성/정규성 검정
  - Tukey HSD 사후검정으로 집단 간 차이 확인`,
      },
      {
        type: 'text',
        title: '분석 결과',
        description: `[사치재 모델]
  - 유의한 변수: 연령, 자녀 유무, 학력, 소득 (p < 0.001)
  - 결혼 상태: 유의하지 않음 (p = 0.417)
  - 교호작용: 유의미한 교호작용 없음
  - 잔차 분석: 등분산성, 정규성 만족
  
  [일반재 모델]
  - 유의한 교호작용: 소득×교육, 나이×자녀, 소득×자녀
  - 소득과 자녀 유무가 가장 높은 MSE 차지
  - 잔차 분석: 등분산성 만족, 정규성 불만족 → 선형 모델 한계`,
      },
      {
        type: 'text',
        title: '마케팅 전략 제안',
        description: `- 사치재: 중상위 소득 + 자녀 보유 고객 타겟 (고소득층은 전문점 이용 유인 존재)
  - 일반재: 중하위 소득 + 자녀 보유 고객 타겟 (가정 내 필수 소비재 수요)
  - 소득탄력성 관점에서 예상과 다른 결과 → 데이터 제공 기업(IFood) 특성 반영`,
      },
      {
        type: 'text',
        title: '배운 점',
        description: `- ANOVA 가정 검정의 중요성: 등분산성, 정규성 충족 여부가 모델 신뢰도 결정
  - 교호작용 해석: 변수 간 상호작용이 실제 소비 행동과 부합하는지 검증 필요
  - 도메인 맥락 고려: 통계적 결과와 비즈니스 맥락을 결합한 해석 필수`,
      },
    ],
  },
  // ################################ 현대자동차 vs 테슬라 주가 수익률 및 리스크 비교분석
  {
    title: '현대자동차 vs 테슬라 주가 수익률 및 리스크 비교분석',
    period: '2022.06 - 2022.07',
    thumbnail: '/src/assets/images/projects/ht.jpeg',
    description:
      'Yahoo Finance API를 활용하여 현대자동차와 테슬라의 5년간 주가 데이터를 수집하고 핵심 투자 지표를 산출하여 비교 분석했습니다.',
    tools: ['Python', 'Pandas', 'yfinance', 'Matplotlib', 'NumPy'],
    link: 'https://finance.yahoo.com/',
    overview:
      '국내 대표 자동차 기업(현대차)과 글로벌 EV 선두 기업(테슬라)의 2017~2022년 주가 데이터를 기반으로 수익률 및 리스크 지표를 정량적으로 비교 분석하여, 투자 의사결정을 위한 인사이트를 도출하는 프로젝트입니다.',
    teamSize: '4명',
    role: '데이터 수집 및 수익률/리스크 지표 분석',
    category: '데이터 분석',
    details: [
      {
        type: 'text',
        title: '프로젝트 배경',
        description: `- 분석 대상: 현대자동차(005380.KS), 테슬라(TSLA)
  - 분석 기간: 2017-06-15 ~ 2022-06-15 (약 5년, 1,258 거래일)
  - 데이터 소스: Yahoo Finance API (yfinance)
  - 수집 항목: 시가(Open), 고가(High), 저가(Low), 종가(Close), 거래량(Volume), 수정종가(Adj Close)`,
      },
      {
        type: 'text',
        title: '담당 역할',
        description: `[데이터 수집 및 전처리]
  - yfinance API를 통한 일별 OHLCV 데이터 자동 수집
  - 수정종가(Adjusted Close) 기반 분석으로 배당/액면분할 효과 반영
  - 결측값 처리 및 거래일 기준 데이터 정합성 검증
  
  [수익률 분석]
  - 일간 수익률(Daily Return) 산출: Rt = (Pt - Pt-1) / Pt-1 × 100
  - 일간 수익률 분포 히스토그램 시각화 → 변동성(Volatility) 비교
  - 누적 수익률(Cumulative Return) 산출 및 시계열 비교
  
  [리스크 지표 분석]
  - MDD(Maximum Drawdown) 산출: 고점 대비 최대 낙폭률 계산
  - Rolling Window 기반 MDD 추이 시각화
  - 현대차 vs 테슬라 리스크-리턴 프로파일 비교`,
      },
      {
        type: 'text',
        title: '분석 결과',
        description: `[수익률 비교]
  - 테슬라: 5년간 누적 수익률 약 300% 이상, 높은 변동성
  - 현대차: 상대적으로 안정적인 수익률 곡선, 낮은 변동성
  
  [리스크 비교 (MDD)]
  - 테슬라: 최대 낙폭 약 -50% 수준, 고위험-고수익 특성
  - 현대차: 최대 낙폭 약 -40% 수준, 상대적 안정성
  
  [일간 수익률 분포]
  - 테슬라: 넓은 분포 (±20% 범위), 높은 꼬리 리스크
  - 현대차: 좁은 분포 (±10% 범위), 정규분포에 근접`,
      },
      {
        type: 'text',
        title: '활용 방안',
        description: `- MDD 기반 손절 라인 설정: 과거 최대 낙폭을 기준으로 리스크 허용 범위 산정
  - 변동성 기반 포지션 사이징: 변동성이 큰 종목일수록 투자 비중 축소
  - 시장 조정기 대응: MDD 구간 분석을 통해 조정기와 추세 전환 구분`,
      },
      {
        type: 'text',
        title: '배운 점 및 향후 계획',
        description: `- 정량적 리스크 관리: MDD, 변동성 등 리스크 지표의 실무적 의미 이해
  - 금융 데이터 분석 파이프라인: API 수집 → 전처리 → 지표 산출 → 시각화 워크플로우 구축
  - 향후 확장: LSTM 등 시계열 딥러닝 모델을 활용한 주가 예측 및 백테스팅 시스템 개발로의 확장 가능`,
      },
    ],
  },
];
