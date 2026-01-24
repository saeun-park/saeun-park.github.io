import { useState, useEffect, useRef } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import Footer from '../layout/Footer';

const contactInfo = [
  {
    name: 'Email',
    icon: <Mail size={24} />,
    link: 'mailto:saeunnpark@gmail.com',
    text: 'saeunnpark@gmail.com',
  },
  {
    name: 'GitHub',
    icon: <Github size={24} />,
    link: 'https://github.com/saeun-park',
    text: 'https://github.com/saeun-park',
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin size={24} />,
    link: 'https://www.linkedin.com/in/saeunn-park/',
    text: 'https://www.linkedin.com/in/saeunn-park/',
  },
];

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // 화면에 들어왔는지 감지하는 로직
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // 화면에 보이면 트루로 변경
        }
      },
      { threshold: 0.3 } // 섹션의 30%가 보일 때 시작
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const title = 'THANK YOU FOR WATCHING';
  const words = title.split(' ');

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen bg-gray-800 flex flex-col text-white pt-20"
    >
      <div className="flex-grow flex flex-col justify-center px-8 md:px-24 lg:px-40">
        <div className="mb-20 md:mb-32">
          <h2 className="text-4xl md:text-6xl font-montserrat font-bold leading-tight text-left">
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="block">
                {word.split('').map((char, charIndex) => {
                  const globalIndex =
                    words.slice(0, wordIndex).join('').length +
                    charIndex +
                    wordIndex;
                  return (
                    <span
                      key={charIndex}
                      // isVisible이 true일 때만 애니메이션 클래스 적용
                      className={`opacity-0 ${
                        isVisible ? 'animate-typing-dot' : ''
                      }`}
                      style={{
                        animationDelay: `${globalIndex * 0.1}s`,
                        animationFillMode: 'forwards',
                      }}
                    >
                      {char}
                    </span>
                  );
                })}

                {wordIndex === words.length - 1 && (
                  <span
                    className={`opacity-0 ${
                      isVisible ? 'animate-typing-dot' : ''
                    } text-pink-600`}
                    style={{
                      animationDelay: `${(title.length + 1) * 0.1}s`,
                      animationFillMode: 'forwards',
                    }}
                  >
                    .
                  </span>
                )}
              </span>
            ))}
          </h2>
        </div>

        <div
          className={`flex flex-row gap-8 md:gap-16 items-start opacity-0 ${
            isVisible ? 'animate-fade-in' : ''
          }`}
          style={{
            animationDelay: `${(title.length + 5) * 0.1}s`,
            animationFillMode: 'forwards',
          }}
        >
          <div className="flex flex-col items-center">
            <span className="text-pink-600 font-bold tracking-widest text-sm uppercase [writing-mode:vertical-lr] rotate-180">
              Contact Info
            </span>
            <div className="w-[1px] h-12 bg-pink-600 mt-4"></div>
          </div>

          <div className="space-y-6">
            {contactInfo.map((item) => (
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-base md:text-lg text-gray-300 hover:text-pink-400 transition-all duration-300"
              >
                <span className="p-2 bg-gray-700 rounded-full group-hover:bg-gray-600 transition-colors">
                  {item.icon}
                </span>
                <span className="border-b border-transparent group-hover:border-pink-400">
                  {item.text}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Contact;
