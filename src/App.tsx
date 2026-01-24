import { useState, useEffect, useRef, useCallback } from 'react';
import Header from './layout/Header';
import Profile from './intro/Profile';
import AboutMe from './intro/AboutMe';
import Skills from './skills/Skills';
import Experience from './experiences/Experience';
import Project from './projects/Project';
import Etc from './etc/Etc';
import Contact from './contact/Contact';
import ProjectModal from './projects/components/ProjectModal';
import type { ProjectData } from './projects/ProjectData';
// import { Fade } from 'react-awesome-reveal';
import { smoothScrollTo } from './utils/scrollUtils';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
    null
  );
  const scrollLockTimeout = useRef<number | null>(null);

  const handleScroll = useCallback(() => {
    if (scrollLockTimeout.current) {
      return;
    }

    const sections = [
      'profile',
      'aboutme',
      'skills',
      'projects',
      'experience',
      'etc',
      'contact',
    ];
    const header = document.getElementById('main-header');
    const headerOffset = header ? header.offsetHeight : 0;
    const scrollPosition = window.scrollY + headerOffset + 1;

    let currentSection = '';

    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element && element.offsetTop <= scrollPosition) {
        currentSection = sectionId;
      } else {
        break;
      }
    }

    if (activeSection !== currentSection && currentSection !== '') {
      setActiveSection(currentSection);
    }
  }, [activeSection]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToSection = (sectionId: string) => {
    const header = document.getElementById('main-header');
    const headerOffset = header ? header.offsetHeight : 0;
    const element = document.getElementById(sectionId);

    if (element) {
      setActiveSection(sectionId);

      if (scrollLockTimeout.current) {
        clearTimeout(scrollLockTimeout.current);
      }
      scrollLockTimeout.current = setTimeout(() => {
        scrollLockTimeout.current = null;
      }, 1000);

      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;

      if (sectionId === 'contact') {
        smoothScrollTo(elementPosition, 800);
      } else {
        const offsetPosition = elementPosition - headerOffset - 20;
        smoothScrollTo(offsetPosition, 800);
      }
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* Content */}
      <div className={`relative ${isModalOpen ? 'z-0' : 'z-10'}`}>
        <Header
          activeSection={activeSection}
          onNavigate={scrollToSection}
          isModalOpen={isModalOpen}
        ></Header>
        <Profile></Profile>
        <main className="max-w-6xl mx-auto px-4 space-y-12">
          <AboutMe></AboutMe>
        </main>
        <Skills></Skills> {/* Full width skills section */}
        <main className="max-w-6xl mx-auto px-4 mb-12 space-y-12">
          {' '}
          {/* Subsequent sections */}
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
