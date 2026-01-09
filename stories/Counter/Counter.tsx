import { useState } from 'react';

export interface CounterProps {
  /** Initial counter value */
  value?: number;
  /** Minimum value */
  min?: number;
  /** Maximum value */
  max?: number;
  /** Label text */
  label?: string;
  /** Is counter disabled */
  disabled?: boolean;
  /** Optional change handler */
  onChange?: (value: number) => void;
}

/** Counter component with increment and decrement buttons */
export const Counter = ({
  value: initialValue = 0,
  min = 0,
  max = 10,
  label,
  disabled = false,
  onChange,
  ...props
}: CounterProps) => {
  const [value, setValue] = useState(initialValue);

  const handleDecrement = () => {
    const newValue = Math.max(min, value - 1);
    setValue(newValue);
    onChange?.(newValue);
  };

  const handleIncrement = () => {
    const newValue = Math.min(max, value + 1);
    setValue(newValue);
    onChange?.(newValue);
  };

  const containerClasses = 'flex items-center justify-between w-full px-8 py-2 rounded-full border-white bg-white shadow-field';
  const buttonClasses = 'text-primary text-2xl font-bold cursor-pointer select-none transition-all hover:scale-110 active:scale-95 disabled:text-gray-400 disabled:cursor-not-allowed disabled:hover:scale-100 flex-shrink-0';
  const valueClasses = 'text-primary text-xl font-[Helvetica_Neue] font-normal flex-1 text-center';

  return (
    <div className="w-full">
      {label && (
        <label className="block mb-4 text-2xl font-[Helvetica_Neue] font-light tracking-[-0.3px] text-text-dark">
          {label}
        </label>
      )}
      <div className={containerClasses} {...props}>
        <button
          type="button"
          className={buttonClasses}
          onClick={handleDecrement}
          disabled={disabled || value <= min}
          aria-label="Decrement"
        >
          −
        </button>
        <div className="flex-1 flex items-center justify-center min-w-[60px]">
          <span className={valueClasses}>{value}</span>
        </div>
        <button
          type="button"
          className={buttonClasses}
          onClick={handleIncrement}
          disabled={disabled || value >= max}
          aria-label="Increment"
        >
          +
        </button>
      </div>
    </div>
  );
};
