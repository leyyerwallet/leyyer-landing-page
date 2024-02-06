import React from 'react';

const SignInAndForgotPasswordBlock: React.FC = () => (
  <>
    <div className='text-right mb-2'>
      <button
        className='text-sm font-semibold text-emerald hover:text-green-600'
        style={{ background: 'none', border: 'none' }}
      >
        Forgot Password?
      </button>
    </div>
    <button className='w-full px-4 py-3 font-bold text-white bg-emerald rounded-md hover:bg-green-600'>
      Sign In
    </button>
  </>
);

export default SignInAndForgotPasswordBlock;
