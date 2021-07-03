import {extend} from '../../../utils';
import {ActionType} from '../../../const';

const {
  CHANGE_BASKET,
  CHANGE_TOTAL,
  CHANGE_PROMO_CODE
} = ActionType;

const initialState = {
  basket: [],
  totalCost: 0,
  promoCode: null
};

const basket = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_BASKET:
      return extend(state, {
        basket: action.payload,
      });
    case CHANGE_TOTAL:
      return extend(state, {
        totalCost: action.payload,
      });
    case CHANGE_PROMO_CODE:
      return extend(state, {
        promoCode: action.payload,
      });
    default:
      return state;
  }
};

export {basket};
