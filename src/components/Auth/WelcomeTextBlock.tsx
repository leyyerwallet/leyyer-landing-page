import React from 'react';

const WelcomeTextBlock: React.FC = () => (
  <div className='mb-8'>
    <h2 className='text-2xl font-bold text-black-700 md:text-3xl mb-1'>
      Welcome Back!
    </h2>
    <p className='text-sm text-gray-400 md:text-base'>You have been missed</p>
  </div>
);

export default WelcomeTextBlock;
