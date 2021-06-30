import {extend} from '../../../utils';
import {ActionType} from '../../../const';

const {
  CHANGE_PRODUCT_MODAL_OPEN,
  CHANGE_PRODUCT_MODAL_CLOSE,
  MODAL_CONFIRMATION_OPEN,
  MODAL_CONFIRMATION_CLOSE,
} = ActionType;

const initialState = {
  price: {
    minPrice: 0,
    maxPrice: 0,
  },
  type: {
    acoustic: false,
    electric: false,
    ukulele: false,
  },
  strings: {
    four: false,
    six: false,
    seven: false,
    twelve: false,
  },
};

const filter = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PRODUCT_MODAL_OPEN:
      return extend(state, {
        isChangeProductOpen: true
      });
    case CHANGE_PRODUCT_MODAL_CLOSE:
      return extend(state, {
        isChangeProductOpen: false
      });
    case MODAL_CONFIRMATION_OPEN:
      return extend(state, {
        isConfirmationOpen: true
      });
    case MODAL_CONFIRMATION_CLOSE:
      return extend(state, {
        isConfirmationOpen: false
      });
    default:
      return state;
  }
};

export {filter};
