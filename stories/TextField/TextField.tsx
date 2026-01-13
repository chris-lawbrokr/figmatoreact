import { useState, useId } from 'react';
import './textfield.css';

export interface TextFieldProps {
  /** Text field variant */
  variant?: 'default' | 'form';
  /** Border radius style */
  borderRadius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  /** Text field state */
  state?: 'default' | 'error' | 'focus' | 'success';
  /** Placeholder text */
  placeholder?: string;
  /** Input value */
  value?: string;
  /** Label text */
  label?: string;
  /** Is field disabled */
  disabled?: boolean;
  /** Is field required */
  required?: boolean;
  /** Aria label for accessibility */
  ariaLabel?: string;
  /** Input ID for label association */
  id?: string;
  /** Optional change handler */
  onChange?: (value: string) => void;
  /** Optional focus handler */
  onFocus?: () => void;
  /** Optional blur handler */
  onBlur?: () => void;
}

/** Text input field component with various states */
export const TextField = ({
  variant = 'default',
  borderRadius,
  state = 'default',
  placeholder = '',
  value: controlledValue,
  label,
  disabled = false,
  required = false,
  ariaLabel,
  id: providedId,
  onChange,
  onFocus,
  onBlur,
  ...props
}: TextFieldProps) => {
  const generatedId = useId();
  const id = providedId || generatedId;
  const [internalValue, setInternalValue] = useState('');
  const value = controlledValue !== undefined ? controlledValue : internalValue;

  const handleChange = (newValue: string) => {
    if (controlledValue === undefined) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  // Determine default border radius based on variant if not explicitly set
  const defaultBorderRadius = variant === 'form' ? 'lg' : 'full';
  const effectiveBorderRadius = borderRadius || defaultBorderRadius;

  // Border radius classes
  const borderRadiusClasses = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
  };

  // Base input classes (common to all variants)
  const baseClasses =
    'w-full text-base font-[Helvetica_Neue] leading-tight tracking-[-0.3px] transition-all duration-200 ease-in-out outline-none box-border flex items-center';

  // Variant-specific classes (without border radius)
  const variantClasses = {
    default: 'shadow-field h-[43px] px-6 py-3',
    form: 'h-auto px-4 py-3 border border-gray-300 bg-gray-50',
  };

  // State classes for default variant
  const defaultStateClasses = {
    default: 'bg-white text-text-dark placeholder:text-gray-400 focus:border-primary',
    error: 'bg-white border-2 border-error text-error-text placeholder:text-error-text',
    focus: 'bg-white border-2 border-primary text-text-dark placeholder:text-gray-400',
    success: 'bg-white text-text-dark placeholder:text-gray-400',
  };

  // State classes for form variant
  const formStateClasses = {
    default: 'text-text-dark placeholder:text-gray-400 focus:border-primary',
    error: 'border-error text-error-text placeholder:text-error-text bg-error/5',
    focus: 'border-primary text-text-dark placeholder:text-gray-400',
    success: 'text-text-dark placeholder:text-gray-400 border-success',
  };

  const stateClasses = variant === 'form' ? formStateClasses : defaultStateClasses;

  // Disabled classes
  const disabledClasses =
    'disabled:bg-disabled/20 disabled:cursor-not-allowed disabled:text-gray-400';

  // Combine all classes
  const inputClasses = `${baseClasses} ${variantClasses[variant]} ${borderRadiusClasses[effectiveBorderRadius]} ${stateClasses[state]} ${disabledClasses}`;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="block mb-2 text-sm font-[Helvetica_Neue] font-normal leading-[150%] text-gray-900"
        >
          {label}
        </label>
      )}
      <div className="relative w-full">
        <input
          type="text"
          id={id}
          className={inputClasses}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          required={required}
          aria-label={ariaLabel || label}
          onChange={(e) => handleChange(e.target.value)}
          onFocus={onFocus}
          onBlur={onBlur}
          {...props}
        />
        {state === 'success' && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 13l4 4L19 7"
                stroke="#4CAF50"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};
