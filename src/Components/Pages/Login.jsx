import React from 'react';
import MainContainer from '../Layouts/MainContainer';
import { Route, Routes } from 'react-router-dom';
import LoginForm from '../partials/LoginForm';
import LoginPasswordLost from '../partials/LoginPasswordLost';
import LoginPasswordReset from '../partials/LoginPasswordReset';
import Head from '../partials/Head';

const Login = () => {
  return (
    <MainContainer>
      <Head title="Login" description="Essa página é a Login" />
      <section>
        <div>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="perdeu" element={<LoginPasswordLost />} />
            <Route path="resetar" element={<LoginPasswordReset />} />
          </Routes>
        </div>
      </section>
    </MainContainer>
  );
};

export default Login;
