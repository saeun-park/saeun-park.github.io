import { techCategories } from '../../../data/TechStackData';

interface TechStackProps {
  techs?: string[];
  iconSize?: string;
  containerClassName?: string;
  showNames?: boolean;
}

const TechStack = ({
  techs,
  iconSize = 'text-2xl',
  containerClassName = '',
  showNames = true,
}: TechStackProps) => {
  if (techs) {
    const techSet = new Set(techs.map((t) => t.toLowerCase()));
    const allTechs = techCategories.flatMap((category) => category.items);
    const filteredTechs = allTechs.filter((tech) =>
      techSet.has(tech.name.toLowerCase())
    );

    return (
      <div
        className={`flex flex-wrap ${
          showNames ? 'gap-4' : 'gap-2'
        } justify-start my-2 ${containerClassName}`}
      >
        {filteredTechs.map((tech) => {
          const Icon = tech.icon;
          return (
            <div
              key={tech.name}
              className={`flex items-center justify-center bg-gray-100 rounded-md ${
                showNames ? 'gap-2 px-3 py-2' : 'p-2'
              }`}
            >
              <Icon className={iconSize} style={{ color: tech.color }} />
              {showNames && (
                <span className="text-sm text-gray-800 font-medium">
                  {tech.name}
                </span>
              )}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="marquee-container overflow-hidden">
      <div className="marquee-content flex items-center gap-8">
        {techCategories.flatMap((category) =>
          category.items.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="flex flex-col items-center justify-center flex-shrink-0 mr-12"
              >
                <Icon
                  className="text-6xl sm:text-7xl md:text-8xl mb-2"
                  style={{ color: tech.color }}
                />
                <span className=" text-gray-700 font-medium">{tech.name}</span>
              </div>
            );
          })
        )}
        {techCategories.flatMap((category) =>
          category.items.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={`${tech.name}-duplicate`}
                className="flex flex-col items-center justify-center flex-shrink-0 mr-12"
              >
                <Icon
                  className="text-6xl sm:text-7xl md:text-8xl mb-2"
                  style={{ color: tech.color }}
                />
                <span className=" text-gray-700 font-medium">{tech.name}</span>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default TechStack;
