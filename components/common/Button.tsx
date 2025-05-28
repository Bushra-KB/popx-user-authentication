
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', fullWidth = false, className, ...props }) => {
  const baseStyle = "px-6 py-3 rounded-md font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-offset-2";
  const fullWidthStyle = fullWidth ? "w-full" : "";

  let variantStyle = "";
  if (variant === 'primary') {
    variantStyle = "bg-popx-purple text-white hover:bg-purple-700 focus:ring-popx-purple";
  } else if (variant === 'secondary') {
    variantStyle = "bg-popx-purple-light text-popx-purple hover:bg-purple-200 focus:ring-popx-purple";
  }

  return (
    <button
      {...props}
      className={`${baseStyle} ${variantStyle} ${fullWidthStyle} ${className || ''}`}
    >
      {children}
    </button>
  );
};

export default Button;
