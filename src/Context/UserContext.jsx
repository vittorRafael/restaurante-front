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
    email: 'rafael@gmail.com',
    img: 'https://f005.backblazeb2.com/file/restaurante-sales-development/perfil.jpg',
    genero: 'Masculino',
    salario: 1900,
    telefone: '5585994344661',
    cpf: '622.632.643-83',
    data_nasc: '2002/05/25',
    data_admiss: '2023/10/16',
    cargo_id: 5,
  };

  return (
    <UserContext.Provider value={{ theme, setTheme, user }}>
      {children}
    </UserContext.Provider>
  );
};
