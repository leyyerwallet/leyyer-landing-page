import React from 'react';

type OptionProps = {
  label: string;
  checked: boolean;
  onChange: () => void;
  inputType: 'radio' | 'checkbox';
  name?: string;
  value?: string;
};

const Option: React.FC<OptionProps> = ({
  label,
  checked,
  onChange,
  inputType,
  name,
  value
}) => (
  <label className="group flex justify-between items-center p-2 w-full bg-white rounded-md border-2 border-emerald cursor-pointer">
    <span
      className="text-sm font-medium text-gray-900"
      style={{ maxWidth: 'calc(100% - 1.5rem)' }}
    >
      {label}
    </span>
    <input
      type={inputType}
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      className={`appearance-none outline-none inline-block align-middle h-4 w-4 border border-gray-300 rounded 
              ${inputType === 'checkbox' ? 'form-checkbox' : 'form-radio'} 
              ${checked ? 'bg-emerald' : ''}
              cursor-pointer`}
    />
  </label>
);

export default Option;
