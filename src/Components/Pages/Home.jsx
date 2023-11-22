import React from 'react';
import Head from '../partials/Head';

const Home = () => {
  return (
    <div className="bg-slate-100 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-600 transition-colors duration-700">
      <Head title="Home" description="Essa página é a Home" />
      <h1>Home</h1>
    </div>
  );
};

export default Home;
