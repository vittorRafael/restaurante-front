import React from 'react';
import Head from '../partials/Head';
import MainContainer from '../Layouts/MainContainer';

const Home = () => {
  return (
    <MainContainer>
      <section>
        <Head title="Home" description="Essa página é a Home" />
        <h1>Home</h1>
      </section>
    </MainContainer>
  );
};

export default Home;
