import { useRef } from 'react';
import Footer from '../../layout/Footer';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import AnimatedTypingText from '../../components/AnimatedTypingText';
import ContactDetails from './ContactItem';

import { CONTACT_INFO, CONTACT_TITLE } from '../../data/70-ContactData';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null!);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.3 });

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen bg-gray-800 flex flex-col text-white pt-20"
    >
      <div className="flex-grow flex flex-col justify-center px-8 md:px-24 lg:px-40">
        <div className="mb-20 md:mb-32">
          {/* TITLE */}
          <AnimatedTypingText
            text={CONTACT_TITLE}
            as="h2"
            className="text-4xl md:text-6xl text-left"
            isVisible={isVisible}
            delayPerChar={0.1}
          />
        </div>
        <ContactDetails
          contactInfo={CONTACT_INFO} // DATA
          isVisible={isVisible}
          animationDelay={`${(CONTACT_TITLE.length + 5) * 0.1}s`}
        />
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
