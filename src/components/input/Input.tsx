import React from "react";

type InputProps = {
  className?: string;
  onClick?: () => void;
  error?: boolean;
  disabled?: boolean;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  id?: string;
  label?: string;
  required?: boolean;
  icon?: any;
};

const Input = ({
  className,
  onClick,
  error,
  disabled,
  type,
  placeholder,
  value,
  onChange,
  name,
  label,
  required,
  icon: Icon,
}: InputProps) => {
  return (
    <>
      <div className="flex flex-col w-full">
        {label && (
          <label
            htmlFor={name}
            className="text-sm font-medium text-gray-700 mb-1.5"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <input
            className={`${
              Icon ? "pl-10" : ""
            } border border-gray-300 text-sm px-4  py-2 rounded-md focus:outline-none focus:border-primary w-full focus:ring-2 focus:ring-indigo-200 focus:border-transparent${
              error && "border-red-500"
            }`}
            onClick={onClick}
            disabled={disabled}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
            required={required}
          />

          {Icon && (
            <div className="absolute inset-y-0 left-0 px-3 text-gray-100 flex items-center pointer-events-none">
              <Icon size={20} />
            </div>
          )}
        </div>

        {error && (
          <p className="text-xs text-red-500 mt-1">This field is required</p>
        )}
      </div>
    </>
  );
};

export default Input;
