import React from 'react';
import {connect} from 'react-redux';
import {getOtherFilters} from '../../store/selectors';
import {setOtherFilters} from '../../store/action';
import {OtherFilterName} from '../../const';
import {extend} from '../../utils';

const FilterCheckbox = ({id, nameFilter, value, isChecked, labelTitle, otherFilters, setOtherFilters}) => {
  const handleOtherFiltersChange = ({name, value, checked}) => {
    const currentValue = name === OtherFilterName.TYPE ? value : +value;

    if (checked) {
      setOtherFilters(extend(otherFilters, {
        [name]: [
          ...otherFilters[name],
          currentValue
        ]
      }));
      return;
    }

    setOtherFilters(extend(otherFilters, {
      [name]: [
        ...otherFilters[name].slice(0, otherFilters[name].indexOf(currentValue)),
        ...otherFilters[name].slice(otherFilters[name].indexOf(currentValue) + 1)
      ]
    }));
  };

  return (
    <>
      <input
        className="filter__checkbox visually-hidden"
        type="checkbox"
        id={id}
        name={nameFilter}
        value={value}
        checked={isChecked}
        onChange={(evt) => handleOtherFiltersChange(evt.target)}
      />
      <label className="filter__label" htmlFor={id}>{labelTitle}</label>
    </>
  );
};

const mapStateToProps = (store) => ({
  otherFilters: getOtherFilters(store),
});

const mapDispatchToProps = (dispatch) => ({
  setOtherFilters(data) {
    dispatch(setOtherFilters(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterCheckbox);
