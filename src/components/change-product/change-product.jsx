import React from 'react';
import {connect} from 'react-redux';
import ModalWrapper from '../modal-wrapper/modal-wrapper';
import {getBasket, getCurrentCard} from '../../store/selectors';
import {setBasket, setChangeProductModalClose, setConfirmationModalOpen} from '../../store/action';
import {removeItem, getUppercaseText, capitalizeFirstLetter, splittingDigits, getById, getUpdatedItem} from '../../utils';

const ChangeProduct = ({isAdd, currentCard, basketData, closeModal, addToBasket, removeFromBasket}) => {
  const {id, img, name, vendorCode, type, strings, price} = currentCard;
  const currentItemInBasket = getById(basketData, id);

  const handleAddToBasketClick = () => {
    if (!currentItemInBasket) {
      addToBasket([
        ...basketData,
        {
          id,
          vendorCode,
          price,
          amount: 1
        }
      ]);
      return;
    }

    addToBasket(getUpdatedItem(basketData, currentItemInBasket));
  };

  const handleRemoveItemClick = () => {
    removeFromBasket(removeItem(basketData, currentItemInBasket));
  };

  return (
    <ModalWrapper
      block={`change-product`}
      title={isAdd ? `Добавить товар в корзину` : `Удалить этот товар?`}
      onModalClose={closeModal}
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
            <button
              className="change-product__button"
              type="button"
              aria-label="Добавить в корзину"
              onClick={handleAddToBasketClick}
            >
              Добавить в корзину
            </button>
            :
            <div className="change-product__button-wrapper">
              <button
                className="change-product__button change-product__button--delete"
                type="button"
                aria-label="Добавить в корзину"
                onClick={handleRemoveItemClick}
              >
                Удалить товар
              </button>
              <button
                className="change-product__button change-product__button--next"
                type="button"
                aria-label="Продолжить покупки"
                onClick={closeModal}
              >
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
  basketData: getBasket(store),
});

const mapDispatchToProps = (dispatch) => ({
  closeModal() {
    dispatch(setChangeProductModalClose());
  },
  addToBasket(data) {
    dispatch(setBasket(data));
    dispatch(setChangeProductModalClose());
    dispatch(setConfirmationModalOpen());
  },
  removeFromBasket(data) {
    dispatch(setBasket(data));
    dispatch(setChangeProductModalClose());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangeProduct);
