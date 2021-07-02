import React from 'react';
import {connect} from 'react-redux';
import {ReactComponent as StarIcon} from '../../assets/img/svg/icon-star.svg';
import {ReactComponent as ButtonIcon} from '../../assets/img/svg/icon-cart-button.svg';
import {splittingDigits} from '../../utils';
// import {} from '../../store/selectors';
import {setChangeProductModalOpen} from '../../store/action';

const CardsItem = ({id, name, comments, price, img, openModal}) => {
  return (
    <li className="cards__item">
      <img className="cards__img" src={img.big} width="68" height="190" alt="Гитара"/>
      <div className="cards__rating rating">
        <ul className="rating__list">
          <li className="rating__item">
            <StarIcon />
          </li>
          <li className="rating__item">
            <StarIcon />
          </li>
          <li className="rating__item">
            <StarIcon />
          </li>
          <li className="rating__item">
            <StarIcon />
          </li>
          <li className="rating__item">
            <StarIcon />
          </li>
        </ul>
        <span className="rating__counter">{comments}</span>
      </div>
      <div className="cards__details details">
        <h3 className="details__title">{name}</h3>
        <span className="details__price">{splittingDigits(price)} &#8381;</span>
      </div>
      <ul className="cards__buttons">
        <li className="cards__buttons-item">
          {/*eslint-disable-next-line*/}
          <a className="cards__button" href="#" aria-label="Подробнее">Подробнее</a>
        </li>
        <li className="cards__buttons-item">
          <button
            className="cards__button cards__button--orange"
            type="button"
            aria-label="В корзину"
            onClick={() => openModal(id)}
          >
            <ButtonIcon />
            Купить
          </button>
        </li>
      </ul>
    </li>
  );
};

// const mapStateToProps = (store) => ({
//   getData: getData(store),
// });

const mapDispatchToProps = (dispatch) => ({
  openModal(id) {
    dispatch(setChangeProductModalOpen(id));
  },
});

export default connect(null, mapDispatchToProps)(CardsItem);
