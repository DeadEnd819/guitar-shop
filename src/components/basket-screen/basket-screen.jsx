import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import Header from '../header/header';
import Footer from '../footer/footer';
import Main from '../main/main';
import ChangeProduct from '../change-product/change-product';
import BasketItem from '../basket-item/basket-item';
import {getBasket, getChangeProductModalData, getData, getPromoCode, getTotalCost} from '../../store/selectors';
import {getById, getCurrentTotalAmount, getUpdatedAmount, splittingDigits, getUppercaseText} from '../../utils';
import {setBasket, setPromoCode, setTotalCost} from '../../store/action';
import {PromoCodes} from '../../const';

const BasketScreen = ({
                        title,
                        pathname,
                        getData,
                        basketData,
                        totalCost,
                        promoCode,
                        getChangeProductModalData,
                        addToBasket,
                        setTotalCost,
                        setPromoCode
}) => {
  const [code, setCode] = useState(``);
  const [error, setError] = useState(false);

  useEffect(()=>{
    document.title = title;
  }, [title]);

  useEffect(()=>{
    setTotalCost(
      getCurrentTotalAmount(basketData, promoCode)
    );
  }, [promoCode, setTotalCost, basketData]);

  const handleAmountChange = (id, type, value) => {
    const currentItemInBasket = getById(basketData, id);

    addToBasket(getUpdatedAmount(basketData, currentItemInBasket, type, value));
  };

  const handlePromoButtonClick = () => {
    if (code.length) {
      const isValid = PromoCodes.hasOwnProperty(getUppercaseText(code));

      if (isValid) {
        setError(false);
        setPromoCode(code);
        return;
      }
      setError(true);
    }
  };

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
                        onAmountChange={handleAmountChange}
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
                  <div className={`promo-code__wrapper${error ? ` promo-code__wrapper--error` : ``}`}>
                    <input
                      className="promo-code__input"
                      type="text"
                      value={code}
                      onChange={(evt) => setCode(evt.target.value)}
                    />
                    <button
                      className="promo-code__button"
                      type="button"
                      aria-label="Применить купон"
                      onClick={handlePromoButtonClick}
                    >
                      Применить купон
                    </button>
                  </div>
                </fieldset>
                <div className="basket__submit-wrapper">
                  <span className="basket__price basket__price--submit-total">Всего: {splittingDigits(totalCost)} &#8381;</span>
                  <button className="basket__button-submit" type="button" aria-label="Оформить заказ">Оформить заказ</button>
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
  promoCode: getPromoCode(store),
});

const mapDispatchToProps = (dispatch) => ({
  addToBasket(data) {
    dispatch(setBasket(data));
  },
  setTotalCost(totalCost) {
    dispatch(setTotalCost(totalCost));
  },
  setPromoCode(promoCode) {
    dispatch(setPromoCode(promoCode));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BasketScreen);
