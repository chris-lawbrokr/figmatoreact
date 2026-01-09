import { useState } from 'react';
import './textfield.css';

export interface TextFieldProps {
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
  /** Optional change handler */
  onChange?: (value: string) => void;
  /** Optional focus handler */
  onFocus?: () => void;
  /** Optional blur handler */
  onBlur?: () => void;
}

/** Text input field component with various states */
export const TextField = ({
  state = 'default',
  placeholder = '',
  value: controlledValue,
  label,
  disabled = false,
  onChange,
  onFocus,
  onBlur,
  ...props
}: TextFieldProps) => {
  const [internalValue, setInternalValue] = useState('');
  const value = controlledValue !== undefined ? controlledValue : internalValue;

  const handleChange = (newValue: string) => {
    if (controlledValue === undefined) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };
  // Base input classes
  const baseClasses = 'shadow-field w-full h-[43px] px-6 py-3 rounded-full text-base font-[Helvetica_Neue] leading-tight tracking-[-0.3px] transition-all duration-200 ease-in-out outline-none box-border';

  // State classes
  const stateClasses = {
    default: 'bg-white text-text-dark placeholder:text-gray-400 focus:border-primary',
    error: 'bg-white border-2 border-error text-error-text placeholder:text-error-text/50',
    focus: 'bg-white border-2 border-primary text-text-dark placeholder:text-gray-400',
    success: 'bg-white text-text-dark placeholder:text-gray-400',
  };

  // Disabled classes
  const disabledClasses = 'disabled:bg-disabled/20 disabled:cursor-not-allowed disabled:text-gray-400';

  // Combine all classes
  const inputClasses = `${baseClasses} ${stateClasses[state]} ${disabledClasses}`;

  return (
    <div className="w-full">
      {label && (
        <label className="block mb-4 text-2xl font-[Helvetica_Neue] font-light tracking-[-0.3px] text-text-dark">
          {label}
        </label>
      )}
      <div className="relative w-full">
        <input
          type="text"
          className={inputClasses}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          onChange={(e) => handleChange(e.target.value)}
          onFocus={onFocus}
          onBlur={onBlur}
          {...props}
        />
        {state === 'success' && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 13l4 4L19 7" stroke="#4CAF50" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};
