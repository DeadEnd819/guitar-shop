import React from 'react';
import {Switch, Route, Redirect, BrowserRouter as Router} from 'react-router-dom';
import CatalogScreen from '../catalog-screen/catalog-screen';
import BasketScreen from '../basket-screen/basket-screen';
import ErrorScreen from '../error-screen/error-screen';
import {AppRoute} from '../../const';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Redirect to={AppRoute.CATALOG} />
        </Route>
        <Route exact path={AppRoute.CATALOG} render={({location}) => (
          <CatalogScreen title="Guitar Shop | Каталог" pathname={location.pathname} />
        )} />
        <Route exact path={AppRoute.BASKET} render={({location}) => (
          <BasketScreen title="Guitar Shop | Оформляем" pathname={location.pathname} />
        )} />
        <Route render={() => <ErrorScreen title="Guitar Shop | Страница не найдена" />}/>
      </Switch>
    </Router>
  );
};

export default App;
