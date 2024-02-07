import React from 'react';

const SignInAndForgotPasswordBlock: React.FC = () => (
  <>
    <div className="text-right mb-2">
      <a
        className="text-sm font-semibold text-emerald hover:text-green-600"
        style={{ background: 'none', border: 'none' }}
        href="#"
      >
        Forgot Password?
      </a>
    </div>
    <button
      type="submit"
      className="w-full px-4 py-3 font-bold text-white bg-emerald rounded-md hover:bg-green-600"
    >
      Sign In
    </button>
  </>
);

export default SignInAndForgotPasswordBlock;
