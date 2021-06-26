import React, {useEffect} from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Main from '../main/main';
import Cards from '../cards/cards';
import Filter from '../filter/filter';

const CatalogScreen = ({title, pathname}) => {
  useEffect(()=>{
    document.title = title;
  }, [title]);

  return (
    <>
      <Header />
        <Main title={`Каталог гитар`} pathname={pathname}>
          <div className="main__content-wrapper">
            <Filter />
            <Cards />
          </div>
        </Main>
      <Footer />
    </>
  );
};

export default CatalogScreen;
