import React from 'react';
import {connect} from 'react-redux';
import {getOtherFilters} from '../../store/selectors';
import {setOtherFilters} from '../../store/action';
import {OtherFilterName, TypeOtherFilters, StringsAllowedForTypes, TypesAllowedForStrings} from '../../const';
import {extend, getCurrentFilters} from '../../utils';

const FilterCheckbox = ({id, nameFilter, value, isChecked, labelTitle, otherFilters, setOtherFilters, disabled = false}) => {
  const handleOtherFiltersChange = ({name, value, checked}) => {
    const currentValue = name === OtherFilterName.TYPE ? value : +value;

    if (checked) {
      switch (true) {
        case nameFilter === TypeOtherFilters.TYPE:
          setOtherFilters(extend(otherFilters, {
            [TypeOtherFilters.TYPE]: [
              ...otherFilters[name],
              currentValue
            ],
            [TypeOtherFilters.STRINGS]: getCurrentFilters(otherFilters[TypeOtherFilters.STRINGS], StringsAllowedForTypes, currentValue),
          }));
          break;
        case nameFilter === TypeOtherFilters.STRINGS:
          setOtherFilters(extend(otherFilters, {
            [TypeOtherFilters.STRINGS]: [
              ...otherFilters[name],
              currentValue
            ],
            [TypeOtherFilters.TYPE]: getCurrentFilters(otherFilters[TypeOtherFilters.TYPE], TypesAllowedForStrings, currentValue),
          }));
          break;
        default:
          return null;
      }
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
        disabled={disabled}
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
