import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Palabra from '../containers/Palabra';

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/palabra">
          <Palabra />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
