interface ExperienceItemProps {
  company: string;
  position: string;
  months: string;
  period: string;
  description: string[];
  logo: string;
}

const ExperienceItem = ({
  company,
  // position,
  period,
  // months,
  description,
  logo,
}: ExperienceItemProps) => {
  return (
    <div className="flex gap-24 items-start">
      {/* 왼쪽: 로고 */}
      <div className="flex-shrink-0">
        <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 shadow-md">
          <img
            src={logo}
            alt={`${company} 로고`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* 오른쪽: 정보 */}
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{company}</h3>
        </div>
        <p className=" text-gray-700 mb-3">{period}</p>
        <div className="flex gap-3 flex-wrap">
          {/* <span className="px-5 py-1 bg-gray-800 text-white rounded-2xl mb-3 inline-block">
            {position}
          </span> */}
          {/* <span className="px-4 py-1 bg-gray-200 text-gray-700 border-2 border-gray-400 rounded-2xl mb-3 inline-block">
            {months}
          </span>{' '} */}
        </div>

        <ul className="space-y-2">
          {description.map((item, index) => (
            <li key={index} className=" text-gray-700 leading-relaxed flex">
              <span className="mr-2">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceItem;
