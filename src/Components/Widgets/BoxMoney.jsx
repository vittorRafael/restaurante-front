import React from 'react';
import { FaInfo } from 'react-icons/fa6';

const BoxMoney = ({ entry, exit, maxValue, handleClick, isActive }) => {
  const pctEntry = Math.round((100 * entry) / maxValue);
  const pctExit = Math.round((100 * exit) / maxValue);

  return (
    <article className="w-full md:w-1/2 border-2 dark:border-white border-slate-900 rounded-md p-8 flex flex-col gap-4">
      <div className="flex pb-2 border-b-2 border-slate-400 justify-between items-center">
        <h4 className="text-lg font-roboto font-medium dark:text-gray-200 text-slate-900">
          Resultado{' - '}
          <span
            className={`font-bold ${
              entry > exit ? 'text-green-600' : 'text-red-600'
            }`}
          >
            (Nov/23)
          </span>
        </h4>
        <FaInfo
          className="fill-slate-800 dark:fill-white cursor-pointer"
          onClick={() => handleClick(!isActive)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-[80px] gap-8">
        <h4 className="text-md font-roboto font-medium dark:text-gray-200 text-slate-900 flex items-center flex-col md:flex-row gap-2 col-span-1 md:col-span-2 row-span-1">
          Resultado visão caixa:
          <span
            className={`font-bold text-2xl ${
              entry > exit ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {`R$ ${(entry - exit).toString().replace('.', ',')}`}
          </span>
        </h4>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 row-span-1 lg:row-span-2 flex justify-evenly flex-col sm:flex-row md:flex-col gap-2">
          <h4 className="text-md font-roboto font-medium dark:text-gray-200 text-slate-900 flex items-center gap-2">
            Entradas:
            <span className="font-bold text-lg text-green-600">
              {`R$ ${entry.toString().replace('.', ',')}`}
            </span>
          </h4>
          <h4 className="text-md font-roboto font-medium dark:text-gray-200 text-slate-900 flex items-center gap-2">
            Saídas:
            <span className="font-bold text-lg text-red-600">
              {`R$ ${exit.toString().replace('.', ',')}`}
            </span>
          </h4>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 row-span-2 flex justify-center md:justify-end items-end text-white gap-4">
          <div
            style={{ height: `${pctEntry > 100 ? 100 : pctEntry}%` }}
            className={`w-10 bg-green-600 cursor-pointer flex justify-center items-end ${`h-[${pctEntry}%]`}`}
          ></div>
          <p className="text-md font-roboto font-medium dark:text-gray-200 text-slate-900">{`${pctEntry}%`}</p>
          <div
            style={{ height: `${pctExit > 100 ? 100 : pctExit}%` }}
            className={`w-10 bg-red-600 cursor-pointer flex justify-center items-end`}
          ></div>
          <p className="text-md font-roboto font-medium dark:text-gray-200 text-slate-900">{`${pctExit}%`}</p>
        </div>
      </div>
    </article>
  );
};

export default BoxMoney;
