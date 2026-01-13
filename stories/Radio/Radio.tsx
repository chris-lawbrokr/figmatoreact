import { useState } from 'react';
import './radio.css';

export interface RadioProps {
  /** Radio label */
  label?: string;
  /** Radio value */
  value: string;
  /** Name for radio group */
  name: string;
  /** Is radio checked */
  checked?: boolean;
  /** Is radio disabled */
  disabled?: boolean;
  /** Optional change handler */
  onChange?: (value: string) => void;
}

/** Radio button component */
export const Radio = ({
  label,
  value,
  name,
  checked = false,
  disabled = false,
  onChange,
  ...props
}: RadioProps) => {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={() => onChange?.(value)}
        className="radio-input"
        aria-label="Radio input"
        {...props}
      />
      {label && <span className="ml-3 text-lg font-[Helvetica_Neue] text-text-dark">{label}</span>}
    </label>
  );
};

export interface RadioGroupProps {
  /** Radio group name */
  name: string;
  /** Radio options */
  options: Array<{ label?: string; value: string }>;
  /** Selected value */
  value?: string;
  /** Is group disabled */
  disabled?: boolean;
  /** Optional change handler */
  onChange?: (value: string) => void;
}

/** Radio group component */
export const RadioGroup = ({
  name,
  options,
  value,
  disabled = false,
  onChange,
}: RadioGroupProps) => {
  const [selectedValue, setSelectedValue] = useState(value);

  const handleChange = (newValue: string) => {
    setSelectedValue(newValue);
    onChange?.(newValue);
  };

  return (
    <div className="flex flex-col gap-4">
      {options.map((option) => (
        <Radio
          key={option.value}
          name={name}
          value={option.value}
          label={option.label}
          checked={selectedValue === option.value}
          disabled={disabled}
          onChange={handleChange}
        />
      ))}
    </div>
  );
};
