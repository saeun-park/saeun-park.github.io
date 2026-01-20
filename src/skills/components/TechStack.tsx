import {
  SiPython,
  SiScikitlearn,
  SiR,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiVuedotjs,
  SiReact,
  SiNotion,
  SiFigma,
  SiJira,
  SiGithub,
  SiTailwindcss,
  SiVite,
  SiTableau,
  SiPandas,
  SiNumpy,
  SiJupyter,
  SiAndroidstudio,
  SiKotlin,
} from 'react-icons/si';

interface TechStackProps {
  techs?: string[];
  iconSize?: string; // e.g., "text-lg", "text-xl"
  containerClassName?: string;
  showNames?: boolean;
}

const TechStack = ({
  techs,
  iconSize = 'text-2xl',
  containerClassName = '',
  showNames = true,
}: TechStackProps) => {
  const categories = [
    {
      title: 'Language',
      items: [
        { name: 'Python', icon: SiPython, color: '#3776AB' },
        { name: 'R', icon: SiR, color: '#276DC3' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        { name: 'Kotlin', icon: SiKotlin, color: '#7F52FF' },
      ],
    },
    {
      title: 'Data Analysis',
      items: [
        { name: 'Pandas', icon: SiPandas, color: '#150458' },
        { name: 'NumPy', icon: SiNumpy, color: '#013243' },
        { name: 'Scikit-learn', icon: SiScikitlearn, color: '#F7931E' },
        { name: 'Tableau', icon: SiTableau, color: '#E97627' },
        { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
        { name: 'Jupyter', icon: SiJupyter, color: '#F37626' },
      ],
    },
    {
      title: 'Framework & Backend',
      items: [
        { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
        { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
        { name: 'React', icon: SiReact, color: '#61DAFB' },
        { name: 'Vue.js', icon: SiVuedotjs, color: '#4FC08D' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'Vite', icon: SiVite, color: '#646CFF' },
      ],
    },
    {
      title: 'Tools',
      items: [
        { name: 'Android Studio', icon: SiAndroidstudio, color: '#3DDC84' },
        { name: 'GitHub', icon: SiGithub, color: '#181717' },
        { name: 'Notion', icon: SiNotion, color: '#000000' },
        { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
        { name: 'Jira', icon: SiJira, color: '#0052CC' },
      ],
    },
  ];

  // If a list of techs is provided, filter and display them in a simple grid
  if (techs) {
    const techSet = new Set(techs.map((t) => t.toLowerCase()));
    const allTechs = categories.flatMap((category) => category.items);
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

  // Original marquee display
  return (
    <div className="marquee-container overflow-hidden">
      <div className="marquee-content flex items-center gap-8">
        {categories.flatMap((category) =>
          category.items.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="flex flex-col items-center justify-center flex-shrink-0 mr-12"
              >
                <Icon className="text-6xl sm:text-7xl md:text-8xl mb-2" style={{ color: tech.color }} />
                <span className=" text-gray-700 font-medium">{tech.name}</span>
              </div>
            );
          })
        )}
        {/* Duplicate content for seamless looping */}
        {categories.flatMap((category) =>
          category.items.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={`${tech.name}-duplicate`} // Unique key for duplicates
                className="flex flex-col items-center justify-center flex-shrink-0 mr-12"
              >
                <Icon className="text-6xl sm:text-7xl md:text-8xl mb-2" style={{ color: tech.color }} />
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
