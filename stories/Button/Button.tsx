import './button.css';

export interface ButtonProps {
  /** Button variant style */
  variant?: 'primary' | 'outlined' | 'option' | 'selected-option' | 'loading' | 'success';
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Border radius style */
  borderRadius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  /** Button contents */
  label?: string;
  /** Is button disabled */
  disabled?: boolean;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
  variant = 'primary',
  size = 'medium',
  borderRadius = 'full',
  label,
  disabled = false,
  ...props
}: ButtonProps) => {
  // Border radius classes
  const borderRadiusClasses = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
  };

  // Base button classes (without border radius)
  const baseClasses =
    'inline-flex items-center justify-center cursor-pointer border-0 text-center font-[Helvetica_Neue] font-normal leading-[1.2] tracking-[-0.3px] transition-all duration-200 ease-in-out';

  // Size classes
  const sizeClasses = {
    small: 'px-4 py-2.5 text-xs',
    medium: 'px-8 py-3 text-xl',
    large: 'px-[38px] py-3.5 text-[22px]',
  };

  // Variant classes
  const variantClasses = {
    primary: 'bg-primary text-white border-none',
    outlined:
      'bg-transparent text-primary border-2 border-primary hover:bg-primary/5 disabled:bg-disabled',
    option: 'bg-white text-text-dark border-2 border-border-gray hover:border-primary',
    'selected-option':
      'bg-option-selected text-text-dark border-2 border-option-selected hover:bg-option-selected hover:border-option-selected',
    loading: 'bg-primary text-white border-none cursor-wait',
    success: 'bg-primary text-white border-none',
  };

  // Disabled classes
  const disabledClasses = 'disabled:bg-disabled disabled:cursor-not-allowed disabled:text-primary';

  // Combine all classes
  const buttonClasses = `${baseClasses} ${borderRadiusClasses[borderRadius]} ${sizeClasses[size]} ${variantClasses[variant]} ${disabledClasses}`;

  const renderContent = () => {
    if (variant === 'loading') {
      return (
        <span className="inline-flex gap-1.5 items-center min-h-[1.2em]">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </span>
      );
    }
    if (variant === 'success') {
      return (
        <span className="inline-flex items-center justify-center">
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.45815 8.23065L8.02957 15.2307L18.9581 1.23065"
              stroke="white"
              strokeWidth="4"
            />
          </svg>
        </span>
      );
    }
    return label;
  };

  return (
    <button
      type="button"
      className={buttonClasses}
      disabled={disabled}
      {...props}
      aria-label="Button"
    >
      {renderContent()}
    </button>
  );
};
