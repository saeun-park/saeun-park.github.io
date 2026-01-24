import { Fade } from 'react-awesome-reveal';
import { ChevronDown } from 'lucide-react';
import { smoothScrollTo } from '../utils/scrollUtils';

const Profile = () => {
  const title = "SAEUN'S PORTFOLIO";
  const words = title.split(' ');

  const scrollToNext = () => {
    const nextSection = document.getElementById('aboutme'); // 다음 섹션 ID
    const header = document.getElementById('main-header');
    const headerOffset = header ? header.offsetHeight : 0;
    if (nextSection) {
      const elementPosition =
        nextSection.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset - 20;
      smoothScrollTo(offsetPosition, 800); // Use custom smooth scroll with 800ms duration
    }
  };

  return (
    <section
      id="profile"
      className="relative h-screen flex flex-col justify-between items-center bg-gray-200 z-20 overflow-hidden"
    >
      {/* Background Blobs */}
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

      {/* Main Title */}
      <div className="absolute top-[40%] left-[10%] -translate-y-1/2 text-left w-full max-w-6xl mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-montserrat font-bold leading-relaxed text-gray-800">
          {words.map((word, wordIndex) => (
            <span key={wordIndex} className="block">
              {word.split('').map((char, charIndex) => {
                // 글자마다의 고유 인덱스 계산
                const globalIndex =
                  wordIndex === 0 ? charIndex : words[0].length + charIndex + 1;
                return (
                  <span
                    key={charIndex}
                    className="opacity-0 animate-typing-dot"
                    style={{
                      animationDelay: `${globalIndex * 0.15}s`, // 0.15초로 속도를 늦춤 (기존 0.08s)
                      animationFillMode: 'forwards',
                    }}
                  >
                    {char}
                  </span>
                );
              })}

              {/* 두 번째 줄(PORTFOLIO) 끝에만 마침표 추가 */}
              {wordIndex === words.length - 1 && (
                <span
                  className="opacity-0 animate-typing-dot text-pink-600" // 마침표만 핑크색으로 포인트를 줘도 예쁩니다
                  style={{
                    animationDelay: `${title.length * 0.15}s`, // Typing finishes, then blinking starts
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

      {/* Introductory Text (생략) */}
      <div className="absolute bottom-[30%] left-[10%] text-left w-full max-w-6xl mx-auto px-6">
        <Fade triggerOnce direction="up" duration={1000}>
          <p className="text-xl font-extralight leading-loose text-gray-800 ">
            안녕하세요, 데이터와 기획으로 문제를 정의하고, 개발로 실행 가능한
            결과를 만드는 박사은입니다.
            <br />
            반복되는 과정은 자동화하고, 누구나 이해할 수 있도록 문서화하며,
            실사용 환경까지 고려해 구현합니다.
          </p>
        </Fade>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30">
        <button
          onClick={scrollToNext}
          className="flex flex-col items-center gap-2 group transition-colors hover:text-pink-600 text-gray-500"
          aria-label="Scroll to About Me"
        >
          <span className="text-xs font-montserrat tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            SCROLL
          </span>
          <ChevronDown
            size={40}
            className="animate-scroll-down cursor-pointer"
          />
        </button>
      </div>
    </section>
  );
};

export default Profile;