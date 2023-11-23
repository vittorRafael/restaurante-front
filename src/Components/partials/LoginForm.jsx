import React from 'react';
import Input from '../Widgets/Form/InputText';
import Button from '../Widgets/Form/Button';
import useForm from '../../Hooks/useFormValidate';
import { Link } from 'react-router-dom';
import Title from '../Widgets/Title';
import Head from './Head';

const LoginForm = () => {
  const email = useForm('email');
  const password = useForm('');

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <article className="flex flex-col gap-10">
      <Head title="Login" description="Essa página é a Login" />
      <Title title="Acesse sua Conta" />
      <form onSubmit={handleSubmit}>
        {/* <div className="grid gap-6 mb-6 md:grid-cols-2">
          <Input
            type="text"
            name="nome"
            label="Nome"
            placeholder="Digite seu email"
            {...email}
          />
        </div> */}
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
            name="password"
            label="Senha"
            placeholder="*************"
            {...password}
          />
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
            disabled={email.error || password.error ? true : false}
          >
            Entrar
          </Button>
        </div>
      </form>
    </article>
  );
};

export default LoginForm;
