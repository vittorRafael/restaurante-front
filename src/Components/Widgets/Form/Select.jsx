import React from 'react';
import Error from '../Error';

const Select = ({ name, label, opts, onChange, value, error, onBlur }) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <select
        name={name}
        id={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      >
        <option>Selecione uma opção</option>
        {opts.map((opt) => (
          <option key={opt.id} value={opt.id}>
            {opt.funcao}
          </option>
        ))}
      </select>
      {error && <Error error={error} />}
    </div>
  );
};

export default Select;
