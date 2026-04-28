import { ChevronDown } from 'lucide-react';
import AnimatedTypingText from '../../components/AnimatedTypingText';
import { HOME_TITLE } from '../../data/10-HomeData';

interface ProfileProps {
  scrollToSection: (sectionId: string) => void;
}

const Profile = ({ scrollToSection }: ProfileProps) => {
  return (
    <section
      id="profile"
      className="relative h-screen flex flex-col bg-custom-navy z-20 overflow-hidden"
    >
      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center">
        <AnimatedTypingText
          text={HOME_TITLE}
          as="h1"
          className="text-[60px] md:text-[100px] lg:text-[128px] font-black-han-sans text-custom-gold text-center"
          delayPerChar={0.15}
          showDot={false}
        />
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30">
        <button
          onClick={() => scrollToSection('aboutme')}
          className="flex flex-col items-center gap-2 group text-gray-300"
        >
          <span className="text-xs font-montserrat tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
            SCROLL
          </span>
          <ChevronDown size={40} className="animate-scroll-down" />
        </button>
      </div>
    </section>
  );
};

export default Profile;
