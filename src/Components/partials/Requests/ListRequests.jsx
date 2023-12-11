import React from 'react';
import Title from '../../Widgets/Title';

const ListRequests = () => {
  return (
    <section className="rounded-lg bg-gray-50 dark:bg-gray-900 p-8 animeLeft w-full flex flex-col gap-14">
      <Title title={`Lista de pedidos`} />
    </section>
  );
};

export default ListRequests;
