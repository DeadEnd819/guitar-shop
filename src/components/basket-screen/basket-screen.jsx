import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Header from '../header/header';
import Footer from '../footer/footer';
import Main from '../main/main';
import ChangeProduct from '../change-product/change-product';
import BasketItem from '../basket-item/basket-item';
import {getBasket, getChangeProductModalData, getData, getTotalCost} from '../../store/selectors';
import {getById, splittingDigits} from '../../utils';

const BasketScreen = ({title, pathname, getData, basketData, totalCost, getChangeProductModalData}) => {
  useEffect(()=>{
    document.title = title;
  }, [title]);

  return (
    <>
      <Header />
        <Main title={`Корзина`} pathname={pathname} modifier={`basket`}>
          <section className="basket">
            {
              !basketData.length ? <p style={{marginTop: `50px`}}>Корзина пуста</p> :
              <form className="basket__form" action="#">
              <ul className="basket__list">
                {
                  basketData.map(({id, amount}) => {
                    const {vendorCode, name, type, strings, price, img} = getById(getData, id);

                    return (
                      <BasketItem
                        key={id + vendorCode}
                        id={id}
                        vendorCode={vendorCode}
                        name={name}
                        type={type}
                        strings={strings}
                        price={price}
                        img={img}
                        amount={amount}
                      />
                    );
                  })
                }
              </ul>
              <div className="basket__bottom-wrapper">
                <fieldset className="basket__promo-code promo-code">
                  <legend className="visually-hidden">Поле ввода промокода</legend>
                  <h3 className="promo-code__title">Промокод на скидку</h3>
                  <p className="promo-code__description">Введите свой промокод, если он у вас есть.</p>
                  <div className="promo-code__wrapper">
                    <input className="promo-code__input" type="text" placeholder="GITARAHIT"/>
                    <button className="promo-code__button" type="button">Применить купон</button>
                  </div>
                </fieldset>
                <div className="basket__submit-wrapper">
                  <span
                    className="basket__price basket__price--submit-total">Всего: {splittingDigits(totalCost)} &#8381;</span>
                  <button className="basket__button-submit" type="submit">Оформить заказ</button>
                </div>
              </div>
            </form>
            }
          </section>
          {getChangeProductModalData && <ChangeProduct isAdd={false}/>}
        </Main>
      <Footer />
    </>
  );
};

const mapStateToProps = (store) => ({
  getChangeProductModalData: getChangeProductModalData(store),
  getData: getData(store),
  basketData: getBasket(store),
  totalCost: getTotalCost(store),
});

export default connect(mapStateToProps)(BasketScreen);
