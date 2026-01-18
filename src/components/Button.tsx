interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  href?: string;
  className?: string;
}

const Button = ({
  children,
  variant = 'primary',
  onClick,
  href,
  className = '',
}: ButtonProps) => {
  const baseStyles =
    'px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all hover:scale-105';

  const variantStyles = {
    primary: 'bg-white/10 border border-gray-700 text-gray-700',
    secondary: 'border-2 border-gray-400 text-gray-200',
  };

  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${className}`;

  // 링크인 경우
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClasses}
      >
        {children}
      </a>
    );
  }

  // 일반 버튼인 경우
  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
};

export default Button;
