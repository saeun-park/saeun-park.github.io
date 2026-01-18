import { useState, useEffect } from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Profile from './intro/Profile';
import AboutMe from './intro/AboutMe';
import Skills from './skills/Skills';
import Experience from './experiences/Experience';
import Project from './projects/Project';
import Etc from './etc/Etc';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('profile');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'profile',
        'aboutme',
        'skills',
        'projects',
        'experience',
        'etc',
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const header = document.getElementById('main-header');
    const headerOffset = header ? header.offsetHeight : 0; // Get header height
    const element = document.getElementById(sectionId);

    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset - 20; // -20 for a little extra padding

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* Content */}
      <div className="relative z-10">
        <Header
          activeSection={activeSection}
          onNavigate={scrollToSection}
        ></Header>
        <Profile></Profile>
        <main className="max-w-6xl mx-auto px-4 mb-12 space-y-12">
          <AboutMe></AboutMe>
        </main>
        <Skills></Skills> {/* Full width skills section */}
        <main className="max-w-6xl mx-auto px-4 mb-12 space-y-12">
          {' '}
          {/* Subsequent sections */}
          <Experience></Experience>
          <Project></Project>
          <Etc></Etc>
        </main>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Portfolio;
