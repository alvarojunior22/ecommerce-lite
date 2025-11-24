import { propsButton } from "./types/Typebutton";
import React from "react";
import { ShoppingBag } from "lucide-react";

export const Button: React.FC<propsButton> = ({ text, variant = 'primary', size = 'md', onClick, leftIcon, rightIcon, loading }) => {
  


  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-600 text-black hover:bg-gray-700',
    danger: 'bg-red-600 text-white hover:bg-red-700'
  }

  const sizeClasses = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  }


  return (
    <button className={`${variantClasses[variant]} ${sizeClasses[size]} rounded-lg w-20`} onClick={onClick}>
      {loading ? (
        <ShoppingBag/>
      ) : leftIcon ? (
        <span className="mr-2 inline-flex items-center">{leftIcon}</span>
      ) : null}

      <span>{text}</span>

      {rightIcon ? <span className="ml-2 inline-flex items-center">{rightIcon}</span> : null}
      
    </button>
  )
}

