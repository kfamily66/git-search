import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import items from "../reducers/items";
import likes from "../reducers/likes";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {
  const sagaMiddleware = createSagaMiddleware();
  return {
    ...createStore(combineReducers({ results: items, likes }), composeEnhancers(applyMiddleware(sagaMiddleware))),
    runSaga: sagaMiddleware.run
  };
};
