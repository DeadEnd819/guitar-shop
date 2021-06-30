import {combineReducers} from 'redux';
import {data} from './data/data';
import {modal} from './modal/modal';
import {filter} from './filter/filter';

export const NameSpace = {
  DATA: `DATA`,
  MODAL: `MODAL`,
  FILTER: `FILTER`
};

const {DATA, MODAL, FILTER} = NameSpace;

export default combineReducers({
  [DATA]: data,
  [MODAL]: modal,
  [FILTER]: filter,
});
