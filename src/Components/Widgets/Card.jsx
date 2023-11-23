import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, to }) => {
  return (
    <Link
      to={to}
      className="flex justify-center items-center dark:bg-gray-50 bg-slate-900 opacity-80 rounded-lg font-roboto font-medium dark:text-slate-900 text-gray-50 cursor-pointer w-full h-full hover:scale-105 transition-all duration-300"
    >
      {title}
    </Link>
  );
};

export default Card;
