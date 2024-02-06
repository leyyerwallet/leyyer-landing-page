import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

interface Props {
  email: string;
  setEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
}

const InputFieldsBlock: React.FC<Props> = ({
  email,
  setEmail,
  password,
  setPassword,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className='relative mb-6'>
      <input
        type='email'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='w-full px-4 py-3 text-gray-700 placeholder-gray-500 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:placeholder-transparent mb-2'
      />
      <div className='relative'>
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='w-full px-4 py-3 text-gray-700 placeholder-gray-500 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:placeholder-transparent pr-14'
        />
        <button
          aria-label={showPassword ? 'Hide password' : 'Show password'}
          className='absolute top-1/2 transform -translate-y-1/2 right-2 flex items-center px-2'
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
    </div>
  );
};

export default InputFieldsBlock;
