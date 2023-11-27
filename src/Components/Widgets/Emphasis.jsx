import React from 'react';
import userDefault from '../../Assets/default.jpg';
import { UserContext } from '../../Context/UserContext';

const Emphasis = () => {
  const { user } = React.useContext(UserContext);
  const pedidos = 30;
  const vendas = 2000;

  return (
    <article className="w-full border-2 dark:border-white border-slate-900 rounded-md p-8 flex flex-col md:flex-row gap-4 justify-around items-center">
      <div className="flex flex-col gap-4">
        {user.img ? (
          <img
            src={user.img}
            alt={user.nome}
            className="w-40 rounded-full h-40 object-cover"
          />
        ) : (
          <img
            src={userDefault}
            alt={user.nome}
            className="w-40 rounded-full"
          />
        )}
        <p className="dark:text-white text-slate-900 text-2xl font-roboto font-medium">{`${user.nome} ${user.sobrenome}`}</p>
        <p className="dark:text-white text-slate-900 text-md font-roboto font-medium">
          {user.funcao}
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <p className="dark:text-white text-slate-900 text-xl font-roboto font-medium">
          Quantidade de Pedidos:{' '}
          <span className="text-green-600">{pedidos}</span>
        </p>
        <p className="dark:text-white text-slate-900 text-2xl font-roboto font-medium">
          Valor vendido: <span className="text-green-600">R$ {vendas}</span>
        </p>
      </div>
    </article>
  );
};

export default Emphasis;
