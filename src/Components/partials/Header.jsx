import React from 'react';
import Logo from '../../Assets/Logo.png';
import { UserContext } from '../../Context/UserContext';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa6';

const Header = () => {
  const nameSis = import.meta.env.VITE_SIS_NAME;
  const { theme, setTheme } = React.useContext(UserContext);
  const [toggleMenu, setToggleMenu] = React.useState(false);

  function handleTheme(e) {
    if (e.target.checked) {
      setTheme('ligth');
    } else {
      setTheme('dark');
    }
  }

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 transition-colors duration-700">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src={Logo}
              className={`mr-3 h-6 sm:h-9 ${theme === 'dark' ? 'invert' : ''}`}
              alt={nameSis}
              aria-description="Logo da empresa"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              {`${nameSis} ${import.meta.env.VITE_SIS_EMP}`}
            </span>
          </Link>
          <div className="flex items-center lg:order-2 gap-2">
            <label className="flex cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                onChange={handleTheme}
                checked={theme === 'ligth' ? true : false}
              />
              <div className="peer flex items-center px-1 w-14 h-7 bg-zinc-700 rounded-full after:content-[''] after:w-5 after:h-5 after:bg-slate-300 after:flex after:rounded-full after:left-0 after:relative after:transition-all after:duration-500 peer-checked:after:left-7 peer-checked:bg-slate-300 peer-checked:after:bg-yellow-500"></div>
            </label>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              <span className="sr-only">Open main menu</span>
              <FaBars />
            </button>
          </div>
          <div
            className={`animeBottom transition-all duration-300 justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2 ${toggleMenu ? '' : 'hidden'}`}
          >
            <ul className="flex flex-col items-center mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 gap-3 [&>*]:w-full">
              <li>
                <Link
                  to="/"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/meuperfil"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 lg:whitespace-nowrap"
                >
                  Minha Conta
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 lg:whitespace-nowrap"
                >
                  Log in
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
