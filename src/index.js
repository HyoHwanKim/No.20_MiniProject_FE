import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import reportWebVitals from './reportWebVitals'
import './reset.css'
import { Provider } from 'react-redux'
import store from './redux/config/configureStore'

import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

export let persistor = persistStore(store)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

reportWebVitals();
