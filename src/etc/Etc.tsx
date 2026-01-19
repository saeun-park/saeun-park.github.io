import { etcActivities } from './EtcData';
import EtcItem from './EtcItem';

const Etc = () => {
  return (
    <section id="etc" className="py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Etc</h2>
        <div className="space-y-2">
          {etcActivities.map((activity, index) => (
            <EtcItem key={index} activity={activity} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Etc;
