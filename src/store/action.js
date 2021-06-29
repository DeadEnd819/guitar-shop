import {ActionType} from '../const';

const {
  CHANGE_PRODUCT_MODAL_OPEN,
  CHANGE_PRODUCT_MODAL_CLOSE,
  MODAL_CONFIRMATION_OPEN,
  MODAL_CONFIRMATION_CLOSE,
} = ActionType;

export const setChangeProductModalOpen = () => ({
  type: CHANGE_PRODUCT_MODAL_OPEN,
});

export const setChangeProductModalClose = () => ({
  type: CHANGE_PRODUCT_MODAL_CLOSE,
});

export const setConfirmationModalOpen = () => ({
  type: MODAL_CONFIRMATION_OPEN,
});

export const setConfirmationModalClose = () => ({
  type: MODAL_CONFIRMATION_CLOSE,
});
