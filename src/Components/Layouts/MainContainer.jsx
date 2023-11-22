import React from 'react';

const MainContainer = ({ children }) => {
  return (
    <main className="min-h-screen bg-slate-100 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-600 transition-colors duration-700 [&>section]:max-w-screen-xl [&>section]:mx-auto [&>section]:py-8">
      {children}
    </main>
  );
};

export default MainContainer;
