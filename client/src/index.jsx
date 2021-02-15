import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import createReduxStore, { history } from './redux/store/store';
import reportWebVitals from './reportWebVitals';
import App from './App';
import GlobalStyled from './styles/GlobalStyled';
import 'bootstrap/scss/bootstrap.scss';

const initialState = {};
const store = createReduxStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <GlobalStyled />
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);

reportWebVitals();
