import React from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import Subtitle from './Subtitle';
import Button from './Form/Button';

const Modal = ({ isActive, children, title, buttons }) => {
  if (!isActive) return;
  return (
    <>
      <div className="fixed min-h-full w-full top-0 left-0 bg-black opacity-80 flex justify-center items-center z-10 p-4 md:p-0"></div>
      <div className="fixed min-h-full w-full top-0 left-0 S flex justify-center items-center z-20 p-4 md:p-0 animeModal">
        <div className="bg-white dark:bg-slate-800 p-8 w-full md:w-1/2 lg:1/3 relative rounded-lg flex flex-col gap-4">
          <header className="py-4 border-b-2 dark:border-white border-slate-900 border-opacity-70">
            <Subtitle title={title} />
          </header>
          <main className="flex flex-col gap-4 border-b-2 pb-6 dark:border-white border-slate-900 border-opacity-70">
            {children}
          </main>
          <footer className="flex justify-end gap-4">{buttons}</footer>
        </div>
      </div>
    </>
  );
};

export default Modal;
