import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

const BREADCRUMB_LIST = [
  {
    title: `Главная`,
    href: AppRoute.ROOT
  },
  {
    title: `Каталог`,
    href: AppRoute.CATALOG
  },
  {
    title: `Оформляем`,
    href: AppRoute.BASKET
  },
]

const Main = ({title, children, pathname}) => {
  let isActive = false;

  return (
    <main className="main">
      <div className="main__wrapper container">
        <h2 className="main__title">{title}</h2>
        <ul className="breadcrumb">
          {BREADCRUMB_LIST.map(({title, href}, index) => {
            if (!isActive) {
              isActive = pathname === href;

              return !isActive ?
                <li className="breadcrumb__item" key={title + index}>
                  <Link to={href} className="breadcrumb__link">
                    {title}
                  </Link>
                </li>
                :
                <li className="breadcrumb__item" key={title + index}>
                  {title}
                </li>
            }
            return null;
          })}
        </ul>
        {children}
      </div>
    </main>
  );
};

export default Main;
