import React from 'react';
import Head from '../partials/Head';
import MainContainer from '../Layouts/MainContainer';

const Home = () => {
  return (
    <MainContainer>
      <Head title="Home" description="Essa página é a Home" />
      <section>
        <h1>Home</h1>
      </section>
    </MainContainer>
  );
};

export default Home;
