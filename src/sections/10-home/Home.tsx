import { Fade } from 'react-awesome-reveal';
import { ChevronDown } from 'lucide-react';
import AnimatedTypingText from '../../components/AnimatedTypingText';
import { HOME_TITLE, HOME_INTRO_TEXTS } from '../../data/10-HomeData';

interface ProfileProps {
  scrollToSection: (sectionId: string) => void;
}

const Profile = ({ scrollToSection }: ProfileProps) => {
  return (
    <section
      id="profile"
      className="relative h-screen flex flex-col bg-gray-200 z-20 overflow-hidden"
    >
      <div
        className="absolute top-[-10rem] left-[-10rem] w-[50rem] h-[50rem] bg-pink-300/70 rounded-full blur-3xl animate-blob"
        style={{ animationDelay: '0s', willChange: 'transform, opacity' }}
      ></div>
      <div
        className="absolute bottom-[-10rem] right-[-10rem] w-[40rem] h-[40rem] bg-blue-300/50 rounded-full blur-3xl animate-blob"
        style={{ animationDelay: '2s', willChange: 'transform, opacity' }}
      ></div>
      <div
        className="absolute top-[20%] left-[40%] w-[25rem] h-[25rem] bg-purple-300/50 rounded-full blur-3xl animate-blob"
        style={{ animationDelay: '4s', willChange: 'transform, opacity' }}
      ></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-20 h-full flex flex-col justify-center">
        <div className="mb-12">
          <AnimatedTypingText
            text={HOME_TITLE}
            as="h1"
            className="text-5xl md:text-7xl lg:text-8xl"
            delayPerChar={0.15}
          />
        </div>

        <div className="w-full">
          <Fade triggerOnce direction="up" duration={1000} delay={1500}>
            <div className="text-lg md:text-base lg:text-xl leading-relaxed md:leading-[2] text-gray-600 font-normal break-keep">
              {HOME_INTRO_TEXTS.map((text, index) => (
                <span key={index} className="lg:block mb-4">
                  {text}
                </span>
              ))}
            </div>
          </Fade>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30">
        <button
          onClick={() => scrollToSection('aboutme')}
          className="flex flex-col items-center gap-2 group text-gray-500"
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
