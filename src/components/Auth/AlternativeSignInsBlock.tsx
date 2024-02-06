import React from 'react';
import googleIcon from '../../assets/icons/google-icon.svg';
import unstoppableDomainIcon from '../../assets/icons/unstoppable-domain-icon.svg';

const AlternativeSignInsBlock: React.FC = () => (
  <div className='flex justify-between space-x-4 mb-8'>
    <button className='flex items-center justify-center w-1/2 px-4 py-2 text-gray-900 bg-gray-200 rounded-md hover:bg-gray-300'>
      <img src={googleIcon} alt='Google' className='w-6 h-6 mr-2' />
      Google
    </button>
    <button className='flex items-center justify-center w-1/2 px-4 py-2 text-gray-900 bg-gray-200 rounded-md hover:bg-gray-300'>
      <img
        src={unstoppableDomainIcon}
        alt='Unstoppable Domain'
        className='w-6 h-6 mr-2'
      />
      Unstoppable Domain
    </button>
  </div>
);

export default AlternativeSignInsBlock;
