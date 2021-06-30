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
};

export const Key = {
  ESCAPE: `Escape`,
  ESC: `Esc`,
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
