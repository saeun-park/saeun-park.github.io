import { Fade } from 'react-awesome-reveal';
import { etcActivities } from './EtcData';
import EtcItem from './EtcItem';

const Etc = () => {
  return (
    <section id="etc" className="pb-20">
      <div>
      <Fade triggerOnce direction="up" duration={1000}>
        <h2 className="text-3xl sm:text-4xl text-gray-800 font-bold my-12">
          Etc
        </h2>
      </Fade>
        <div className="space-y-2 px-4 sm:px-8 md:px-20">
          {etcActivities.map((activity, index) => (
            <Fade key={index} triggerOnce direction="up" duration={1000}>
              <EtcItem activity={activity} />
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Etc;
