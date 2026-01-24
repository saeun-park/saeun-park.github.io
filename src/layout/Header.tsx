import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Import icons for hamburger menu

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
    setIsMenuOpen(false); // Close menu on navigation
  };

  // Sections with dark backgrounds that require white header text
  const darkSections = ['contact'];
  const isDarkSection = darkSections.includes(activeSection);

  const textColor = isDarkSection ? 'text-white' : 'text-gray-600';
  const mobileIconColor = isDarkSection ? 'text-white' : 'text-gray-700';
  const mobileTextColor = 'text-gray-800'; // Mobile menu is always on a light background
  const isProfile = activeSection === 'profile';

  return (
    <nav
      id="main-header"
      className={`fixed top-0 w-full z-50 bg-white/5 backdrop-blur-lg border-b border-white/10 ${
        isModalOpen ? 'pointer-events-none' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
        {/* Logo/Brand */}
        <div
          className={`text-lg font-semibold cursor-pointer transition-colors hover:text-pink-600 
            ${
              isProfile ? 'text-pink-600' : textColor
            } // profile일 때 핑크색 고정
            ${isModalOpen ? 'opacity-50' : ''}`}
          onClick={() => handleLinkClick('profile')}
        >
          @SAEUNNPARK
        </div>

        {/* Desktop Navigation */}
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

        {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
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
                    : // Mobile menu text color remains consistent as it's on a light background
                      mobileTextColor
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
