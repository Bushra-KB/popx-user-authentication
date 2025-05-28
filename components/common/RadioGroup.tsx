
import React from 'react';

interface RadioOption {
  label: string;
  value: string;
}

interface RadioGroupProps {
  label: string;
  name: string;
  options: RadioOption[];
  selectedValue: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({ label, name, options, selectedValue, onChange }) => {
  return (
    <div className="mb-4">
      <p className="block text-xs font-medium text-popx-label-purple mb-2">{label}</p>
      <div className="flex items-center space-x-6">
        {options.map((option) => (
          <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={onChange}
              className="h-4 w-4 accent-popx-purple focus:ring-popx-purple border-gray-300"
            />
            <span className="text-sm text-popx-dark-text">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;
