import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
};

const Button = ({
  children,
  variant,
  onClick,
  className,
  type,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center justify-center gap-2 rounded px-5 text-sm py-2 transition-all hover:border-gray-100 ${
        variant === "primary"
          ? "bg-primary hover:bg-indigo-600 text-white "
          : "bg-white hover:bg-gray-50 text-gray-600 border border-gray-300"
      }
      
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
