import { useState } from 'react';
import Header from './layout/Header';
import {
  Home,
  AboutMe,
  TechStack,
  Experience,
  Project,
  Etc,
  Contact,
} from './sections';
import ProjectModal from './sections/50-projects/components/ProjectModal';
import type { ProjectData } from './data/50-ProjectData';
import useScrollNavigation from './hooks/useScrollNavigation';

const Portfolio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
    null
  );

  const sectionIds = [
    'profile',
    'aboutme',
    'skills',
    'projects',
    'experience',
    'etc',
    'contact',
  ];

  const { activeSection, scrollToSection } = useScrollNavigation({
    sectionIds,
  });

  return (
    <div className="relative min-h-screen">
      <div className={`relative ${isModalOpen ? 'z-0' : 'z-10'}`}>
        <Header
          activeSection={activeSection}
          onNavigate={scrollToSection}
          isModalOpen={isModalOpen}
        ></Header>
        <Home scrollToSection={scrollToSection}></Home>
        <main className="max-w-6xl mx-auto px-4 space-y-12">
          <AboutMe></AboutMe>
        </main>
        <TechStack></TechStack>
        <main className="max-w-6xl mx-auto px-4 mb-12 space-y-12">
          {' '}
          <Experience></Experience>
          <Project setSelectedProject={setSelectedProject}></Project>
          <Etc></Etc>{' '}
        </main>
        <Contact></Contact>
      </div>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  );
};

export default Portfolio;
