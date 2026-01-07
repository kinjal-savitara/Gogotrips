import React from 'react';

interface Option {
  label: string;
  value: string;
}

interface RadioGroupProps {
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
}

const RadioGroup: React.FC<RadioGroupProps> = ({ name, value, onChange, options }) => {
  return (
    <fieldset className=" flex flex-row gap-2">
      {options.map((option) => (
        <label
          key={option.value}
          className={`
            flex cursor-pointer items-center gap-1 rounded-lg border p-3
            transition
            ${
              value === option.value
                ? 'w-1/3 '
                : 'border-gray-300  w-1/3 '
            }
          `}
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={() => onChange(option.value)}
            className="h-4 w-4 accent-blue-600"
          />
          <span className="text-xs font-medium">
            {option.label}
          </span>
        </label>
      ))}
    </fieldset>
  );
};

export default RadioGroup;
