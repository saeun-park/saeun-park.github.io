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
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Header
        activeSection={activeSection}
        onNavigate={scrollToSection}
      ></Header>
      <Profile></Profile>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Experience></Experience>
      <Project></Project>
      <Etc></Etc>
      <Footer></Footer>
    </div>
  );
};

export default Portfolio;
