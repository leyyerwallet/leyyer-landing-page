import React, { FormEvent, useState } from 'react';
import Cookies from 'js-cookie';
import IconBlock from '../components/Auth/IconBlock';
import WelcomeTextBlock from '../components/Auth/WelcomeTextBlock';
import InputFieldsBlock from '../components/Auth/InputFieldsBlock';
import SignInAndForgotPasswordBlock from '../components/Auth/SignInAndForgotPasswordBlock';
import SeparatorBlock from '../components/Auth/SeparatorBlock';
import AlternativeSignInsBlock from '../components/Auth/AlternativeSignInsBlock';
import SignUpBlock from '../components/Auth/SignUpBlock';
import { SignInResponse, UserCredentials } from '../types/signInTypes';

const SignIn: React.FC = () => {
  const [credentials, setCredentials] = useState<UserCredentials>({
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignIn = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
      });
      if (!response.ok) throw new Error('Failed to sign in');
      const data: SignInResponse = await response.json();
      Cookies.set('token', data.token, { expires: 7 });
      window.location.href = 'https://app.leyyer.com';
    } catch (error) {
      console.error(error);
      setErrorMessage('Failed to sign in. Please check your credentials.');
    }
  };

  return (
    <div className="font-poppins flex flex-col items-center justify-center min-h-screen bg-white">
      <form
        onSubmit={handleSignIn}
        className="w-full max-w-md px-10 py-10 text-center"
      >
        <IconBlock />
        <WelcomeTextBlock />
        <InputFieldsBlock
          credentials={credentials}
          setCredentials={setCredentials}
        />
        <SignInAndForgotPasswordBlock />
        {errorMessage && <div className="text-red-500">{errorMessage}</div>}
        <SeparatorBlock />
        <AlternativeSignInsBlock />
        <SignUpBlock />
      </form>
    </div>
  );
};

export default SignIn;
