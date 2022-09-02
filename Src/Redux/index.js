import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import rootSaga from '../Sagas';

const rootReducer = combineReducers({
  omdb: require("./omdbRedux").reducer,
  }
);



const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, applyMiddleware(thunk, sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return store;
}


export default configureStore;