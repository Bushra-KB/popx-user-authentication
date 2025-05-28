
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

const Input: React.FC<InputProps> = ({ label, id, type = "text", ...props }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-xs font-medium text-popx-label-purple mb-1">
        {label}
      </label>
      <input
        type={type}
        id={id}
        {...props}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-popx-purple focus:border-popx-purple text-sm text-popx-dark-text placeholder-popx-gray-text"
      />
    </div>
  );
};

export default Input;
