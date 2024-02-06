import React, { useState } from 'react';
import Cookies from 'js-cookie';
import IconBlock from '../components/Auth/IconBlock';
import WelcomeTextBlock from '../components/Auth/WelcomeTextBlock';
import InputFieldsBlock from '../components/Auth/InputFieldsBlock';
import SignInAndForgotPasswordBlock from '../components/Auth/SignInAndForgotPasswordBlock';
import SeparatorBlock from '../components/Auth/SeparatorBlock';
import AlternativeSignInsBlock from '../components/Auth/AlternativeSignInsBlock';
import SignUpBlock from '../components/Auth/SignUpBlock';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data.auth) {
        Cookies.set('token', data.token, { expires: 7 });
        window.location.href = 'https://app.leyyer.com/';
      } else {
        setErrorMessage('Invalid credentials');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('An error occurred during sign in.');
    }
  };

  return (
    <div className='font-poppins flex flex-col items-center justify-center min-h-screen bg-white'>
      <form
        onSubmit={handleSignIn}
        className='w-full max-w-md px-10 py-10 text-center'
      >
        <IconBlock />
        <WelcomeTextBlock />
        <InputFieldsBlock
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
        <SignInAndForgotPasswordBlock />
        {errorMessage && <div className='text-red-500'>{errorMessage}</div>}
        <SeparatorBlock />
        <AlternativeSignInsBlock />
        <SignUpBlock />
      </form>
    </div>
  );
};

export default SignIn;
