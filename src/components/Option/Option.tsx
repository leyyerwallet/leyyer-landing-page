import React from 'react';

type WalletOptionProps = {
  type: string;
  selectedType: string;
  onChange: (type: string) => void;
};

const WalletOption: React.FC<WalletOptionProps> = ({
  type,
  selectedType,
  onChange
}) => (
  <div
    className="group flex justify-between items-center p-2 w-full bg-white rounded-md border-2 border-emerald cursor-pointer"
    onClick={() => onChange(type)}
  >
    <span className="text-sm font-medium text-gray-900">{type}</span>
    <div className="flex items-center justify-center">
      <input
        id={type}
        type="radio"
        name="walletType"
        value={type}
        checked={selectedType === type}
        onChange={() => onChange(type)}
        className="opacity-0 absolute"
      />
      <div
        className={`w-4 h-4 inline-flex justify-center items-center rounded-sm ${selectedType === type ? 'bg-emerald' : 'bg-transparent border border-gray-300'}`}
      ></div>
    </div>
  </div>
);

export default WalletOption;
