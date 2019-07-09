// store, mid-ware, redux
import { createStore, applyMiddleware } from 'redux';
// epic mid-ware, redux-obs
import { createEpicMiddleware } from 'redux-observable';
// compose, redux
import { compose } from 'redux';
// root epic, like reducer
import { rootEpic } from './epics'
// root reducers
import { rootReducer } from './reducers'

// epic mid ware
const epicMiddleware = createEpicMiddleware();

// compose enhance
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// configure store
export default function configureStore() {
  // create store
  // root reducer
  // compose enhance
  // app-mid-ware
  // epic-mid-ware
  const store = createStore(rootReducer,
    composeEnhancers(
      applyMiddleware(epicMiddleware)
    )
  );

  // store is created, then run rootEpic directly
  // epic-mid-ware run root-epic
  epicMiddleware.run(rootEpic);
  
  // return store
  return store;
}