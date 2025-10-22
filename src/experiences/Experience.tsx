import ExperienceItem from './contents/ExperienceItem';
import { experiences } from './ExperienceData';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-black text-center mb-16">EXPERIENCE</h2>

        <div className="space-y-20">
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={index}
              company={exp.company}
              position={exp.position}
              period={exp.period}
              months={exp.months}
              description={exp.description}
              logo={exp.logo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
