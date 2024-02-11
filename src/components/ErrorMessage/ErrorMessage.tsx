import React from 'react';

type ErrorMessageProps = {
  message: string;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <div className="text-red-500 mb-4">{message}</div>
);

export default ErrorMessage;
