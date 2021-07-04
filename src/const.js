import {ReactComponent as MapIcon} from './assets/img/svg/icon-map.svg';
import {ReactComponent as SearchIcon} from './assets/img/svg/icon-search.svg';
import {ReactComponent as BasketIcon} from './assets/img/svg/icon-basket.svg';

export const CARDS_PER_PAGE = 9;

export const AppRoute = {
  ROOT: `/`,
  CATALOG: `/catalog`,
  BASKET: `/basket`,
};

export const ActionType = {
  ADD_DATA: `ADD_DATA`,
  CHANGE_PRODUCT_MODAL_OPEN: `CHANGE_PRODUCT_MODAL_OPEN`,
  CHANGE_PRODUCT_MODAL_CLOSE: `CHANGE_PRODUCT_MODAL_CLOSE`,
  MODAL_CONFIRMATION_OPEN: `MODAL_CONFIRMATION_OPEN`,
  MODAL_CONFIRMATION_CLOSE: `MODAL_CONFIRMATION_CLOSE`,
  CHANGE_FILTER_BY_PRICE: `CHANGE_FILTER_BY_PRICE`,
  CHANGE_OTHER_FILTERS: `CHANGE_OTHER_FILTERS`,
  CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`,
  CHANGE_SORT_DIRECTION: `CHANGE_SORT_DIRECTION`,
  CHANGE_BASKET: `CHANGE_BASKET`,
  CHANGE_TOTAL: `CHANGE_TOTAL`,
  CHANGE_PROMO_CODE: `CHANGE_PROMO_CODE`,
};

export const Key = {
  ESCAPE: `Escape`,
  ESC: `Esc`,
};

export const AmountUpdateType = {
  INC: `INC`,
  DEC: `DEC`,
  ADD: `ADD`
};

export const TypeGuitar = {
  ACOUSTIC: `ACOUSTIC`,
  ELECTRIC: `ELECTRIC`,
  UKULELE: `UKULELE`,
};

export const TitleByType = {
  ACOUSTIC: `акустическая гитара`,
  ELECTRIC: `электрогитара`,
  UKULELE: `укулеле`,
};

export const TypePrice = {
  MIN: `MIN`,
  MAX: `MIN`
};

export const TypeFilterByPrice = {
  MIN: `min`,
  MAX: `max`,
};

export const TypeStrings = {
  FOUR: `FOUR`,
  SIX: `SIX`,
  SEVEN: `SEVEN`,
  TWELVE: `TWELVE`
};

export const TypeOtherFilters = {
  TYPE: `type`,
  STRINGS: `strings`,
};

export const TypeFilterByStrings = {
  FOUR: 4,
  SIX: 6,
  SEVEN: 7,
  TWELVE: 12
};

export const LabelTitle = {
  MIN: `Минимальная цена`,
  MAX: `Максимальная`,
  ACOUSTIC: `Акустические гитары`,
  ELECTRIC: `Электрогитары`,
  UKULELE: `Укулеле`,
};

export const OtherFilterName = {
  TYPE: `type`,
  STRINGS: `strings`,
}

export const TypeSort = {
  PRICE: `price`,
  COMMENTS: `comments`,
}

export const DirectionSort = {
  INC: `inc`,
  DESC: `decs`,
}

export const PromoCodes = {
  GITARAHIT: `GITARAHIT`,
  SUPERGITARA: `SUPERGITARA`,
  GITARA2020: `GITARA2020`
}

export const StringsAllowedForTypes = {
  [TitleByType.ACOUSTIC]: [
    TypeFilterByStrings.SIX,
    TypeFilterByStrings.SEVEN,
    TypeFilterByStrings.TWELVE
  ],
  [TitleByType.ELECTRIC]: [
    TypeFilterByStrings.FOUR,
    TypeFilterByStrings.SIX,
    TypeFilterByStrings.SEVEN
  ],
  [TitleByType.UKULELE]: [
    TypeFilterByStrings.FOUR
  ],
};

export const TypesAllowedForStrings = {
  [TypeFilterByStrings.FOUR]: [
    TitleByType.ELECTRIC,
    TitleByType.UKULELE
  ],
  [TypeFilterByStrings.SIX]: [
    TitleByType.ACOUSTIC,
    TitleByType.ELECTRIC,
  ],
  [TypeFilterByStrings.SEVEN]: [
    TitleByType.ACOUSTIC,
    TitleByType.ELECTRIC,
  ],
  [TypeFilterByStrings.TWELVE]: [
    TitleByType.ACOUSTIC,
  ],
};

export const NAVIGATION_ITEMS = [
  {
    name: `Каталог`,
    href: AppRoute.CATALOG,
    icon: null,
  },
  {
    name: `Где купить?`,
    href: AppRoute.ROOT,
    icon: null,
  },
  {
    name: `О компании`,
    href: AppRoute.ROOT,
    icon: null,
  },
  {
    name: `Сервис-центры`,
    href: AppRoute.ROOT,
    icon: null,
  },
];

export const NAVIGATION_USER_ITEMS = [
  {
    name: `Карта`,
    href: AppRoute.ROOT,
    icon: MapIcon,
  },
  {
    name: `Поиск`,
    href: AppRoute.ROOT,
    icon: SearchIcon,
  },
  {
    name: `Корзина`,
    href: AppRoute.BASKET,
    icon: BasketIcon,
  },
];
