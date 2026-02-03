import { useRef } from 'react';
import Footer from '../../layout/Footer';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import AnimatedTitle from './components/AnimatedTitle';
import ContactDetails from './ContactItem';

import { CONTACT_INFO, CONTACT_TITLE } from '../../data/ContactData';

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
          <AnimatedTitle title={CONTACT_TITLE} isVisible={isVisible} />
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
