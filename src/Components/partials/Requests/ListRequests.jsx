import React from 'react';
import Title from '../../Widgets/Title';
import CardRequest from '../../Widgets/CardRequest';

const pedidos = [
  {
    id: 1,
    funcAbriu: 'Rafael',
    pago: false,
    mesa: 10,
    nomeCliente: 'Felipe',
  },
];

const ListRequests = () => {
  return (
    <section className="rounded-lg bg-gray-50 dark:bg-gray-900 p-8 animeLeft w-full flex flex-col gap-14">
      <Title title={`Lista de pedidos`} />
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <CardRequest
          to={`pedidos/${pedidos[0].id}`}
          requestId={pedidos[0].id}
          client={pedidos[0].nomeCliente}
          tableNumber={pedidos[0].mesa}
          employee={pedidos[0].funcAbriu}
        />
        <CardRequest
          to={`pedidos/${pedidos[0].id}`}
          requestId={pedidos[0].id}
          client={pedidos[0].nomeCliente}
          tableNumber={pedidos[0].mesa}
          employee={pedidos[0].funcAbriu}
        />
        <CardRequest
          to={`pedidos/${pedidos[0].id}`}
          requestId={pedidos[0].id}
          client={pedidos[0].nomeCliente}
          tableNumber={pedidos[0].mesa}
          employee={pedidos[0].funcAbriu}
        />
        <CardRequest
          to={`pedidos/${pedidos[0].id}`}
          requestId={pedidos[0].id}
          client={pedidos[0].nomeCliente}
          tableNumber={pedidos[0].mesa}
          employee={pedidos[0].funcAbriu}
        />
        <CardRequest
          to={`pedidos/${pedidos[0].id}`}
          requestId={pedidos[0].id}
          client={pedidos[0].nomeCliente}
          tableNumber={pedidos[0].mesa}
          employee={pedidos[0].funcAbriu}
        />
        <CardRequest
          to={`pedidos/${pedidos[0].id}`}
          requestId={pedidos[0].id}
          client={pedidos[0].nomeCliente}
          tableNumber={pedidos[0].mesa}
          employee={pedidos[0].funcAbriu}
        />
        <CardRequest
          to={`pedidos/${pedidos[0].id}`}
          requestId={pedidos[0].id}
          client={pedidos[0].nomeCliente}
          tableNumber={pedidos[0].mesa}
          employee={pedidos[0].funcAbriu}
        />
      </div>
    </section>
  );
};

export default ListRequests;
