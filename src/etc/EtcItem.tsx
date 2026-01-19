import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { EtcActivity } from './EtcData';

interface EtcItemProps {
  activity: EtcActivity;
}

const EtcItem = ({ activity }: EtcItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasDetails = activity.details && activity.details.length > 0;

  return (
    <div className="border-b border-gray-200 py-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => hasDetails && setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <p className="text-sm text-gray-500 w-32 shrink-0 mr-20">
            {activity.period}
          </p>
          <p className="text-gray-800">{activity.title}</p>
        </div>
        {hasDetails && (
          <ChevronDown
            size={20}
            className={`text-gray-500 transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        )}
      </div>
      {hasDetails && (
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 mt-4' : 'max-h-0'
          }`}
        >
          <p className="text-sm text-gray-600 pl-32 ml-20">
            {activity.details}
          </p>
        </div>
      )}
    </div>
  );
};

export default EtcItem;
