import React from 'react';

const Error = ({ error }) => {
  return (
    <p className="block mt-2 text-sm text-red-500 font-bold font-roboto">
      {error}
    </p>
  );
};

export default Error;
