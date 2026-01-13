import { useState, useId } from 'react';
import './checkbox.css';

export interface CheckboxProps {
  /** Checkbox label */
  label?: string;
  /** Checkbox value */
  value?: string;
  /** Is checkbox checked */
  checked?: boolean;
  /** Is checkbox disabled */
  disabled?: boolean;
  /** Show with white pill background */
  withBackground?: boolean;
  /** Aria label for accessibility */
  ariaLabel?: string;
  /** Input ID for label association */
  id?: string;
  /** Optional change handler */
  onChange?: (checked: boolean) => void;
}

/** Checkbox component */
export const Checkbox = ({
  label,
  value,
  checked: controlledChecked,
  disabled = false,
  withBackground = false,
  ariaLabel,
  id: providedId,
  onChange,
  ...props
}: CheckboxProps) => {
  const generatedId = useId();
  const id = providedId || generatedId;
  const [internalChecked, setInternalChecked] = useState(false);
  const checked = controlledChecked !== undefined ? controlledChecked : internalChecked;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = e.target.checked;
    if (controlledChecked === undefined) {
      setInternalChecked(newChecked);
    }
    onChange?.(newChecked);
  };

  const containerClasses = withBackground
    ? 'inline-flex items-center cursor-pointer bg-white rounded-full px-6 py-3 shadow-field'
    : 'inline-flex items-center cursor-pointer';

  return (
    <label htmlFor={id} className={containerClasses}>
      <input
        type="checkbox"
        id={id}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        className="checkbox-input"
        aria-label={ariaLabel || label}
        {...props}
      />
      {label && (
        <span className="ml-2 text-sm font-[Helvetica_Neue] font-medium leading-none text-gray-700">
          {label}
        </span>
      )}
    </label>
  );
};
