import {combineReducers} from 'redux';
import {data} from './data/data';
import {modal} from './modal/modal';

export const NameSpace = {
  DATA: `DATA`,
  MODAL: `MODAL`,
};

const {DATA, MODAL} = NameSpace;

export default combineReducers({
  [DATA]: data,
  [MODAL]: modal,
});
