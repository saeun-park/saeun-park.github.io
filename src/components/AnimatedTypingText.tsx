import React from 'react';

interface AnimatedTypingTextProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  className?: string;
  isVisible?: boolean;
  delayPerChar?: number;
  dotColorClass?: string;
}

const AnimatedTypingText: React.FC<AnimatedTypingTextProps> = ({
  text,
  as: Component = 'h1',
  className = '',
  isVisible = true,
  delayPerChar = 0.15,
  dotColorClass = 'text-pink-600',
}) => {
  const words = text.split(' ');

  return (
    <Component
      className={`font-montserrat font-bold leading-tight ${className}`}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="block">
          {word.split('').map((char, charIndex) => {
            const globalIndex =
              words.slice(0, wordIndex).join('').length + charIndex + wordIndex;

            return (
              <span
                key={charIndex}
                className={`opacity-0 ${isVisible ? 'animate-typing-dot' : ''}`}
                style={{
                  animationDelay: `${globalIndex * delayPerChar}s`,
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
              } ${dotColorClass}`}
              style={{
                animationDelay: `${(text.length + 1) * delayPerChar}s`,
                animationFillMode: 'forwards',
              }}
            >
              .
            </span>
          )}
        </span>
      ))}
    </Component>
  );
};

export default AnimatedTypingText;
