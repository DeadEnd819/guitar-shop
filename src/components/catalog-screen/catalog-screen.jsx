import React, {useEffect} from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Main from '../main/main';

const CatalogScreen = ({title}) => {
  useEffect(()=>{
    document.title = title;
  }, [title]);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default CatalogScreen;
