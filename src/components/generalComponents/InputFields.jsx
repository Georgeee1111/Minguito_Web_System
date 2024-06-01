import React from "react";

const InputFields = ({
  label,
  type = "text",
  placeholder = "",
  className = "",
  labelClassName = "",
  inputClassName = "",
  ...props
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label
          className={`block text-gray-700 text-sm font-bold mb-2 ${labelClassName}`}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-gray-700 dark:bg-gray-700 dark:text-gray-300 dark:placeholder-gray-500 ${inputClassName}`}
        {...props}
      />
    </div>
  );
};

export default InputFields;
