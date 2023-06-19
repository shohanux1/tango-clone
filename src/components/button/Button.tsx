import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

const Button = ({
  children,
  variant,
  onClick,
  className,
  type,
  disabled,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
      flex 
      items-center 
      justify-center
      gap-2 
      rounded-md
      px-4 
      text-sm 
      py-2 
      transition-all 
      disabled:cursor-not-allowed
      disabled:text-white
      disabled:hover:bg-indigo-400
      disabled:hover:text-white
      ${
        variant === "primary"
          ? "bg-primary hover:bg-indigo-600 text-white "
          : "bg-white hover:bg-gray-50 text-gray-600 shadow border border-gray-300       hover:border-gray-400"
      }
      
      ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
