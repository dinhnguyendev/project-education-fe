import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { persistor, store } from './redux/store';
import './i18n';
import 'antd/dist/antd.css';
import RootRouter from './routers/RootRouter';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RootRouter />
    </PersistGate>
  </Provider>
);

reportWebVitals();
