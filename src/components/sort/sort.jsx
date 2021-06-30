import React from 'react';
import {ReactComponent as ArrowIcon} from '../../assets/img/svg/icon-arrow-sort.svg';

const Sort = () => {
  return (
    <div className="sort">
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
  );
};

export default Sort;
