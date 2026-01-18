import React, { useState } from 'react'; // Import useState
import ProfileImg from '../assets/images/qkrtkdms.png';
import { ExternalLink } from 'lucide-react';
import CertificateItem from './components/CertificateItem';
import EducationItem from './components/EducationItem';
import Modal from '../components/Modal'; // Import Modal
import { certificates, educationItems } from './AboutMeData'; // Import data

const AboutMe = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const resumePath = '/path/to/your/resume.pdf'; // Placeholder for actual resume path
  const hasResume = resumePath !== '/path/to/your/resume.pdf'; // Check if resume path is set

  const handleResumeClick = (e: React.MouseEvent) => {
    if (!hasResume) {
      e.preventDefault(); // Prevent default link behavior
      setIsModalOpen(true);
    }
    // If hasResume is true, the link will handle the download
  };

  return (
    <section id="aboutme">
      <h2 className="text-4xl text-gray-800 font-bold my-12">ABOUT ME</h2>
      <div className="mx-20">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 mb-12">
          {/* Left: Image */}
          <div className="flex-shrink-0">
            <img src={ProfileImg} alt="프로필" className="w-[80%] max-w-sm" />
          </div>
          {/* Right: Saeun Park, Intro, Resume Download */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-light text-pink-600 mb-4">
              Saeun Park
            </h3>
            <p className="text-base text-gray-700 leading-relaxed mb-6">
              공공기관, 금융권, IT기업 등 서로 다른 환경에서 기획부터 데이터
              분석, 그리고 개발까지 경험하며 IT 업무의 전체 흐름을 이해해
              왔습니다. 특정 역할에 국한되기보다, 서비스가 기획되고 데이터로
              검증되며 실제 시스템으로 구현되는 과정을 직접 경험하는 것이 IT
              인재로 성장하는 데 중요한 과정이라고 느꼈습니다.
              <br />
              <br />
              새로운 업무를 맡을 때는 기능 구현보다 먼저 업무의 목적과 맥락을
              이해하려 노력하며, 복잡한 문제일수록 핵심 요소를 나누어 단계적으로
              접근합니다.
              <br />
              또한 결과물을 한 번에 완성하기보다 반복적인 수정과 피드백을 통해
              실제 사용 환경에 맞게 다듬는 방식을 선호합니다.
              <br />
              <br />
              이러한 경험을 바탕으로 조직과 도메인이 달라져도 빠르게 적응하며,{' '}
              기술과 업무를 연결하는 역할을 수행하고자 합니다.
            </p>
            {/* Resume Download Link */}
            <a
              href={resumePath}
              download={hasResume ? 'resume.pdf' : undefined}
              onClick={handleResumeClick}
              className={`flex items-center gap-2 ${
                hasResume
                  ? 'text-blue-600 hover:underline'
                  : 'text-gray-400 cursor-pointer'
              }`}
            >
              <ExternalLink size={16} />
              <span>이력서 다운로드</span>
            </a>
          </div>
        </div>

        {/* Bottom Part: Education and Work Experience */}
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Left: Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">EDUCATION</h3>
            <ul className="space-y-4 text-gray-700 font-light">
              {educationItems.map((item, index) => (
                <EducationItem
                  key={index}
                  period={item.period}
                  description={item.description}
                />
              ))}
            </ul>
          </div>
          {/* Right: Work Experience */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              CERTIFICATES
            </h3>
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
          </div>
        </div>
      </div>

      {/* No Resume Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="잠깐!"
      >
        <p className="text-lg text-gray-700 text-center">
          아직 이력서가 준비중입니다 😫
        </p>
      </Modal>
    </section>
  );
};

export default AboutMe;
