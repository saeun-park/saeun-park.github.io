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

export const techCategories = [
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