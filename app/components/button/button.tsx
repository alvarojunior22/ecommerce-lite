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
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  };



  return (
    <button
      disabled={loading}
      className={`
      ${variantClasses[variant]}
      ${sizeClasses[size]}
      rounded-xl
      flex items-center justify-center gap-2
      font-semibold
      transition-all duration-200
      disabled:opacity-50 disabled:cursor-not-allowed
      shadow-sm hover:shadow-md
    `}
      onClick={onClick}
    >
      {loading ? (
        <ShoppingBag className="animate-spin" />
      ) : (
        <>
          {leftIcon && <span>{leftIcon}</span>}
          <span>{text}</span>
          {rightIcon && <span>{rightIcon}</span>}
        </>
      )}
    </button>
  );


}

