import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from './reducers';

export const ConfigureStore = () => {
    const store = createStore(reducers, compose(applyMiddleware(thunk, logger)));

    return store;
}