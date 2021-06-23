import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

const ErrorScreen = ({title}) => {
  useEffect(()=>{
    document.title = title;
  }, [title]);

  return (
    <div className="error">
      <h1 className="error__title">404.</h1>
      <p className="error__text">Page not found</p>
      <Link to={AppRoute.ROOT} className="error__link">Go to main page</Link>
    </div>
  );
};

export default ErrorScreen;
