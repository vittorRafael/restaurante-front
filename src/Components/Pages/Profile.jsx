import React from 'react';
import MainContainer from '../Layouts/MainContainer';
import Head from '../partials/Head';
import Title from '../Widgets/Title';
import { UserContext } from '../../Context/UserContext';
import userCapa from '../../Assets/bg.jpg';
import userDefault from '../../Assets/default.jpg';
import { FaPenToSquare, FaCamera } from 'react-icons/fa6';
import Button from '../Widgets/Form/Button';
import Modal from '../Widgets/Modal';
import PhotoProfile from '../Widgets/Form/photoProfile';
import { format, compareAsc } from 'date-fns';
import { Input } from 'postcss';
import useForm from '../../Hooks/useFormValidate';
import useFormNoValidate from '../../Hooks/useFormNoValidate';
import Select from '../Widgets/Form/Select';

const generos = [
  { id: 'Masculino', funcao: 'Masculino' },
  { id: 'Feminino', funcao: 'Feminino' },
  { id: 'Não binário', funcao: 'Não binário' },
  { id: 'Prefiro não informar', funcao: 'Prefiro não informar' },
];

const cargos = [
  { id: '1', funcao: 'Garçom' },
  { id: '2', funcao: 'Recepcionista' },
  { id: '3', funcao: 'Balconista' },
  { id: '4', funcao: 'Cozinheiro' },
];

const Profile = () => {
  const [modalPhoto, setModalPhoto] = React.useState(false);
  const [modalProfile, setModalProfile] = React.useState(false);
  const [image, setImage] = React.useState(null);
  const nome = useForm('');
  const sobrenome = useFormNoValidate('');
  const email = useForm('email');
  const sexo = useFormNoValidate('');
  const cargo_id = useForm('');
  const salario = useFormNoValidate('salario');
  const telefone = useFormNoValidate('');
  const cpf = useForm('');
  const data_nascimento = useForm('');
  const data_cadastro = useFormNoValidate('');

  const { user } = React.useContext(UserContext);

  return (
    <div>
      <MainContainer classes="bg-home bg-cover flex flex-col gap-12">
        <Head title="Perfil" description="Essa página é a Perfil" />
        <section className="rounded-lg bg-gray-50 dark:bg-gray-900 animeLeft w-full flex flex-col">
          <div className="flex flex-col rounded-lg">
            <img
              src={userCapa}
              alt="Capa do usuário"
              className="h-[400px] object-cover rounded-t-lg"
            />
            <div className="px-8 flex gap-5">
              <div className="relative cursor-pointer top-[-5rem] [&>img]:hover:opacity-80 [&>svg]:hover:opacity-100 [&>svg]:opacity-0">
                {user.img ? (
                  <img
                    src={user.img}
                    alt={user.nome}
                    className="w-40 rounded-full h-40 object-cover duration-500 transition-all"
                  />
                ) : (
                  <img
                    src={userDefault}
                    alt={user.nome}
                    className="w-40 rounded-full h-40 duration-500 transition-all"
                  />
                )}
                <FaCamera
                  className="fill-white dark:fill-slate-900 cursor-pointer absolute top-16 left-16 text-sm font-roboto font-medium dark:text-white text-slate-900 duration-500 transition-all"
                  size={30}
                  onClick={() => setModalPhoto(!modalPhoto)}
                />
              </div>
              <div className="py-4 flex flex-col ">
                <p className="dark:text-white text-slate-900 text-2xl font-roboto font-medium py-4">{`${user.nome} ${user.sobrenome}`}</p>
                <p className="dark:text-white text-slate-900 text-md font-roboto font-medium">
                  {user.funcao}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="rounded-lg bg-gray-50 dark:bg-gray-900 p-8 animeLeft w-full flex flex-col gap-14">
          <header className="flex justify-between items-center">
            <Title title={`Dados Usuário`} />
            <FaPenToSquare
              className="dark:fill-white fill-slate-900 cursor-pointer hover:scale-105"
              size={30}
              onClick={() => setModalProfile(!modalProfile)}
            />
          </header>
          <div className="grid grid-cols-2">
            <div className="flex flex-col col-span-1 gap-10 [&>*]:dark:text-white [&>*]:text-slate-900 [&>*]:text-md [&>*]:font-roboto [&>*]:font-regular">
              <p>Nome Completo: </p>
              <p>Email:</p>
              <p>Cargo: </p>
              <p>Genêro:</p>
              <p>Salário: </p>
              <p>Telefone: </p>
              <p>CPF:</p>
              <p>Data de Nascimento: </p>
              <p>Data de Admissão: </p>
            </div>
            <div className="flex flex-col items-end col-span-1 gap-10 [&>*]:dark:text-white [&>*]:text-slate-900 [&>*]:text-md [&>*]:font-roboto [&>*]:font-medium">
              <p>{`${user.nome} ${user.sobrenome}`}</p>
              <p>{user.email}</p>
              <p>{user.funcao}</p>
              <p>{user.genero}</p>
              <p>R$ {user.salario}</p>
              <a
                href={`https://api.whatsapp.com/send?phone=${user.telefone}&text=Ol%C3%A1!`}
                className="underline hover:scale-105"
                target="_blank"
                rel="noreferrer"
              >
                {`+${user.telefone[0]}${user.telefone[1]} (${user.telefone[2]}${
                  user.telefone[3]
                }) ${user.telefone.slice(4)}`}
              </a>
              <p>{user.cpf}</p>
              <p>{format(new Date(user.data_nasc), 'dd/MM/yyyy')}</p>
              <p>{format(new Date(user.data_admiss), 'dd/MM/yyyy')}</p>
            </div>
          </div>
        </section>
        <Modal
          isActive={modalPhoto}
          handleClick={setModalPhoto}
          title="Selecione uma nova imagem para seu perfil"
          buttons={[
            <Button
              type="button"
              disabled={false}
              onClick={() => setModalPhoto(!modalPhoto)}
              key={1}
              color="red"
            >
              Cancelar
            </Button>,
            <Button
              type="button"
              disabled={false}
              onClick={() => console.log('foto alterada', image)}
              key={2}
              color="green"
            >
              Confirmar
            </Button>,
          ]}
        >
          <PhotoProfile image={image} setImage={setImage} />
        </Modal>
        <Modal
          isActive={modalProfile}
          handleClick={setModalProfile}
          title="Alterar dados do perfil"
          buttons={[
            <Button
              type="button"
              disabled={false}
              onClick={() => setModalProfile(!modalProfile)}
              key={1}
              color="red"
            >
              Cancelar
            </Button>,
            <Button
              type="button"
              disabled={false}
              onClick={() => console.log('dados alterados')}
              key={2}
              color="green"
            >
              Confirmar
            </Button>,
          ]}
        >
          <form>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <Input
                type="text"
                name="nome"
                label="Nome"
                placeholder="José Paulo"
                {...nome}
              />
              <Input
                type="text"
                name="sobrenome"
                label="Sobrenome"
                placeholder="Santos"
                {...sobrenome}
              />
              <Select
                name="genero"
                label="Selecione Seu Genêro"
                opts={generos}
                {...sexo}
              />
              <Input
                type="text"
                name="salario"
                label="Salario"
                placeholder="R$ 2.500,00"
                {...salario}
              />
              <Input
                type="text"
                name="telefone"
                label="Telefone"
                placeholder="(99) 9 9999-9999"
                {...telefone}
              />
              <Input
                type="text"
                name="cpf"
                label="Cpf"
                placeholder="000.000.000-00"
                {...cpf}
              />
              <Input
                type="date"
                name="data_nascimento"
                label="Data de Nascimento"
                {...data_nascimento}
              />
              <Input
                type="date"
                name="data_cadastro"
                label="Data de Admissão"
                {...data_cadastro}
              />
              <Select
                name="cargo_id"
                label="Selecione Seu Cargo"
                opts={cargos}
                {...cargo_id}
              />
            </div>
            <div className="mb-6 flex flex-col gap-4">
              <Input
                type="text"
                name="email"
                label="Email"
                placeholder="seu_email@exemplo.com"
                {...email}
              />
            </div>
          </form>
        </Modal>
      </MainContainer>
    </div>
  );
};

export default Profile;
