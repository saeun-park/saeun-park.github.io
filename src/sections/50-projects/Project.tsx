import { Fade } from 'react-awesome-reveal';
import { useState, useMemo } from 'react';
import { projects } from '../../data/50-ProjectData';
import type { ProjectData } from '../../data/50-ProjectData';
import ProjectCard from './components/ProjectCard';

interface ProjectProps {
  setSelectedProject: (project: ProjectData | null) => void;
}

const TABS = ['전체', '기획/개발', '데이터 분석'] as const;
type Tab = (typeof TABS)[number];

const Project = ({ setSelectedProject }: ProjectProps) => {
  const [activeTab, setActiveTab] = useState<Tab>('전체');
  const [showImportantOnly, setShowImportantOnly] = useState(false);

  const processedProjects = useMemo(() => {
    let currentProjects = projects;

    if (activeTab !== '전체') {
      currentProjects = currentProjects.filter((p) => p.category === activeTab);
    }

    if (showImportantOnly) {
      currentProjects = currentProjects.filter((p) => p.isImportant);
    }

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
    <section id="projects" className="pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 mt-12 mb-16">
          <h2 className="text-3xl sm:text-4xl text-gray-800 font-bold">
            PROJECTS.
          </h2>
          <div className="h-[2px] flex-grow bg-gray-200 mt-2"></div>
        </div>

        {/* 상단 필터 영역 */}
        <div className="relative mb-12 flex items-center justify-center">
          {/* 카테고리 필터 - 정중앙 정렬 */}
          <div className="flex space-x-2 bg-gray-200 p-1 rounded-2xl">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm sm:text-base font-medium rounded-2xl transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-pink-500 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* 중요 프로젝트 토글 - 오른쪽 끝에 배치 */}
          <div className="absolute right-0 hidden sm:block">
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
              <div
                className={`w-5 h-5 border-2 rounded transition-colors ${
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
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
              <span className="text-md font-medium">주요 프로젝트</span>
            </label>
          </div>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {processedProjects.map((project) => (
            <Fade
              key={project.title}
              triggerOnce
              direction="up"
              duration={1000}
            >
              <ProjectCard
                project={project}
                onClick={setSelectedProject}
                layout="wide"
              />
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
