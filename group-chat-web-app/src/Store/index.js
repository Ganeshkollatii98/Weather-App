import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import reducer from '../Reducers';
// import logger from 'redux-logger';

// export function configureStore() {
//       let store;
//       store = createStore(reducer, applyMiddleware(thunk, logger));
//       return store;
// }