import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

import App from './App';
import './index.css';

const store = ConfigureStore();

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);