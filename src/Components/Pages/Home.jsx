import React from 'react';
import Head from '../partials/Head';
import MainContainer from '../Layouts/MainContainer';
import { UserContext } from '../../Context/UserContext';
import Title from '../Widgets/Title';
import Card from '../Widgets/Card';
import BoxMoney from '../Widgets/BoxMoney';
import Subtitle from '../Widgets/Subtitle';
import Modal from '../Widgets/Modal';
import Button from '../Widgets/Form/Button';

const Home = () => {
  const { user } = React.useContext(UserContext);
  const [modalInfo, setModalInfo] = React.useState(false);

  const entry = 2200;
  const exit = 2500;
  const maxValue = 2000;

  return (
    <MainContainer classes="bg-home bg-cover ">
      <Head title="Home" description="Essa página é a Home" />
      <section className="rounded-lg bg-gray-50 dark:bg-gray-900 p-8 animeLeft w-full flex flex-col gap-14">
        <Title
          title={`Seja Bem Vindo, ${user.nome} ${user.sobrenome} - ${user.funcao}!`}
        />
        <Subtitle title="Área de Trabalho" />
        <ul className="w-full grid grid-cols-1 md:grid-cols-4 auto-rows-[80px] gap-4 [&>*]:col-span-1 [&>*]:row-span-1">
          <li>
            <Card title="Funcionários" to="/funcionarios" />
          </li>
          <li>
            <Card title="Produtos" to="/produtos" />
          </li>
          <li>
            <Card title="Pedidos" to="/pedidos" />
          </li>
          <li>
            <Card title="Perfil" to="/perfil" />
          </li>
        </ul>
        <Subtitle title="Financeiro" />
        <BoxMoney
          entry={entry}
          exit={exit}
          maxValue={maxValue}
          handleClick={setModalInfo}
          modalInfo={modalInfo}
        />
        <Subtitle title="Funcionário Destaque" />
      </section>
      <Modal
        isActive={modalInfo}
        handleClick={setModalInfo}
        title="Visão Caixa"
        buttons={[
          <Button
            type="button"
            disabled={false}
            onClick={() => setModalInfo(!modalInfo)}
            key={1}
          >
            Ok, Entendi.
          </Button>,
        ]}
      >
        <p className="dark:text-white text-slate-900 font-roboto font-medium text-lg">
          A soma das suas entradas e sáidas realizadas no mês contando somente
          as transações já realizadas.
        </p>
        <p className="dark:text-white text-slate-900 font-roboto font-medium text-lg">
          Nesta visão não contabilizamos transações que ainda não entraram ou
          saíram de suas contas
        </p>
      </Modal>
    </MainContainer>
  );
};

export default Home;
