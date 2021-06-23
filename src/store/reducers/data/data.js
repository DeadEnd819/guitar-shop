import {ActionType} from '../../../const';

const {ADD_DATA} = ActionType;

const initialState = {
  data: {},
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
