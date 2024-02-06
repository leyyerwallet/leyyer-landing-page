import React from 'react';
import IconBlock from '../components/Auth/IconBlock';
import WelcomeTextBlock from '../components/Auth/WelcomeTextBlock';
import InputFieldsBlock from '../components/Auth/InputFieldsBlock';
import SignInAndForgotPasswordBlock from '../components/Auth/SignInAndForgotPasswordBlock';
import SeparatorBlock from '../components/Auth/SeparatorBlock';
import AlternativeSignInsBlock from '../components/Auth/AlternativeSignInsBlock';
import SignUpBlock from '../components/Auth/SignUpBlock';

const SignInPage: React.FC = () => {
  return (
    <div className='font-poppins flex flex-col items-center justify-center min-h-screen bg-white'>
      <div className='w-full max-w-md px-10 py-10 text-center'>
        <IconBlock />
        <WelcomeTextBlock />
        <InputFieldsBlock />
        <SignInAndForgotPasswordBlock />
        <SeparatorBlock />
        <AlternativeSignInsBlock />
        <SignUpBlock />
      </div>
    </div>
  );
};

export default SignInPage;
