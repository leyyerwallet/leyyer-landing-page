import React from 'react';

const SignUpBlock: React.FC = () => (
  <div className='mt-4'>
    <div className='text-sm text-gray-900 mb-2'>Don’t have an account?</div>
    <a href='/signup' className='font-bold text-emerald hover:text-green-600'>
      Sign Up
    </a>
  </div>
);

export default SignUpBlock;
