import { useState } from 'react';
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
  onChange,
  ...props
}: CheckboxProps) => {
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
    <label className={containerClasses}>
      <input
        type="checkbox"
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        className="checkbox-input"
        {...props}
      />
      {label && (
        <span className="ml-2 text-sm font-[Helvetica_Neue] font-medium leading-none text-gray-500">
          {label}
        </span>
      )}
    </label>
  );
};
