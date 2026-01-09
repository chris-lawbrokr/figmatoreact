import { useState } from 'react';
import './slider.css';

export interface SliderProps {
  /** Initial slider value */
  value?: number;
  /** Minimum value */
  min?: number;
  /** Maximum value */
  max?: number;
  /** Step increment */
  step?: number;
  /** Label text */
  label?: string;
  /** Is slider disabled */
  disabled?: boolean;
  /** Optional change handler */
  onChange?: (value: number) => void;
}

/** Slider component for selecting a value within a range */
export const Slider = ({
  value: initialValue = 0,
  min = 0,
  max = 100,
  step = 1,
  label,
  disabled = false,
  onChange,
  ...props
}: SliderProps) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setValue(newValue);
    onChange?.(newValue);
  };

  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="w-full max-w-[320px]">
      {label && (
        <label className="block mb-4 text-2xl font-[Helvetica_Neue] font-light tracking-[-0.3px] text-text-dark">
          {label}
        </label>
      )}
      <div className="relative mt-16">
        <div
          className="slider-value-bubble"
          style={{
            left: `calc(${percentage}% + (12px - ${percentage * 0.24}px))`
          }}
        >
          <span>{value}</span>
        </div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          className="slider"
          style={{
            background: `linear-gradient(to right, #a69cb6 0%, #a69cb6 ${percentage}%, #fff ${percentage}%, #fff 100%)`
          }}
          {...props}
        />
      </div>
    </div>
  );
};
