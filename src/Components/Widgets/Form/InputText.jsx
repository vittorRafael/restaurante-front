import React from 'react';
import Error from '../Error';

const Input = ({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  error,
  onBlur,
  ...props
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-50"
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-50 dark:focus:ring-blue-500 dark:focus:border-blue-500`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <Error error={error} />}
    </div>
  );
};

export default Input;
