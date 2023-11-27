import React from 'react';
import Input from '../Widgets/Form/InputText';
import Button from '../Widgets/Form/Button';
import useForm from '../../Hooks/useFormValidate';
import useFormNoValidate from '../../Hooks/useFormNoValidate';
import { Link } from 'react-router-dom';
import Select from '../Widgets/Form/Select';
import Title from '../Widgets/Title';
import Head from '../partials/Head';

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

const LoginCreate = () => {
  const nome = useForm('');
  const sobrenome = useFormNoValidate('');
  const email = useForm('email');
  const senha = useForm('');
  const confirmSenha = useForm('');
  const sexo = useFormNoValidate('');
  const cargo_id = useForm('');
  const salario = useFormNoValidate('salario');
  const telefone = useFormNoValidate('');
  const cpf = useForm('');
  const data_nascimento = useForm('');
  const data_cadastro = useFormNoValidate('');
  const [admin, setAdmin] = React.useState(false);
  const [file, setFile] = React.useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (
      nome.validate() ||
      email.validate() ||
      senha.validate() ||
      confirmSenha.validate() ||
      cargo_id.validate() ||
      cpf.validate() ||
      data_nascimento.validate()
    ) {
      //código para cadastrar aqui
      console.log('cadastrou');
      return;
    }
  }

  function validatePass() {
    if (confirmSenha.value.length === 0) {
      confirmSenha.setError('Preencha um valor.');
      return false;
    } else if (confirmSenha.value !== senha.value) {
      confirmSenha.setError('As senhas não estão iguais.');
      senha.setError('As senhas não estão iguais.');
      return false;
    } else {
      confirmSenha.setError(null);
      return true;
    }
  }

  return (
    <article className="flex flex-col gap-10">
      <Head
        title="Cadastrar"
        description="Essa página é a de cadastrar novo funcionário no sistema"
      />
      <Title title="Cadastrar Novo Funcionário" />
      <form onSubmit={handleSubmit}>
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
          <div>
            <label
              htmlFor="file"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-50"
            >
              Escolher Imagem
            </label>
            <label
              className={`cursor-pointer text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-50 dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            >
              <input
                className="hidden "
                type="file"
                name="file"
                id="file"
                accept="image/png, image/jpeg, image/jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />
              {file ? file.name : 'Selecione uma imagem'}
            </label>
          </div>
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
            type="password"
            name="senha"
            label="Senha"
            placeholder="*************"
            {...senha}
          />
          <Input
            type="password"
            name="confirmSenha"
            label="Confirmar Senha"
            placeholder="*************"
            {...confirmSenha}
            onBlur={validatePass}
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
              className="block text-sm font-medium text-gray-900 dark:text-gray-50"
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
          <Button type="submit" color="green">
            Entrar
          </Button>
        </div>
      </form>
    </article>
  );
};

export default LoginCreate;
