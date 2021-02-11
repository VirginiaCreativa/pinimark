import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import createReduxStore, { history } from "../redux/store/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/scss/bootstrap.scss";
import "boxicons";

const initialState = {};
const store = createReduxStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
