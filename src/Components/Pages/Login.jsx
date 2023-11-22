import React from 'react';
import MainContainer from '../Layouts/MainContainer';
import { Route, Routes } from 'react-router-dom';
import LoginForm from '../partials/LoginForm';
import LoginPasswordLost from '../partials/LoginPasswordLost';
import LoginPasswordReset from '../partials/LoginPasswordReset';
import Head from '../partials/Head';
import LoginCreate from '../partials/LoginCreate';

const Login = () => {
  return (
    <MainContainer classes="bg-restaurant bg-cover">
      <Head title="Login" description="Essa página é a Login" />
      <section className="grid md:grid-cols-2 gap-8 grid-cols-1">
        <div className="col-span-1 md:col-start-2 rounded-lg bg-white dark:bg-gray-900 p-8 animeLeft col-start-1">
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="cadastrar" element={<LoginCreate />} />
            <Route path="perdeu" element={<LoginPasswordLost />} />
            <Route path="resetar" element={<LoginPasswordReset />} />
          </Routes>
        </div>
      </section>
    </MainContainer>
  );
};

export default Login;
