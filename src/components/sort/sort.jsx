import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ReactComponent as ArrowIcon} from '../../assets/img/svg/icon-arrow-sort.svg';
import {getSortType, getSortDirection} from '../../store/selectors';
import {setSortType, setSortDirection} from '../../store/action';
import {DirectionSort, TypeSort} from '../../const';

const SortButton = ({children, className, id, disabled, onClick}) => {
  return (
    <button
      className={className}
      id={id}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const Sort = ({type, direction, setType, setDirection}) => {
  const handleTypeClick = (evt) => {
    evt.preventDefault();
    setType(evt.target.id);
  };

  const handleDirectionClick = (evt) => {
    evt.preventDefault();
    setDirection(evt.target.id);
  };

  return (
    <div className="sort">
      <div className="sort__wrapper">
        <span className="sort__title">Сортировать:</span>
        <SortButton
          className={`sort__button`}
          id={TypeSort.PRICE}
          disabled={type === TypeSort.PRICE}
          onClick={handleTypeClick}
        >
          по цене
        </SortButton>
        <SortButton
          className={`sort__button`}
          id={TypeSort.COMMENTS}
          disabled={type === TypeSort.COMMENTS}
          onClick={handleTypeClick}
        >
          по популярности
        </SortButton>
      </div>
      <div className="sort__wrapper">
        <SortButton
          className={`sort__button sort__button--up`}
          id={DirectionSort.INC}
          disabled={direction === DirectionSort.INC}
          onClick={handleDirectionClick}
        >
          <ArrowIcon className="sort__svg" />
        </SortButton>
        <SortButton
          className={`sort__button sort__button--down`}
          id={DirectionSort.DESC}
          disabled={direction === DirectionSort.DESC}
          onClick={handleDirectionClick}
        >
          <ArrowIcon className="sort__svg" />
        </SortButton>
      </div>
    </div>
  );
};

Sort.propTypes = {
  type: PropTypes.string,
  direction: PropTypes.string,
  setType: PropTypes.func.isRequired,
  setDirection: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => ({
  type: getSortType(store),
  direction: getSortDirection(store),
});

const mapDispatchToProps = (dispatch) => ({
  setType(type) {
    dispatch(setSortType(type));
  },
  setDirection(direction) {
    dispatch(setSortDirection(direction));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Sort);
