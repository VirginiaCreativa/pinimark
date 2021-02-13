import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import User from '../containers/Palabra';

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/user">
          <User />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
