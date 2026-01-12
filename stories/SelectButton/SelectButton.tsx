import './selectbutton.css';
import React, { useState } from 'react';

export interface SelectButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  /** Button label */
  label: string;
  /** Initial selected state */
  defaultSelected?: boolean;
  /** Controlled selected state */
  selected?: boolean;
  /** Toggle handler - receives new selected state */
  onToggle?: (selected: boolean) => void;
}

/** Select button that toggles between selected and unselected states */
export const SelectButton = React.forwardRef<HTMLButtonElement, SelectButtonProps>(
  ({ label, defaultSelected = false, selected: controlledSelected, onToggle, className = '', ...props }, ref) => {
    const [internalSelected, setInternalSelected] = useState(defaultSelected);
    const isSelected = controlledSelected !== undefined ? controlledSelected : internalSelected;

    const handleClick = () => {
      const newSelected = !isSelected;
      if (controlledSelected === undefined) {
        setInternalSelected(newSelected);
      }
      onToggle?.(newSelected);
    };

    const baseClasses = 'flex px-3 py-2 justify-center items-center gap-2 rounded-lg transition-all cursor-pointer';
    const selectedClasses = isSelected
      ? 'bg-[#6538F5] text-white border-none'
      : 'bg-white text-text-dark border border-[#744CF6]';

    return (
      <button
        ref={ref}
        className={`${baseClasses} ${selectedClasses} ${className}`}
        onClick={handleClick}
        {...props}
      >
        {label}
      </button>
    );
  }
);

SelectButton.displayName = 'SelectButton';
