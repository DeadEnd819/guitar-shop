import React from 'react';
import {connect} from 'react-redux';
import {ReactComponent as CloseIcon} from '../../assets/img/svg/icon-close.svg';
import {capitalizeFirstLetter, getUppercaseText, splittingDigits} from '../../utils';
import {getTotalCost} from '../../store/selectors';
import { setChangeProductModalOpen} from '../../store/action';

const BasketItem = ({id, vendorCode, name, type, strings, price, img, amount, openModal}) => {
  return (
    <li className="basket__item">
      <button
        className="basket__button basket__button--delete"
        type="button"
        onClick={() => openModal(id)}
      >
        <CloseIcon />
      </button>
      <img className="basket__img" src={img.small} width="48" height="124" alt="Гитара"/>
      <div className="basket__description-wrapper">
        <h3 className="basket__title">{getUppercaseText(type)} {getUppercaseText(name)}</h3>
        <span className="basket__description">Артикул: {vendorCode}</span>
        <span className="basket__description">{capitalizeFirstLetter(type)}, {strings} струнная</span>
      </div>
      <span className="basket__price">{splittingDigits(price)} &#8381;</span>
      <fieldset className="basket__fieldset">
        <legend className="visually-hidden">Количество товара</legend>
        <button className="basket__button" type="button">&ndash;</button>
        <input className="basket__input" type="number" placeholder={amount} value={amount} />
        <button className="basket__button" type="button">&#43;</button>
      </fieldset>
      <span className="basket__price basket__price--total">{splittingDigits(amount * price)} &#8381;</span>
    </li>
  );
};

const mapStateToProps = (store) => ({
  totalCost: getTotalCost(store),
});

const mapDispatchToProps = (dispatch) => ({
  openModal(id) {
    dispatch(setChangeProductModalOpen(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BasketItem);
