import React from 'react';
import {splittingDigits} from '../../utils';

const ProductDetails = ({block, name, vendorCode, type, strings, price}) => {
  return (
    <div className={`${block}__product-details product-details`}>
      <p className="product-details__name">{name}</p>
      <p className="product-details__description">Артикул: {vendorCode}</p>
      <p className="product-details__description">{type}, {strings} струнная</p>
      {price && <p className="product-details__price">Цена: {splittingDigits(price)} &#8381;</p>}
    </div>
  );
};

export default ProductDetails;
