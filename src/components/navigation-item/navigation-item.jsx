import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const NavigationItem = ({block, item, modifier}) => {
  const {name, href, icon: Icon} = item;

  return (
    <li className={`${block}-nav__item${modifier ? ` ${block}-nav__item--${modifier}` : ``}`}>
      <Link
        to={href}
        className={`${block}-nav__link${modifier ? ` ${block}-nav__link--${modifier}` : ``}`}
        aria-label={`Перейти на страницу ${name}`}
      >
        {modifier ? <Icon className={`${block}-nav__icon`} /> : name}
        {name === `Корзина` && <sup>2</sup>}
      </Link>
    </li>
  );
};

NavigationItem.propTypes = {
  block: PropTypes.string.isRequired,
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    icon: PropTypes.object,
  }).isRequired,
  modifier: PropTypes.string,
};

export default NavigationItem;
