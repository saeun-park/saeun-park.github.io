interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
  isModalOpen: boolean;
}

const Header = ({ activeSection, onNavigate, isModalOpen }: HeaderProps) => {
  return (
    <nav
      id="main-header"
      className={`fixed top-0 w-full z-50 bg-white/5 backdrop-blur-lg border-b border-white/10 ${
        isModalOpen ? 'pointer-events-none' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
        <div
          className={`text-lg font-semibold cursor-pointer transition-colors hover:text-pink-400 ${
            activeSection === 'profile'
              ? 'text-white font-light'
              : 'text-gray-600'
          } ${isModalOpen ? 'opacity-50' : ''}`}
          onClick={() => onNavigate('profile')}
        >
          @SAEUNNPARK
        </div>
        <div className={`flex gap-8 ${isModalOpen ? 'opacity-50' : ''}`}>
          {['ABOUT ME', 'SKILLS', 'EXPERIENCE', 'PROJECTS', 'ETC'].map(
            (item) => (
              <button
                key={item}
                onClick={() => onNavigate(item.replace(/ /g, '').toLowerCase())}
                className={`text-lg font-light transition-colors hover:text-pink-400 ${
                  activeSection === item.replace(/ /g, '').toLowerCase()
                    ? 'text-pink-400 font-extrabold'
                    : 'text-gray-600'
                }`}
              >
                {item}
              </button>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
