export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const splittingDigits = (item) => {
  return (String(item)).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, `$1 `);
};

export const capitalizeFirstLetter = (string) => {
  return string[0].toUpperCase() + string.slice(1);
};

export const getUppercaseText = (string) => {
  return String(string).toUpperCase();
};

export const getById = (items, id) => {
  return items.slice().find((item) => item.id === id);
};

export const getByType = (items, type) => {
  return items.slice().filter((item)=>item.type === type);
};

export const getByStrings = (items, strings) => {
  return items.slice().filter((item)=>item.strings === strings);
};

export const sortByPrice = (a, b) => {
  return b.price - a.price;
};

export const sortByComments = (a, b) => {
  return b.comments - a.comments;
};

export const getMinMaxPrice = (data) => {
  let minAllowablePrice = data[0].price;
  let maxAllowablePrice = data[0].price;

  for (let i = 1; i < data.length; i++) {
    minAllowablePrice = (data[i].price < minAllowablePrice) ? data[i].price : minAllowablePrice;
    maxAllowablePrice = (data[i].price > maxAllowablePrice) ? data[i].price : maxAllowablePrice;
  }

  return {minAllowablePrice, maxAllowablePrice};
};

