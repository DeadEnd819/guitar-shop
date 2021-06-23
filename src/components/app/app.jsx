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
        <Route exact path={AppRoute.CATALOG}>
          <CatalogScreen title="Guitar Shop | Каталог" />
        </Route>
        <Route exact path={AppRoute.BASKET}>
          <BasketScreen title="Guitar Shop | Оформляем" />
        </Route>
        <Route render={() => <ErrorScreen title="Guitar Shop | Страница не найдена" />}/>
      </Switch>
    </Router>
  );
};

export default App;
