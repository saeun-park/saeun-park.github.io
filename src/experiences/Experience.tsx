import { Fade } from 'react-awesome-reveal';
import ExperienceItem from './contents/ExperienceItem';
import { experiences } from './ExperienceData';

const Experience = () => {
  return (
    <section id="experience" className="pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <Fade triggerOnce direction="up" duration={1000}>
          <div className="flex items-center gap-4 mt-12 mb-16">
            <h2 className="text-3xl sm:text-4xl text-gray-800 font-bold">
              WORK EXPERIENCES.
            </h2>
            <div className="h-[2px] flex-grow bg-gray-200 mt-2"></div>
          </div>
        </Fade>
        <div className="px-4 sm:px-8 md:px-20">
          <div className="space-y-20">
            {experiences.map((exp, index) => (
              <Fade key={index} triggerOnce direction="up" duration={1000}>
                <ExperienceItem
                  company={exp.company}
                  position={exp.position}
                  period={exp.period}
                  months={exp.months}
                  description={exp.description}
                  logo={exp.logo}
                />
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
