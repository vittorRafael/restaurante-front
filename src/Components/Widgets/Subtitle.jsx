import React from 'react';

const Subtitle = ({ title }) => {
  return (
    <h3 className="flex text-slate-900 dark:text-gray-50 text-xl font-bold before:content-[''] before:w-4 before:h-1 before:dark:bg-gray-50 before:bg-slate-900 items-center w-fit gap-3">
      {title}
    </h3>
  );
};

export default Subtitle;
