import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import FilterInput from '../filter-input/filter-input';
import FilterCheckbox from '../filter-checkbox/filter-checkbox';
import {getMinMaxPrice} from '../../utils';
import {getData, getOtherFilters} from '../../store/selectors';
import {setFilterByPrice} from '../../store/action';
import {
  TypePrice,
  TypeFilterByPrice,
  LabelTitle,
  TypeGuitar,
  TypeStrings,
  TypeFilterByStrings,
  TitleByType,
  OtherFilterName
} from '../../const';

const Filter = ({getData, otherFilters, setPrice}) => {
  useEffect(() => {
    setPrice(getMinMaxPrice(getData))
  }, [getData, setPrice]);

  return (
    <section className="filter">
      <h2 className="filter__title">Фильтр</h2>
      <form className="filter__form" action="#">
        <fieldset className="filter__fieldset" title="Фильтр по цене">
          <legend className="filter__legend">Цена, <span>&#8381;</span></legend>
          <div className="filter__input-wrapper">
            {
              Object.keys(TypePrice).map((type, index) =>
              <FilterInput
                key={type + index}
                type={TypeFilterByPrice[type]}
                labelTitle={LabelTitle[type]}
              />
              )
            }
          </div>
        </fieldset>
        <fieldset className="filter__fieldset" title="Фильтр по типу">
          <legend className="filter__legend">Тип гитар</legend>
          {
            Object.keys(TypeGuitar).map((type, index) =>
              <FilterCheckbox
                key={type + index}
                id={type}
                nameFilter={OtherFilterName.TYPE}
                value={TitleByType[type]}
                isChecked={otherFilters.type.includes(TitleByType[type])}
                labelTitle={LabelTitle[type]}
              />
            )
          }
        </fieldset>
        <fieldset className="filter__fieldset" title="Фильтр по количеству струн">
          <legend className="filter__legend">Количество струн</legend>
          {
            Object.keys(TypeStrings).map((type, index) =>
              <FilterCheckbox
                key={type + index}
                id={type}
                nameFilter={OtherFilterName.STRINGS}
                value={TypeFilterByStrings[type]}
                isChecked={otherFilters.strings.includes(TypeFilterByStrings[type])}
                labelTitle={TypeFilterByStrings[type]}
              />
            )
          }
        </fieldset>
      </form>
    </section>
  );
};

const mapStateToProps = (store) => ({
  getData: getData(store),
  otherFilters: getOtherFilters(store),
});

const mapDispatchToProps = (dispatch) => ({
  setPrice(data) {
    dispatch(setFilterByPrice(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
