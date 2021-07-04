import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Header from '../header/header';
import Footer from '../footer/footer';
import Main from '../main/main';
import Cards from '../cards/cards';
import Filter from '../filter/filter';
import ChangeProduct from '../change-product/change-product';
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

CatalogScreen.propTypes = {
  title: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
  getChangeProductModalData: PropTypes.bool.isRequired,
  getConfirmationModalFlag: PropTypes.bool.isRequired,
};

const mapStateToProps = (store) => ({
  getChangeProductModalData: getChangeProductModalData(store),
  getConfirmationModalFlag: getConfirmationModalFlag(store),
});

export default connect(mapStateToProps)(CatalogScreen);
