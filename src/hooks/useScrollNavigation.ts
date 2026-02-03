import { useState, useEffect, useRef, useCallback } from 'react';
import { smoothScrollTo } from '../utils/scrollUtils';

interface UseScrollNavigationProps {
  initialActiveSection?: string;
  sectionIds: string[];
  scrollLockDelay?: number; // milliseconds to lock scroll updates after programmatic scroll
}

const useScrollNavigation = ({
  initialActiveSection = 'profile',
  sectionIds,
  scrollLockDelay = 1000,
}: UseScrollNavigationProps) => {
  const [activeSection, setActiveSection] = useState(initialActiveSection);
  const scrollLockTimeout = useRef<number | null>(null);

  const handleScroll = useCallback(() => {
    if (scrollLockTimeout.current) {
      return;
    }

    const header = document.getElementById('main-header');
    const headerOffset = header ? header.offsetHeight : 0;
    const scrollPosition = window.scrollY + headerOffset + 1;

    let currentSection = '';

    for (const sectionId of sectionIds) {
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
  }, [activeSection, sectionIds]);

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
      }, scrollLockDelay);

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

  return { activeSection, scrollToSection };
};

export default useScrollNavigation;
