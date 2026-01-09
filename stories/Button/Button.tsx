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
  const variantClass = `storybook-button--${variant}`;

  const renderContent = () => {
    if (variant === 'loading') {
      return (
        <span className="button-loading">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </span>
      );
    }
    if (variant === 'success') {
      return (
        <span className="button-checkmark">
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
      className={['storybook-button', `storybook-button--${size}`, variantClass].join(' ')}
      disabled={disabled}
      {...props}
    >
      {renderContent()}
    </button>
  );
};
