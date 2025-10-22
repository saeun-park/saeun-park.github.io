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
} from 'react-icons/si';

const TechStack = () => {
  const categories = [
    {
      title: 'Language',
      items: [
        { name: 'Python', icon: SiPython, color: '#3776AB' },
        { name: 'R', icon: SiR, color: '#276DC3' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
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
      title: 'Frontend',
      items: [
        { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
        { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
        { name: 'React', icon: SiReact, color: '#61DAFB' },
        { name: 'Vue', icon: SiVuedotjs, color: '#4FC08D' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'Vite', icon: SiVite, color: '#646CFF' },
      ],
    },
    {
      title: 'Tools',
      items: [
        { name: 'GitHub', icon: SiGithub, color: '#181717' },
        { name: 'Notion', icon: SiNotion, color: '#000000' },
        { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
        { name: 'Jira', icon: SiJira, color: '#0052CC' },
      ],
    },
  ];

  return (
    <div className="mt-16 space-y-8">
      {categories.map((category) => (
        <div key={category.title} className="flex items-center gap-6">
          <h3 className="text-lg font-bold text-gray-800 w-32 text-right flex-shrink-0">
            {category.title}
          </h3>
          <div className="flex gap-4 flex-wrap">
            {category.items.map((tech) => {
              const Icon = tech.icon;
              return (
                <div
                  key={tech.name}
                  className="group relative w-14 h-14 bg-white rounded-lg shadow flex items-center justify-center hover:shadow-lg transition-shadow"
                >
                  <Icon className="text-2xl" style={{ color: tech.color }} />
                  <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    <span className="text-xs text-gray-600 font-medium">
                      {tech.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
