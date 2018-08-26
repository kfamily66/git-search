import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import mySaga from "./sagas/sagas";

const store = configureStore();
store.runSaga(mySaga);

render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("app")
);
