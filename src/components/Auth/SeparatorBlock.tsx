import React from 'react';

const SeparatorBlock: React.FC = () => (
  <div className="flex items-center justify-between my-6">
    <div className="w-full border-t border-gray-400"></div>
    <span className="px-4 text-sm text-gray-600">OR</span>
    <div className="w-full border-t border-gray-400"></div>
  </div>
);

export default SeparatorBlock;
