import { Fade } from 'react-awesome-reveal';
import { ChevronDown } from 'lucide-react';
import { smoothScrollTo } from '../utils/scrollUtils';

const Profile = () => {
  const title = "SAEUN'S PORTFOLIO";
  const words = title.split(' ');

  const scrollToNext = () => {
    const nextSection = document.getElementById('aboutme');
    const header = document.getElementById('main-header');
    const headerOffset = header ? header.offsetHeight : 0;
    if (nextSection) {
      const elementPosition =
        nextSection.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset - 20;
      smoothScrollTo(offsetPosition, 800);
    }
  };

  return (
    <section
      id="profile"
      className="relative h-screen flex flex-col bg-gray-200 z-20 overflow-hidden"
    >
      {/* Background Blobs (생략) */}
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

      {/* 핵심: Etc 섹션과 동일한 컨테이너 구조 */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-20 h-full flex flex-col justify-center">
        {/* Main Title - 상하 위치 조정을 위해 mb 사용 */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-montserrat font-bold leading-tight text-gray-800">
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="block">
                {word.split('').map((char, charIndex) => {
                  const globalIndex =
                    wordIndex === 0
                      ? charIndex
                      : words[0].length + charIndex + 1;
                  return (
                    <span
                      key={charIndex}
                      className="opacity-0 animate-typing-dot"
                      style={{
                        animationDelay: `${globalIndex * 0.15}s`,
                        animationFillMode: 'forwards',
                      }}
                    >
                      {char}
                    </span>
                  );
                })}
                {wordIndex === words.length - 1 && (
                  <span
                    className="opacity-0 animate-typing-dot text-pink-600"
                    style={{
                      animationDelay: `${title.length * 0.15}s`,
                      animationFillMode: 'forwards',
                    }}
                  >
                    .
                  </span>
                )}
              </span>
            ))}
          </h1>
        </div>

        {/* Introductory Text - 이제 제목과 정확히 같은 수직 라인에 위치합니다 */}
        <div className="w-full">
          <Fade triggerOnce direction="up" duration={1000} delay={1500}>
            <div className="text-lg md:text-base lg:text-xl leading-relaxed md:leading-[2] text-gray-600 font-normal break-keep">
              {/* 첫 번째 줄: 큰 화면(lg) 이상에서만 block으로 설정하여 강제 줄바꿈 */}
              <span className="lg:block mb-4">
                안녕하세요, 데이터와 기획으로 문제를 정의하고, 개발로 실행
                가능한 결과를 만드는 박사은입니다.
              </span>

              {/* 두 번째 줄 */}
              <span className="lg:block">
                반복되는 과정은 자동화하고, 누구나 이해할 수 있도록 문서화하며,
                실사용 환경까지 고려해 구현합니다.
              </span>
            </div>
          </Fade>
        </div>
      </div>

      {/* Scroll Button */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30">
        <button
          onClick={scrollToNext}
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
