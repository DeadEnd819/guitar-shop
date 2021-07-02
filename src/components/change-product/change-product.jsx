import React from 'react';
import {connect} from 'react-redux';
import ModalWrapper from '../modal-wrapper/modal-wrapper';
// import img from '../../assets/img/jpg/electric-guitar-small.jpg';
// import {} from '../../store/action';
import {getCurrentCard} from '../../store/selectors';
import {getUppercaseText, capitalizeFirstLetter, splittingDigits} from '../../utils';

const ChangeProduct = ({isAdd, currentCard}) => {
  const {img, name, vendorCode, type, strings, price} = currentCard;

  return (
    <ModalWrapper
      block={`change-product`}
      title={isAdd ? `Добавить товар в корзину` : `Удалить этот товар?`}
      onModalClose={() => {}}
    >
      <div className="change-product__wrapper">
        <img className="change-product__img" src={img.small} width="48" height="124" alt="Гитара"/>
        <div className="change-product__details-wrapper">
          <p className="change-product__name">{getUppercaseText(name)}</p>
          <p className="change-product__description">Артикул: {vendorCode}</p>
          <p className="change-product__description">{capitalizeFirstLetter(type)}, {strings} струнная</p>
          <p className="change-product__price">Цена: {splittingDigits(price)} &#8381;</p>
        </div>
        {
          isAdd ?
            <button className="change-product__button" type="button" aria-label="Добавить в корзину">
              Добавить в корзину
            </button>
            :
            <div className="change-product__button-wrapper">
              <button className="change-product__button change-product__button--delete" type="button" aria-label="Добавить в корзину">
                Удалить товар
              </button>
              <button className="change-product__button change-product__button--next" type="button" aria-label="Продолжить покупки">
                Продолжить покупки
              </button>
            </div>
        }
      </div>
    </ModalWrapper>
  );
};

const mapStateToProps = (store) => ({
  currentCard: getCurrentCard(store),
});

// const mapDispatchToProps = (dispatch) => ({
//   openModal(id) {
//     dispatch(setChangeProductModalOpen(id));
//   },
// });

export default connect(mapStateToProps)(ChangeProduct);
