import { useState } from 'react';
import Header from './layout/Header';
import Profile from './sections/home/Home';
import AboutMe from './sections/aboutme/AboutMe';
import TechStack from './sections/techstack/TechStack';
import Experience from './sections/experiences/Experience';
import Project from './sections/projects/Project';
import Etc from './sections/etc/Etc';
import Contact from './sections/contact/Contact';
import ProjectModal from './sections/projects/components/ProjectModal';
import type { ProjectData } from './data/ProjectData';
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
        <Profile scrollToSection={scrollToSection}></Profile>
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
