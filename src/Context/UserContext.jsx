import React from 'react';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem('theme') || 'dark',
  );

  React.useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('ligth');
    root.classList.remove('dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const user = {
    nome: 'Rafael',
    sobrenome: 'Sales',
    funcao: 'CEO',
    img: 'https://f005.backblazeb2.com/file/restaurante-sales-development/perfil.jpg',
  };

  return (
    <UserContext.Provider value={{ theme, setTheme, user }}>
      {children}
    </UserContext.Provider>
  );
};
