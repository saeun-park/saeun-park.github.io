import React from 'react';
import { Fade } from 'react-awesome-reveal';
import ProfileImg from '../../assets/images/saeunpark.png';
import CertificateItem from './CertificateItem';
import EducationItem from './EducationItem';
import {
  certificateItems,
  educationItems,
  ABOUT_ME_DESCRIPTION,
} from '../../data/20-AboutMeData';

const AboutMe = () => {
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
          {/* 왼쪽: 이미지 */}
          <div className="flex-shrink-0">
            <img
              src={ProfileImg}
              alt="프로필"
              className="w-[80%] max-w-sm mx-auto"
            />
          </div>
          {/* 오른쪽 */}
          <div className="flex-1 text-center md:text-left">
            <Fade triggerOnce direction="up" duration={1000}>
              <h3 className="text-xl font-light text-pink-600 mb-4">
                Saeun Park
              </h3>
            </Fade>
            <Fade triggerOnce direction="up" duration={1000}>
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                {ABOUT_ME_DESCRIPTION.map((paragraph, index) => (
                  <React.Fragment key={index}>
                    {paragraph}
                    {index < ABOUT_ME_DESCRIPTION.length - 1 && (
                      <>
                        <br />
                        <br />
                      </>
                    )}
                  </React.Fragment>
                ))}
              </p>
            </Fade>
          </div>
        </div>

        {/* bottom 영역 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* 왼쪽: Education */}
          <div>
            <Fade triggerOnce direction="up" duration={1000}>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                EDUCATION
              </h3>
            </Fade>
            <Fade triggerOnce direction="up" duration={1000}>
              <ul className="space-y-4 text-gray-700 font-normal">
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
          {/* 오른쪽: Work Experience */}
          <div>
            <Fade triggerOnce direction="up" duration={1000}>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                CERTIFICATES
              </h3>
            </Fade>
            <Fade triggerOnce direction="up" duration={1000}>
              <ul className="space-y-4 text-gray-700 font-normal">
                {certificateItems.map((cert, index) => (
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
    </section>
  );
};

export default AboutMe;
