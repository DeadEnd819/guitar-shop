import React from 'react';
import ModalWrapper from '../modal-wrapper/modal-wrapper';
import img from '../../assets/img/jpg/electric-guitar-small.jpg';

const ChangeProduct = ({isAdd}) => {
  return (
    <ModalWrapper
      block={`change-product`}
      title={isAdd ? `Добавить товар в корзину` : `Удалить этот товар?`}
      onModalClose={() => {}}
    >
      <div className="change-product__wrapper">
        <img className="change-product__img" src={img} width="48" height="124" alt="Гитара"/>
        <div className="change-product__details-wrapper">
          <p className="change-product__name">ГИТАРА ЧЕСТЕР BASS</p>
          <p className="change-product__description">Артикул: S0757575</p>
          <p className="change-product__description">Электрогитара, 6 струнная</p>
          <p className="change-product__price">Цена: 17 500 &#8381;</p>
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

export default ChangeProduct;
