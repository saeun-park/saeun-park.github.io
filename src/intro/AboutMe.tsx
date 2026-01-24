import { useState } from 'react'; // Import useState
import { Fade } from 'react-awesome-reveal';
import ProfileImg from '../assets/images/qkrtkdms.png';
// import { ExternalLink } from 'lucide-react';
import CertificateItem from './components/CertificateItem';
import EducationItem from './components/EducationItem';
import Modal from '../components/Modal'; // Import Modal
import { certificates, educationItems } from './AboutMeData'; // Import data

const AboutMe = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="aboutme" className="pb-8">
      <Fade triggerOnce direction="up" duration={1000}>
        <div className="flex items-center gap-4 mt-12 mb-16">
          <h2 className="text-3xl sm:text-4xl text-gray-800 font-bold">
            ABOUT ME.
          </h2>
          <div className="h-[2px] flex-grow bg-gray-200 mt-2"></div>
        </div>
      </Fade>
      <div className="px-4 sm:px-8 md:px-20">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 mb-12">
          {/* Left: Image */}
          <div className="flex-shrink-0">
            {/* <Fade triggerOnce direction="up" duration={1000}> */}
            <img
              src={ProfileImg}
              alt="프로필"
              className="w-[80%] max-w-sm mx-auto"
            />
            {/* </Fade> */}
          </div>
          {/* Right: Saeun Park, Intro, Resume Download */}
          <div className="flex-1 text-center md:text-left">
            <Fade triggerOnce direction="up" duration={1000}>
              <h3 className="text-xl font-light text-pink-600 mb-4">
                Saeun Park
              </h3>
            </Fade>
            <Fade triggerOnce direction="up" duration={1000}>
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                공공기관, 금융권, IT기업을 거치며 실무에서의 기획과 개발을
                경험하고, 데이터를 다루며 IT 서비스의 전체 사이클을
                이해해왔습니다. '기획된 서비스가 데이터로 검증되고 실제
                시스템으로 구현되는 과정' 전체를 경험하는 것이 더 나은 IT 인재로
                성장하는 핵심이라고 믿습니다.
                <br />
                <br />
                새로운 업무를 맡으면 기능 구현보다 먼저 '왜 필요한가'를 이해하려
                노력하고, 복잡한 문제는 핵심 요소로 나누어 단계적으로
                접근합니다. 또한 반복 작업은 자동화하고, 이를 명확히 문서화해
                팀원 누구나 활용할 수 있도록 만드는 것을 중요하게 생각합니다.
                <br />
                <br />
                완벽한 결과물을 한 번에 만들기보다, 빠른 프로토타입과 반복적인
                개선을 통해 실제 사용 환경에 맞춰 정교하게 다듬어가는 방식을
                선호합니다.
              </p>
            </Fade>
            {/* Resume Download Link */}
            {/* <Fade triggerOnce direction="up" duration={1000}>
              <a
                href={resumePath}
                download={hasResume ? 'resume.pdf' : undefined}
                onClick={handleResumeClick}
                className={`flex items-center justify-center md:justify-start gap-2 ${
                  hasResume
                    ? 'text-blue-600 hover:underline'
                    : 'text-gray-400 cursor-pointer'
                }`}
              >
                <ExternalLink size={16} />
                <span>이력서 다운로드</span>
              </a>
            </Fade> */}
          </div>
        </div>

        {/* Bottom Part: Education and Work Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* Left: Education */}
          <div>
            <Fade triggerOnce direction="up" duration={1000}>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                EDUCATION
              </h3>
            </Fade>
            <Fade triggerOnce direction="up" duration={1000}>
              <ul className="space-y-4 text-gray-700 font-light">
                {educationItems.map((item, index) => (
                  <EducationItem
                    key={index}
                    period={item.period}
                    description={item.description}
                  />
                ))}
              </ul>
            </Fade>
          </div>
          {/* Right: Work Experience */}
          <div>
            <Fade triggerOnce direction="up" duration={1000}>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                CERTIFICATES
              </h3>
            </Fade>
            <Fade triggerOnce direction="up" duration={1000}>
              <ul className="space-y-4 text-gray-700 font-light">
                {certificates.map((cert, index) => (
                  <CertificateItem
                    key={index}
                    date={cert.date}
                    name={cert.name}
                    issuer={cert.issuer}
                  />
                ))}
              </ul>
            </Fade>
          </div>
        </div>
      </div>

      {/* No Resume Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        // title="잠깐!"
      >
        <p className="text-lg text-gray-700 text-center">
          아직 이력서가 준비중입니다.
        </p>
      </Modal>
    </section>
  );
};

export default AboutMe;
