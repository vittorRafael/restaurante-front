import React from 'react';
import Input from '../Widgets/Form/Input';
import Button from '../Widgets/Form/Button';
import useForm from '../../Hooks/useForm';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const email = useForm('email');
  const password = useForm('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Olá');
    console.log(email.value, password.value);
  }
  return (
    <article className="flex flex-col gap-10">
      <h1 className="font-roboto font-bold text-3xl text-slate-900 dark:text-white">
        Acesse sua conta
      </h1>
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
