import './button.css';

export interface ButtonProps {
  /** Button variant style */
  variant?: 'primary' | 'outlined' | 'option' | 'selected-option' | 'loading' | 'success';
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
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
  label,
  disabled = false,
  ...props
}: ButtonProps) => {
  // Base button classes
  const baseClasses = 'inline-flex items-center justify-center cursor-pointer border-0 rounded-full text-center font-[Helvetica_Neue] font-normal leading-[1.2] tracking-[-0.3px] transition-all duration-200 ease-in-out';

  // Size classes
  const sizeClasses = {
    small: 'px-4 py-2.5 text-xs',
    medium: 'px-8 py-3 text-xl',
    large: 'px-[38px] py-3.5 text-[22px]',
  };

  // Variant classes
  const variantClasses = {
    primary: 'bg-[#250D53] text-white border-none',
    outlined: 'bg-transparent text-[#250D53] border-2 border-[#250D53] hover:bg-[#250D53]/5 disabled:bg-[#a69cb6] disabled:text-[#250D53]',
    option: 'bg-white text-[#333] border-2 border-[#E0E0E0] hover:border-[#250D53]',
    'selected-option': 'bg-[#ECC58E] text-[#333] border-2 border-[#ECC58E] hover:bg-[#ECC58E] hover:border-[#ECC58E]',
    loading: 'bg-[#250D53] text-white border-none cursor-wait',
    success: 'bg-[#250D53] text-white border-none',
  };

  // Disabled classes
  const disabledClasses = 'disabled:bg-[#a69cb6] disabled:text-[#F5F3F9] disabled:cursor-not-allowed disabled:opacity-70';

  // Combine all classes
  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${disabledClasses}`;

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
          <svg width="21" height="21" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.45815 8.23065L8.02957 15.2307L18.9581 1.23065" stroke="white" strokeWidth="4"/>
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
    >
      {renderContent()}
    </button>
  );
};
