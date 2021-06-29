import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Header from '../header/header';
import Footer from '../footer/footer';
import Main from '../main/main';
import Cards from '../cards/cards';
import Filter from '../filter/filter';
import ChangeProduct from '../add-product/change-product';
import Confirmation from '../confirmation/confirmation';
import {getChangeProductModalData, getConfirmationModalFlag} from "../../store/selectors";

const CatalogScreen = ({title, pathname, getChangeProductModalData, getConfirmationModalFlag}) => {
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
          {getChangeProductModalData && <ChangeProduct isAdd={true}/>}
          {getConfirmationModalFlag && <Confirmation/>}
        </Main>
      <Footer />
    </>
  );
};

const mapStateToProps = (store) => ({
  getChangeProductModalData: getChangeProductModalData(store),
  getConfirmationModalFlag: getConfirmationModalFlag(store),
});

export default connect(mapStateToProps)(CatalogScreen);
