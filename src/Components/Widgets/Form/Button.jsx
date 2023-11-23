import React from 'react';

const Button = ({ type, color, children, disabled }) => {
  const colorsClass =
    color === 'green'
      ? `bg-green-700 hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800`
      : color === 'red'
      ? `bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800`
      : `bg-sky-700 hover:bg-sky-800 focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-700   dark:focus:ring-sky-800`;

  return (
    <button
      type={type}
      className={`disabled:opacity-50 focus:outline-none text-gray-50 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 w-40 ${colorsClass}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
