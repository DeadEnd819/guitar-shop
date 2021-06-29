import {ActionType} from '../../../const';
import {dataMocks} from '../../../mocks';

const {ADD_DATA} = ActionType;

const initialState = {
  data: dataMocks,
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export {data};
