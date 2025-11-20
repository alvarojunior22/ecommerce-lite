import { propsButton } from "./types/Typebutton";
import React from "react";

export const Button: React.FC<propsButton> = ({ text, variant = 'primary', size = 'md', onClick, leftIcon, rightIcon, loading }) => {
  


  const variantClasses = {
    primary: 'bg-blue-600 text-white',
    secondary: 'bg-gray-200 text-black',
    danger: 'bg-red-600 text-white'
  }

  const sizeClasses = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  }


  return (
    <button className={`${variantClasses[variant]} ${sizeClasses[size]} rounded-lg`} onClick={onClick}>
      {loading ? (
        <svg className="animate-spin mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
        </svg>
      ) : leftIcon ? (
        <span className="mr-2 inline-flex items-center">{leftIcon}</span>
      ) : null}

      <span>{text}</span>

      {rightIcon ? <span className="ml-2 inline-flex items-center">{rightIcon}</span> : null}
      
    </button>
  )
}

