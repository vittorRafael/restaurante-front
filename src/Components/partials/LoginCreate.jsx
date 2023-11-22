import React from 'react';
import Input from '../Widgets/Form/InputText';
import Button from '../Widgets/Form/Button';
import useForm from '../../Hooks/useForm';
import { Link } from 'react-router-dom';
import Select from '../Widgets/Form/Select';

const generos = [
  { id: 'Masculino', funcao: 'Masculino' },
  { id: 'Feminino', funcao: 'Feminino' },
  { id: 'Não binário', funcao: 'Não binário' },
  { id: 'Prefiro não informar', funcao: 'Prefiro não informar' },
];

const LoginCreate = () => {
  const nome = useForm('');
  const sobrenome = useForm('');
  const email = useForm('email');
  const senha = useForm('');
  const sexo = useForm('');
  const salario = useForm('salario');
  const telefone = useForm('');
  const data_nascimento = useForm('');
  const [admin, setAdmin] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(admin);
  }

  return (
    <article className="flex flex-col gap-10">
      <h1 className="font-roboto font-bold text-3xl text-slate-900 dark:text-white">
        Cadastrar novo funcionário
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <Input
            type="text"
            name="nome"
            label="Nome"
            placeholder="Digite seu nome"
            {...nome}
          />
          <Input
            type="text"
            name="sobrenome"
            label="Sobrenome"
            placeholder="Digite seu sobrenome"
            {...sobrenome}
          />
          <Select
            name="genero"
            label="Selecione seu genêro"
            opts={generos}
            {...sexo}
          />
          <Input
            type="text"
            name="salario"
            label="Salario"
            placeholder="Digite seu salario"
            {...salario}
          />
          <Input
            type="text"
            name="telefone"
            label="Telefone"
            placeholder="Digite seu telefone"
            {...telefone}
          />
          <Input
            type="date"
            name="data_nascimento"
            label="Data de Nascimento"
            placeholder="Digite sua data de nascimento"
            {...data_nascimento}
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
          <Input
            type="senha"
            name="senha"
            label="Senha"
            placeholder="*************"
            {...senha}
          />
          <div className="flex gap-3 items-center">
            <input
              type="checkbox"
              name="admin"
              id="admin"
              onClick={() => setAdmin(!admin)}
            />
            <label
              htmlFor="admin"
              className="block text-sm font-medium text-gray-900 dark:text-white"
            >
              É admin?
            </label>
          </div>
        </div>
        <div className="w-full flex justify-between items-center">
          <Link
            to="/"
            className="text-sky-800 dark:text-sky-500 underline hover:scale-105 hover:text-sky-950"
          >
            Esqueceu a senha?
          </Link>
          <Button
            type="submit"
            color="green"
            disabled={email.error || senha.error ? true : false}
          >
            Entrar
          </Button>
        </div>
      </form>
    </article>
  );
};

export default LoginCreate;
