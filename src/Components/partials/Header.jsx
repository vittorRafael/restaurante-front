import React from 'react';
import Logo from '../../Assets/Logo.png';
import { UserContext } from '../../Context/UserContext';
import { NavLink } from 'react-router-dom';
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
    <header className="bg-gray-50 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 transition-colors duration-700">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <NavLink
          to="/"
          className="flex items-center md:hover:scale-105 transition-all duration-300"
        >
          <img
            src={Logo}
            className={`mr-3 h-6 sm:h-9 ${theme === 'dark' ? 'invert' : ''}`}
            alt={nameSis}
            aria-description="Logo da empresa"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-gray-50">
            {`${nameSis} ${import.meta.env.VITE_SIS_EMP}`}
          </span>
        </NavLink>
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
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden md:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:md:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <span className="sr-only">Open main menu</span>
            <FaBars />
          </button>
        </div>
        <nav
          className={`animeBottom transition-all duration-300 justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2 ${toggleMenu ? '' : 'hidden'}`}
        >
          <ul className="flex flex-col items-center mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 gap-3 [&>*]:w-full">
            <li>
              <NavLink to="/" onClick={() => setToggleMenu(!toggleMenu)}>
                {(element) => (
                  console.log(element.isActive),
                  (
                    <span
                      className={`block py-2 pr-4 pl-3 border-b border-gray-100 md:hover:bg-gray-50 lg:md:hover:bg-transparent lg:border-0 lg:md:hover:text-gray-900 lg:p-0  lg:dark:md:hover:text-gray-50 dark:md:hover:bg-gray-700 dark:md:hover:text-gray-50 lg:dark:md:hover:bg-transparent dark:border-gray-700 lg:whitespace-nowrap ${
                        element.isActive
                          ? 'bg-gray-50 bg-transparent text-gray-900 dark:text-gray-50'
                          : 'text-gray-600 dark:text-gray-400'
                      }`}
                    >
                      Home
                    </span>
                  )
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="/perfil" onClick={() => setToggleMenu(!toggleMenu)}>
                {(element) => (
                  console.log(element.isActive),
                  (
                    <span
                      className={`block py-2 pr-4 pl-3 border-b border-gray-100 md:hover:bg-gray-50 lg:md:hover:bg-transparent lg:border-0 lg:md:hover:text-gray-900 lg:p-0  lg:dark:md:hover:text-gray-50 dark:md:hover:bg-gray-700 dark:md:hover:text-gray-50 lg:dark:md:hover:bg-transparent dark:border-gray-700 lg:whitespace-nowrap ${
                        element.isActive
                          ? 'bg-gray-50 bg-transparent text-gray-900 dark:text-gray-50'
                          : 'text-gray-600 dark:text-gray-400'
                      }`}
                    >
                      Minha Conta
                    </span>
                  )
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" onClick={() => setToggleMenu(!toggleMenu)}>
                {(element) => (
                  console.log(element.isActive),
                  (
                    <span
                      className={`block py-2 pr-4 pl-3 border-b border-gray-100 md:hover:bg-gray-50 lg:md:hover:bg-transparent lg:border-0 lg:md:hover:text-gray-900 lg:p-0  lg:dark:md:hover:text-gray-50 dark:md:hover:bg-gray-700 dark:md:hover:text-gray-50 lg:dark:md:hover:bg-transparent dark:border-gray-700 lg:whitespace-nowrap ${
                        element.isActive
                          ? 'bg-gray-50 bg-transparent text-gray-900 dark:text-gray-50'
                          : 'text-gray-600 dark:text-gray-400'
                      }`}
                    >
                      Log In
                    </span>
                  )
                )}
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
