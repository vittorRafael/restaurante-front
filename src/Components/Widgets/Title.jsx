import React from 'react';

const Title = ({ title }) => {
  return (
    <h2 className="font-roboto font-bold text-3xl text-slate-900 dark:text-gray-50">
      {title}
    </h2>
  );
};

export default Title;
