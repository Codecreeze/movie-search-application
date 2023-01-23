import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import store from './Redux/Store';
import RouterPage from './RouterPage';

// Main file of the project

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
      <RouterPage />
    </Provider>
  </React.StrictMode>
);

