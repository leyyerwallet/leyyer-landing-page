import React, { ChangeEvent, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { UserCredentials } from '../../types/signInTypes';

interface InputFieldsBlockProps {
  credentials: UserCredentials;
  setCredentials: (credentials: UserCredentials) => void;
}

const InputFieldsBlock: React.FC<InputFieldsBlockProps> = ({
  credentials,
  setCredentials,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <div className='relative mb-6'>
      <input
        name='email'
        type='email'
        placeholder='Email'
        value={credentials.email}
        onChange={handleInputChange}
        className='w-full px-4 py-3 text-gray-700 placeholder-gray-500 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:placeholder-transparent mb-2'
      />
      <div className='relative'>
        <input
          name='password'
          type={showPassword ? 'text' : 'password'}
          placeholder='Password'
          value={credentials.password}
          onChange={handleInputChange}
          className='w-full px-4 py-3 text-gray-700 placeholder-gray-500 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:placeholder-transparent pr-14'
        />
        <button
          type='button'
          aria-label={showPassword ? 'Hide password' : 'Show password'}
          className='absolute top-1/2 transform -translate-y-1/2 right-2 flex items-center px-2'
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
    </div>
  );
};

export default InputFieldsBlock;
