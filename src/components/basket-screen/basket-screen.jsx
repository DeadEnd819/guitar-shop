import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Header from '../header/header';
import Footer from '../footer/footer';
import Main from '../main/main';
import img from '../../assets/img/jpg/electric-guitar-small.jpg';
import {ReactComponent as CloseIcon} from '../../assets/img/svg/icon-close.svg';
import ChangeProduct from '../add-product/change-product';
import {getChangeProductModalData} from '../../store/selectors';
import {splittingDigits} from '../../utils';

const BasketItem = ({vendorCode, name, type, strings, price, total}) => {
  return (
    <li className="basket__item">
      <button className="basket__button basket__button--close" type="button">
        <CloseIcon />
      </button>
      <img className="basket__img" src={img} width="48" height="124" alt="Гитара"/>
      <div className="basket__description-wrapper">
        <h3 className="basket__title">{type} {name}</h3>
        <span className="basket__description">Артикул: {vendorCode}</span>
        <span className="basket__description">{type}, {strings} струнная</span>
      </div>
      <span className="basket__price">{splittingDigits(price)} &#8381;</span>
      <fieldset className="basket__fieldset">
        <legend className="visually-hidden">Количество товара</legend>
        <button className="basket__button" type="button">&ndash;</button>
        <input className="basket__input" type="number" placeholder="1" />
        <button className="basket__button" type="button">&#43;</button>
      </fieldset>
      <span className="basket__price basket__price--total">{splittingDigits(total)} &#8381;</span>
    </li>
  );
};

const BasketScreen = ({title, pathname, getChangeProductModalData}) => {
  useEffect(()=>{
    document.title = title;
  }, [title]);

  return (
    <>
      <Header />
        <Main title={`Корзина`} pathname={pathname} modifier={`basket`}>
          <section className="basket">
            <form className="basket__form" action="#">
              <ul className="basket__list">
                <li className="basket__item">
                  <button className="basket__button basket__button--close" type="button">
                    <CloseIcon />
                  </button>
                  <img className="basket__img" src={img} width="48" height="124" alt="Гитара"/>
                  <div className="basket__description-wrapper">
                    <h3 className="basket__title">ЭЛЕКТРОГИТАРА ЧЕСТЕР BASS</h3>
                    <span className="basket__description">Артикул: S0757575</span>
                    <span className="basket__description">Электрогитара, 6 струнная</span>
                  </div>
                  <span className="basket__price">17 500 &#8381;</span>
                  <fieldset className="basket__fieldset">
                    <legend className="visually-hidden">Количество товара</legend>
                    <button className="basket__button" type="button">&ndash;</button>
                    <input className="basket__input" type="number" placeholder="1" />
                    <button className="basket__button" type="button">&#43;</button>
                  </fieldset>
                  <span className="basket__price basket__price--total">17 500 &#8381;</span>
                </li>
                <li className="basket__item">
                  <button className="basket__button basket__button--close" type="button">
                    <CloseIcon />
                  </button>
                  <img className="basket__img" src={img} width="48" height="124" alt="Гитара"/>
                  <div className="basket__description-wrapper">
                    <h3 className="basket__title">ЭЛЕКТРОГИТАРА ЧЕСТЕР BASS</h3>
                    <p className="basket__description">Артикул: S0757575</p>
                    <p className="basket__description">Электрогитара, 6 струнная</p>
                  </div>
                  <span className="basket__price">17 500 &#8381;</span>
                  <fieldset className="basket__fieldset">
                    <legend className="visually-hidden">Количество товара</legend>
                    <button className="basket__button" type="button">&ndash;</button>
                    <input className="basket__input" type="number" placeholder="1" />
                    <button className="basket__button" type="button">&#43;</button>
                  </fieldset>
                  <span className="basket__price basket__price--total">17 500 &#8381;</span>
                </li>
              </ul>
              <div className="basket__bottom-wrapper">
                <fieldset className="basket__promo-code promo-code">
                  <legend className="visually-hidden">Поле ввода промокода</legend>
                  <h3 className="promo-code__title">Промокод на скидку</h3>
                  <p className="promo-code__description">Введите свой промокод, если он у вас есть</p>
                  <div className="promo-code__wrapper">
                    <input className="promo-code__input" type="text" placeholder="GITARAHIT" />
                    <button className="promo-code__button" type="button">Применить купон</button>
                  </div>
                </fieldset>
                <div className="basket__submit-wrapper">
                  <span className="basket__price basket__price--submit-total">Всего: 47 000 &#8381;</span>
                  <button className="basket__button-submit" type="submit">Оформить заказ</button>
                </div>
              </div>
            </form>
          </section>
          {getChangeProductModalData && <ChangeProduct isAdd={false}/>}
        </Main>
      <Footer />
    </>
  );
};


const mapStateToProps = (store) => ({
  getChangeProductModalData: getChangeProductModalData(store),
});

export default connect(mapStateToProps)(BasketScreen);
