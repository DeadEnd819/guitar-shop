import React from 'react';
import image from '../../assets/img/jpg/electric-guitar.jpg';
import {ReactComponent as ArrowIcon} from '../../assets/img/svg/icon-arrow-sort.svg';
import {ReactComponent as StarIcon} from '../../assets/img/svg/icon-star.svg';
import {ReactComponent as ButtonIcon} from '../../assets/img/svg/icon-cart-button.svg';
import {splittingDigits} from '../../utils';

const CardsItem = ({name, comments, price, img}) => {
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
          <button className="cards__button cards__button--orange" type="button" aria-label="В корзину">
            <ButtonIcon />
            Купить
          </button>
        </li>
      </ul>
    </li>
  );
};

const Cards = () => {
  return (
    <section className="cards">
      <div className="cards__sort sort">
        <div className="sort__wrapper">
          <span className="sort__title">Сортировать:</span>
          <button className="sort__button">по цене</button>
          <button className="sort__button sort__button--active">по популярности</button>
        </div>
        <div className="sort__wrapper">
          <button className="sort__button sort__button--up">
            <ArrowIcon />
          </button>
          <button className="sort__button sort__button--down  sort__button--active">
            <ArrowIcon />
          </button>
        </div>
      </div>
      <ul className="cards__list">
        <li className="cards__item">
          <img className="cards__img" src={image} width="68" height="190" alt="Гитара"/>
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
            <span className="rating__counter">15</span>
          </div>
          <div className="cards__details details">
            <h3 className="details__title">Честер Bass</h3>
            <span className="details__price">{splittingDigits(`17500`)} &#8381;</span>
          </div>
          <ul className="cards__buttons">
            <li className="cards__buttons-item">
              <a className="cards__button" href="#" aria-label="Подробнее">Подробнее</a>
            </li>
            <li className="cards__buttons-item">
              <button className="cards__button cards__button--orange" type="button" aria-label="В корзину">
                <ButtonIcon />
                Купить
              </button>
            </li>
          </ul>
        </li>
        <li className="cards__item">
          <img className="cards__img" src={image} width="68" height="190" alt="Гитара"/>
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
            <span className="rating__counter">15</span>
          </div>
          <div className="cards__details details">
            <h3 className="details__title">Честер Bass</h3>
            <span className="details__price">{splittingDigits(`17500`)} &#8381;</span>
          </div>
          <ul className="cards__buttons">
            <li className="cards__buttons-item">
              <a className="cards__button" href="#" aria-label="Подробнее">Подробнее</a>
            </li>
            <li className="cards__buttons-item">
              <button className="cards__button cards__button--orange" type="button" aria-label="В корзину">
                <ButtonIcon />
                Купить
              </button>
            </li>
          </ul>
        </li>
        <li className="cards__item">
          <img className="cards__img" src={image} width="68" height="190" alt="Гитара"/>
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
            <span className="rating__counter">15</span>
          </div>
          <div className="cards__details details">
            <h3 className="details__title">Честер Bass</h3>
            <span className="details__price">{splittingDigits(`17500`)} &#8381;</span>
          </div>
          <ul className="cards__buttons">
            <li className="cards__buttons-item">
              <a className="cards__button" href="#" aria-label="Подробнее">Подробнее</a>
            </li>
            <li className="cards__buttons-item">
              <button className="cards__button cards__button--orange" type="button" aria-label="В корзину">
                <ButtonIcon />
                Купить
              </button>
            </li>
          </ul>
        </li>
        <li className="cards__item">
          <img className="cards__img" src={image} width="68" height="190" alt="Гитара"/>
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
            <span className="rating__counter">15</span>
          </div>
          <div className="cards__details details">
            <h3 className="details__title">Честер Bass</h3>
            <span className="details__price">{splittingDigits(`17500`)} &#8381;</span>
          </div>
          <ul className="cards__buttons">
            <li className="cards__buttons-item">
              <a className="cards__button" href="#" aria-label="Подробнее">Подробнее</a>
            </li>
            <li className="cards__buttons-item">
              <button className="cards__button cards__button--orange" type="button" aria-label="В корзину">
                <ButtonIcon />
                Купить
              </button>
            </li>
          </ul>
        </li>
        <li className="cards__item">
          <img className="cards__img" src={image} width="68" height="190" alt="Гитара"/>
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
            <span className="rating__counter">15</span>
          </div>
          <div className="cards__details details">
            <h3 className="details__title">Честер Bass</h3>
            <span className="details__price">{splittingDigits(`17500`)} &#8381;</span>
          </div>
          <ul className="cards__buttons">
            <li className="cards__buttons-item">
              <a className="cards__button" href="#" aria-label="Подробнее">Подробнее</a>
            </li>
            <li className="cards__buttons-item">
              <button className="cards__button cards__button--orange" type="button" aria-label="В корзину">
                <ButtonIcon />
                Купить
              </button>
            </li>
          </ul>
        </li>
        <li className="cards__item">
          <img className="cards__img" src={image} width="68" height="190" alt="Гитара"/>
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
            <span className="rating__counter">15</span>
          </div>
          <div className="cards__details details">
            <h3 className="details__title">Честер Bass</h3>
            <span className="details__price">{splittingDigits(`17500`)} &#8381;</span>
          </div>
          <ul className="cards__buttons">
            <li className="cards__buttons-item">
              <a className="cards__button" href="#" aria-label="Подробнее">Подробнее</a>
            </li>
            <li className="cards__buttons-item">
              <button className="cards__button cards__button--orange" type="button" aria-label="В корзину">
                <ButtonIcon />
                Купить
              </button>
            </li>
          </ul>
        </li>
        <li className="cards__item">
          <img className="cards__img" src={image} width="68" height="190" alt="Гитара"/>
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
            <span className="rating__counter">15</span>
          </div>
          <div className="cards__details details">
            <h3 className="details__title">Честер Bass</h3>
            <span className="details__price">{splittingDigits(`17500`)} &#8381;</span>
          </div>
          <ul className="cards__buttons">
            <li className="cards__buttons-item">
              <a className="cards__button" href="#" aria-label="Подробнее">Подробнее</a>
            </li>
            <li className="cards__buttons-item">
              <button className="cards__button cards__button--orange" type="button" aria-label="В корзину">
                <ButtonIcon />
                Купить
              </button>
            </li>
          </ul>
        </li>
        <li className="cards__item">
          <img className="cards__img" src={image} width="68" height="190" alt="Гитара"/>
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
            <span className="rating__counter">15</span>
          </div>
          <div className="cards__details details">
            <h3 className="details__title">Честер Bass</h3>
            <span className="details__price">{splittingDigits(`17500`)} &#8381;</span>
          </div>
          <ul className="cards__buttons">
            <li className="cards__buttons-item">
              <a className="cards__button" href="#" aria-label="Подробнее">Подробнее</a>
            </li>
            <li className="cards__buttons-item">
              <button className="cards__button cards__button--orange" type="button" aria-label="В корзину">
                <ButtonIcon />
                Купить
              </button>
            </li>
          </ul>
        </li>
        <li className="cards__item">
          <img className="cards__img" src={image} width="68" height="190" alt="Гитара"/>
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
            <span className="rating__counter">15</span>
          </div>
          <div className="cards__details details">
            <h3 className="details__title">Честер Bass</h3>
            <span className="details__price">{splittingDigits(`17500`)} &#8381;</span>
          </div>
          <ul className="cards__buttons">
            <li className="cards__buttons-item">
              <a className="cards__button" href="#" aria-label="Подробнее">Подробнее</a>
            </li>
            <li className="cards__buttons-item">
              <button className="cards__button cards__button--orange" type="button" aria-label="В корзину">
                <ButtonIcon />
                Купить
              </button>
            </li>
          </ul>
        </li>
      </ul>
      <ul className="cards__paginate paginate">
        <li className="paginate__item visually-hidden">
          <a className="paginate__link paginate__link--back" href="#">Назад</a>
        </li>
        <li className="paginate__item">
          <a className="paginate__link paginate__link--active" href="#">1</a>
        </li>
        <li className="paginate__item">
          <a className="paginate__link" href="#">2</a>
        </li>
        <li className="paginate__item">
          <a className="paginate__link paginate__link--more" href="#">&hellip;</a>
        </li>
        <li className="paginate__item">
          <a className="paginate__link" href="#">7</a>
        </li>
        <li className="paginate__item">
          <a className="paginate__link paginate__link--onward" href="#">Далее</a>
        </li>
      </ul>
    </section>
  );
};

export default Cards;
