import React from 'react';
import { Link } from 'react-router-dom';

const CardRequest = ({ to, requestId, tableNumber, client, employee }) => {
  return (
    <Link
      to={to}
      className="flex flex-col justify-center  gap-5 dark:bg-gray-50 bg-slate-900 opacity-80 rounded-lg cursor-pointer w-full h-full md:hover:scale-105 transition-all duration-300 py-4 px-8"
    >
      <h3 className="font-roboto font-bold dark:text-slate-900 text-gray-50 text-2xl">
        N° {requestId} - Mesa {tableNumber}
      </h3>
      <h4 className="font-roboto font-medium dark:text-slate-900 text-gray-50 text-lg">
        Cliente: {client}
      </h4>
      <span className="font-roboto font-medium dark:text-slate-900 text-gray-50 text-end text-sm">
        {employee}
      </span>
    </Link>
  );
};

export default CardRequest;
