import React from 'react';
import MainContainer from '../Layouts/MainContainer';
import Head from '../partials/Head';
import Title from '../Widgets/Title';
import Subtitle from '../Widgets/Subtitle';
import Card from '../Widgets/Card';
import { Route, Routes } from 'react-router-dom';
import NewRequest from '../partials/Requests/NewRequest';
import ListRequests from '../partials/Requests/ListRequests';

const Requests = () => {
  return (
    <MainContainer classes="bg-home bg-cover flex flex-col gap-12">
      <Head title="Pedidos" description="Essa página é a de pedidos" />
      <section className="rounded-lg bg-gray-50 dark:bg-gray-900 p-8 animeLeft w-full flex flex-col gap-14">
        <Title title={`Pedidos`} />
        <Subtitle title="Área de Trabalho" />
        <ul className="w-full grid grid-cols-1 md:grid-cols-4 auto-rows-[80px] gap-4 [&>*]:col-span-1 [&>*]:row-span-1">
          <li>
            <Card title="Ver meus pedidos" to="/pedidos/lista" />
          </li>
          <li>
            <Card title="Novo Pedido" to="/pedidos/novo" />
          </li>
        </ul>
      </section>
      <Routes>
        <Route path="lista" element={<ListRequests />} />
        <Route path="novo" element={<NewRequest />} />
      </Routes>
    </MainContainer>
  );
};

export default Requests;
