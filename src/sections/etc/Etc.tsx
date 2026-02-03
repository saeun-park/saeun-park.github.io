import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { etcActivities } from '../../data/EtcData';
import EtcItem from './EtcItem';

const Etc = () => {
  // 기본값으로 첫 토글 열어두기
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section id="etc" className="pb-32">
      <div className="max-w-7xl mx-auto px-4">
        <Fade triggerOnce direction="up" duration={1000}>
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl sm:text-4xl text-gray-800 font-bold">
              Etc.
            </h2>
            <div className="h-[2px] flex-grow bg-gray-200 mt-2"></div>
          </div>
        </Fade>

        <div className="relative px-4 sm:px-8 md:px-20">
          <div className="space-y-4">
            {etcActivities.map((activity, index) => (
              <Fade
                key={index}
                triggerOnce
                direction="up"
                duration={1000}
                delay={index * 100}
              >
                <EtcItem
                  activity={activity}
                  isOpen={openIndex === index}
                  onToggle={() => handleToggle(index)}
                />
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Etc;
