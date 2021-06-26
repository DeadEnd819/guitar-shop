import React, {useEffect} from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Main from '../main/main';

const BasketScreen = ({title, pathname}) => {
  useEffect(()=>{
    document.title = title;
  }, [title]);

  return (
    <>
      <Header />
        <Main title={`Корзина`} pathname={pathname}>
          Пусто
        </Main>
      <Footer />
    </>
  );
};

export default BasketScreen;
