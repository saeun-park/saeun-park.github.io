import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // 반응형의 햄버거 메뉴 아이콘

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
  isModalOpen: boolean;
}

const Header = ({ activeSection, onNavigate, isModalOpen }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    'ABOUT ME',
    'SKILLS',
    'EXPERIENCE',
    'PROJECTS',
    'ETC',
    'CONTACT',
  ];

  const handleLinkClick = (section: string) => {
    onNavigate(section);
    setIsMenuOpen(false);
  };

  const darkSections = ['contact'];
  const isDarkSection = darkSections.includes(activeSection);

  const textColor = isDarkSection ? 'text-white' : 'text-gray-600';
  const mobileIconColor = isDarkSection ? 'text-white' : 'text-gray-700';
  const mobileTextColor = 'text-gray-800';
  const isProfile = activeSection === 'profile';

  return (
    <nav
      id="main-header"
      className={`fixed top-0 w-full z-50 bg-white/5 backdrop-blur-lg border-b border-white/10 ${
        isModalOpen ? 'pointer-events-none' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
        <div
          className={`text-lg font-semibold cursor-pointer transition-colors hover:text-pink-600 
            ${isProfile ? 'text-pink-600' : textColor}
            ${isModalOpen ? 'opacity-50' : ''}`}
          onClick={() => handleLinkClick('profile')}
        >
          @SAEUNNPARK
        </div>

        {/* 데스크탑 네비게이션 */}
        <div
          className={`hidden md:flex gap-8 ${isModalOpen ? 'opacity-50' : ''}`}
        >
          {navLinks.map((item) => {
            const sectionId = item.replace(/ /g, '').toLowerCase();
            return (
              <button
                key={item}
                onClick={() => handleLinkClick(sectionId)}
                className={`text-lg font-light transition-colors hover:text-pink-600 ${
                  activeSection === sectionId
                    ? 'text-pink-600 font-extrabold'
                    : textColor
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>

        {/* 모바일 햄버거 메뉴 */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X size={28} className={mobileIconColor} />
            ) : (
              <Menu size={28} className={mobileIconColor} />
            )}
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur-md absolute top-full left-0 w-full flex flex-col items-center gap-6 py-8">
          {navLinks.map((item) => {
            const sectionId = item.replace(/ /g, '').toLowerCase();
            return (
              <button
                key={item}
                onClick={() => handleLinkClick(sectionId)}
                className={`text-2xl font-light transition-colors hover:text-pink-600 ${
                  activeSection === sectionId
                    ? 'text-pink-600 font-bold'
                    : mobileTextColor
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Header;
