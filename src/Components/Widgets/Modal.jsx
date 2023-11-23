import React from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';

const Modal = ({ isActive, handleClick }) => {
  if (!isActive) return;
  return (
    <div className="fixed min-h-full w-full top-0 left-0 bg-black opacity-80 flex justify-center items-center z-10 p-4 md:p-0 animeModal">
      <div className="bg-white dark:bg-slate-800 p-8 w-full md:w-1/2 lg:1/3 relative">
        <button
          className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 cursor-pointer"
          size={30}
          onClick={() => handleClick(!isActive)}
        >
          Ok. Entendi
        </button>
      </div>
    </div>
  );
};

export default Modal;
