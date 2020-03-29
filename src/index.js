import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'

import { Provider } from 'react-redux';
import './index.css';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate  persistor={persistor} loading={null}>
          <App/>
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
