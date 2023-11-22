import React from 'react';

const Head = (props) => {
  React.useEffect(() => {
    const description = `Sistema de gestão de comandas | ${props.description} `;
    document.title = `${import.meta.env.VITE_SIS_NAME} | ${props.title}`;
    document
      .querySelector("meta[name='description']")
      .setAttribute('content', description);
  }, [props]);

  return <></>;
};

export default Head;
