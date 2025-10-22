interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Header = ({ activeSection, onNavigate }: HeaderProps) => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div
          className={`text-2xl font-bold cursor-pointer ${
            activeSection === 'profile'
              ? 'text-blue-800 font-extrabold'
              : 'hover:text-blue-800'
          }`}
          onClick={() => onNavigate('profile')}
        >
          DA Portfolio
        </div>
        <div className="flex gap-8">
          {['About Me', 'Skills', 'Experience', 'Projects', 'Etc'].map(
            (item) => (
              <button
                key={item}
                onClick={() => onNavigate(item.replace(/ /g, '').toLowerCase())}
                className={`text-md font-medium ${
                  activeSection === item.replace(/ /g, '').toLowerCase()
                    ? 'text-blue-800 font-extrabold'
                    : 'hover:text-blue-800'
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
