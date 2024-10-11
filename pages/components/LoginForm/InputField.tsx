import React, { ReactNode } from "react";

interface InputFieldProps {
  id: string;
  type: string;
  placeholder: string;
  label: string;
  register: any;
  required?: boolean;
  validate?: (value: string) => boolean | string;
  error?: any;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  type,
  placeholder,
  label,
  register,
  required,
  validate,
  error,
}) => (
  <div className="mb-7">
    <label
      htmlFor={id}
      className="block text-xs font-sm text-right text-gray-400 pb-2"
    >
      {label}
    </label>
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      {...register(id, { required, validate })}
      className="text-right bg-gray-600 w-full p-2 pl-10 text-sm text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 py-3"
    />
    {error && (
      <p className="text-red-600 text-xs text-right mt-2">{error.message}</p>
    )}
  </div>
);

export default InputField;
