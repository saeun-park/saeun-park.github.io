import { useState, useMemo } from 'react';
import { projects } from './ProjectData';
import type { ProjectData } from './ProjectData';
import ProjectCard from './components/ProjectCard';
// import { FaStar } from 'react-icons/fa'; // Import FaStar

interface ProjectProps {
  setSelectedProject: (project: ProjectData | null) => void;
}

const TABS = ['전체', '기획/개발', 'ML 모델링', '데이터 분석'] as const;
type Tab = (typeof TABS)[number];

const Project = ({ setSelectedProject }: ProjectProps) => {
  const [activeTab, setActiveTab] = useState<Tab>('전체');
  const [showImportantOnly, setShowImportantOnly] = useState(false);

  const processedProjects = useMemo(() => {
    let currentProjects = projects;

    // 1. Filter by category
    if (activeTab !== '전체') {
      currentProjects = currentProjects.filter((p) => p.category === activeTab);
    }

    // 2. Filter by importance (applied after category filter)
    if (showImportantOnly) {
      currentProjects = currentProjects.filter((p) => p.isImportant);
    }

    // Sort by latest date (assuming period is "YYYY.MM - YYYY.MM")
    const getStartDate = (period: string) => {
      const startDateString = period.split(' - ')[0];
      return new Date(startDateString.replace('.', '-'));
    };

    return currentProjects.sort(
      (a, b) =>
        getStartDate(b.period).getTime() - getStartDate(a.period).getTime()
    );
  }, [activeTab, showImportantOnly]);

  return (
    <section id="projects" className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">PROJECTS</h2>

        <div className="flex flex-wrap justify-center sm:justify-between items-center mb-8 gap-4">
          {/* Category Filters */}
          <div className="flex-wrap flex justify-center space-x-2 bg-gray-200 p-1 rounded-2xl">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm sm:text-base font-medium rounded-2xl transition-colors duration-300 ${
                  activeTab === tab
                    ? 'bg-pink-500 text-white'
                    : 'text-gray-600 hover:bg-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Important Projects Toggle */}
          <label
            htmlFor="importantToggle"
            className="flex items-center space-x-2 cursor-pointer text-gray-600 hover:text-pink-500"
          >
            <input
              type="checkbox"
              id="importantToggle"
              className="sr-only"
              checked={showImportantOnly}
              onChange={() => setShowImportantOnly(!showImportantOnly)}
            />
            <span
              className={`w-5 h-5 border-2 rounded ${
                showImportantOnly
                  ? 'border-pink-500 bg-pink-500'
                  : 'border-gray-400'
              } flex items-center justify-center`}
            >
              {showImportantOnly && (
                <svg
                  className="w-3 h-3 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              )}
            </span>
            <span>주요 프로젝트만 보기</span>
          </label>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {processedProjects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onClick={setSelectedProject}
              layout="wide"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
