import React from 'react';

type SelectedWordItemProps = {
  word: string;
  isSelected: boolean;
};

const SelectedWordItem: React.FC<SelectedWordItemProps> = ({
  word,
  isSelected
}) => {
  return (
    <div
      className={`p-2 rounded-md ${isSelected ? 'bg-white border-2 border-emerald' : 'border-2 bg-transparent border-dashed border-gray-400'}`}
    >
      {isSelected && word}
    </div>
  );
};

export default SelectedWordItem;
