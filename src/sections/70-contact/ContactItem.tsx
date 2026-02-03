import { Mail, Github, Linkedin } from 'lucide-react';
import React from 'react';

interface ContactInfo {
  name: string;
  icon: string;
  link: string;
  text: string;
}

interface ContactDetailsProps {
  contactInfo: ContactInfo[];
  isVisible: boolean;
  animationDelay: string;
}

const ContactDetails: React.FC<ContactDetailsProps> = ({
  contactInfo,
  isVisible,
  animationDelay,
}) => {
  const IconMap: { [key: string]: React.ElementType } = {
    Mail: Mail,
    Github: Github,
    Linkedin: Linkedin,
  };

  return (
    <div
      className={`flex flex-row gap-8 md:gap-16 items-start opacity-0 ${
        isVisible ? 'animate-fade-in' : ''
      }`}
      style={{
        animationDelay,
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
              {item.icon && IconMap[item.icon]
                ? React.createElement(IconMap[item.icon], { size: 24 })
                : null}
            </span>
            <span className="border-b border-transparent group-hover:border-pink-400">
              {item.text}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactDetails;
