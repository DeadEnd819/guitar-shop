import {extend} from '../../../utils';
import {ActionType} from '../../../const';

const {
  CHANGE_FILTER_BY_PRICE,
  CHANGE_OTHER_FILTERS
} = ActionType;

const initialState = {
  price: {
    minPrice: 0,
    maxPrice: 0,
  },
  otherFilters: {
    type: [],
    strings: [],
  },
};

const filter = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER_BY_PRICE:
      return extend(state, {
        price: action.payload
      });
    case CHANGE_OTHER_FILTERS:
      return extend(state, {
        otherFilters: action.payload
      });
    default:
      return state;
  }
};

export {filter};
