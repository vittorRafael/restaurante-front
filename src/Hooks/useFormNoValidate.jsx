import React from 'react';

const useFormNoValidate = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  function onChange({ target }) {
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
  };
};

export default useFormNoValidate;
