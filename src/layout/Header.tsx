import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Import icons for hamburger menu

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
  isModalOpen: boolean;
}

const Header = ({ activeSection, onNavigate, isModalOpen }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = ['ABOUT ME', 'SKILLS', 'EXPERIENCE', 'PROJECTS', 'ETC'];

  const handleLinkClick = (section: string) => {
    onNavigate(section);
    setIsMenuOpen(false); // Close menu on navigation
  };

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
          className={`text-lg font-semibold cursor-pointer transition-colors hover:text-pink-400 ${
            activeSection === 'profile'
              ? 'text-white font-light'
              : 'text-gray-600'
          } ${isModalOpen ? 'opacity-50' : ''}`}
          onClick={() => handleLinkClick('profile')}
        >
          @SAEUNNPARK
        </div>

        {/* Desktop Navigation */}
        <div className={`hidden md:flex gap-8 ${isModalOpen ? 'opacity-50' : ''}`}>
          {navLinks.map((item) => (
            <button
              key={item}
              onClick={() => handleLinkClick(item.replace(/ /g, '').toLowerCase())}
              className={`text-lg font-light transition-colors hover:text-pink-400 ${
                activeSection === item.replace(/ /g, '').toLowerCase()
                  ? 'text-pink-400 font-extrabold'
                  : 'text-gray-600'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} className="text-gray-700" /> : <Menu size={28} className="text-gray-700" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur-md absolute top-full left-0 w-full flex flex-col items-center gap-6 py-8">
          {navLinks.map((item) => (
            <button
              key={item}
              onClick={() => handleLinkClick(item.replace(/ /g, '').toLowerCase())}
              className={`text-2xl font-light transition-colors hover:text-pink-400 ${
                activeSection === item.replace(/ /g, '').toLowerCase()
                  ? 'text-pink-500 font-bold'
                  : 'text-gray-800'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Header;
