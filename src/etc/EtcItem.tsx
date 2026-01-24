import { ChevronDown, Link as LinkIcon } from 'lucide-react';
import type { EtcActivity } from './EtcData';

interface EtcItemProps {
  activity: EtcActivity;
  isOpen: boolean;
  onToggle: () => void;
}

const EtcItem = ({ activity, isOpen, onToggle }: EtcItemProps) => {
  const hasDetails = activity.details && activity.details.length > 0;

  return (
    <div
      className={`group transition-all duration-300 rounded-xl ${
        isOpen ? 'p-4 -mx-4' : 'py-4'
      }`}
    >
      <div
        className={`flex justify-between items-start ${
          hasDetails ? 'cursor-pointer' : ''
        }`}
        onClick={() => hasDetails && onToggle()}
      >
        <div className="flex flex-col sm:flex-row sm:items-center w-full">
          <p className="text-sm font-medium text-gray-400 w-full sm:w-40 shrink-0 mb-1 sm:mb-0">
            {activity.period}
          </p>
          <div className="flex items-center gap-3">
            <div
              className={`w-2 h-2 rounded-full transition-colors ${
                isOpen ? 'bg-pink-500' : 'bg-gray-300 group-hover:bg-pink-400'
              }`}
            ></div>
            <p
              className={`text-lg transition-colors ${
                isOpen ? 'text-pink-600 font-semibold' : 'text-gray-700'
              }`}
            >
              {activity.title}
            </p>
          </div>
        </div>
        {hasDetails && (
          <div
            className={`p-1 rounded-full transition-colors ${
              isOpen ? 'bg-pink-100 text-pink-600' : 'text-gray-400'
            }`}
          >
            <ChevronDown
              size={20}
              className={`transition-transform duration-300 ${
                isOpen ? 'rotate-180' : ''
              }`}
            />
          </div>
        )}
      </div>

      {/* 상세 내용 영역 */}
      {hasDetails && (
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col sm:flex-row">
            <div className="hidden sm:block sm:w-[11.2rem] shrink-0"></div>

            {/* 핑크색 선(border-l-2) 내부 컨테이너 */}
            <div className="flex-grow flex flex-col gap-6 border-l-2 border-pink-100 ml-1 pl-6 py-2">
              {/* 1. 링크 카드 (선 안쪽에 위치) */}
              {activity.link && (
                <a
                  href={activity.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white border-gray-100 rounded-xl hover:border-pink-200 border-2 hover:shadow-md transition-all group/link w-full max-w-2xl"
                >
                  <div className="w-12 h-12 bg-pink-50 rounded-lg flex items-center justify-center shrink-0 group-hover/link:bg-pink-100 transition-colors">
                    <LinkIcon size={20} className="text-pink-500" />
                  </div>
                  <div className="flex-grow min-w-0">
                                      <div className="flex items-center gap-2 mb-0.5">
                                        <span className="text-xs font-bold text-pink-500 uppercase">
                                          {activity.linkType || 'Link'}
                                        </span>
                                      </div>
                                      <p className="text-sm text-gray-800 font-semibold truncate">
                                        {activity.linkText || activity.title}
                                      </p>                  </div>
                </a>
              )}

              {/* 2. 상세 텍스트 (선 안쪽에 위치) */}
              <div className="text-sm text-gray-600 leading-relaxed whitespace-pre-wrap italic">
                {activity.details}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EtcItem;
