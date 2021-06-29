import React from 'react';
import ModalWrapper from '../modal-wrapper/modal-wrapper';

const Confirmation = () => {
  return (
    <ModalWrapper block={`Confirmation`} title={`Товар успешно добавлен в корзину`} onModalClose={() => {}}>
      <div className="confirmation__wrapper">
        <button className="confirmation__button confirmation__button--basket" type="button" aria-label="Перейти в корзину">
          Перейти в корзину
        </button>
        <button className="confirmation__button confirmation__button--next" type="button" aria-label="Продолжить покупки">
          Продолжить покупки
        </button>
      </div>
    </ModalWrapper>
  );
};

export default Confirmation;
