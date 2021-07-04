import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

const ErrorScreen = ({title}) => {
  useEffect(()=>{
    document.title = title;
  }, [title]);

  return (
    <div className="error">
      <h1 className="error__title">404.</h1>
      <p className="error__text">Страница не найдена</p>
      <Link to={AppRoute.ROOT} className="error__link">Перейти на главную</Link>
    </div>
  );
};

ErrorScreen.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ErrorScreen;
