import {createSelector} from "reselect";
import {getByPrice, getFilteredData, sortByType} from "../utils";
import {DirectionSort} from '../const';

export const getData = (state) => {
  return state.DATA.data;
};

export const getChangeProductModalData = (state) => {
  return state.MODAL.isChangeProductOpen;
};

export const getConfirmationModalFlag = (state) => {
  return state.MODAL.isConfirmationOpen;
};

export const getFilterByPrice = (state) => {
  return state.FILTER.price;
};

export const getOtherFilters = (state) => {
  return state.FILTER.otherFilters;
};

export const getDefaultPrice = (state) => {
  return state.DATA.price;
};

export const getSortType = (state) => {
  return state.SORT.type;
};

export const getSortDirection = (state) => {
  return state.SORT.direction;
};

export const getFilteredByPrice = createSelector(
  getData,
  getFilterByPrice,
  getOtherFilters,
  getSortType,
  getSortDirection,
  (data, price, OtherFilters, sortType, sortDirection) => {
    const isReversSort = sortDirection === DirectionSort.INC;
    const filtered = getFilteredData(getByPrice(data, price), OtherFilters);

    return sortByType(filtered, sortType, isReversSort);
  }
);
