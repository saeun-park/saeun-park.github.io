import React from 'react';

interface AnimatedTitleProps {
  title: string;
  isVisible: boolean;
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ title, isVisible }) => {
  const words = title.split(' ');

  return (
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
  );
};

export default AnimatedTitle;
