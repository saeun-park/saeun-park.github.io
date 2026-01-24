import { useState } from 'react'; // useState 추가
import { Fade } from 'react-awesome-reveal';
import { etcActivities } from './EtcData';
import EtcItem from './EtcItem';

const Etc = () => {
  // 기본값으로 0(첫 번째 아이템)을 설정하여 첫 토글을 열어둡니다.
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    // 이미 열려있는 걸 누르면 닫고(null), 아니면 해당 인덱스를 엽니다.
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section id="etc" className="pb-32">
      <div className="max-w-5xl mx-auto">
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
                  // 부모로부터 열림 여부와 토글 함수를 전달받습니다.
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
