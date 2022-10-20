import React from 'react';
import ReactDOM from 'react-dom/client';
import './presentation/assets/styles/index.scss';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "domain/helpers/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
        <App />
        </BrowserRouter>
      </Provider>
  </React.StrictMode>
);

reportWebVitals();
