import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { history } from './redux/store/store';
import Routes from './routes/Routes';
import Layouts from './layouts/Layout';

const App = () => (
  <>
    <Router history={history}>
      <Layouts>
        <Routes />
      </Layouts>
    </Router>
  </>
);
export default App;
