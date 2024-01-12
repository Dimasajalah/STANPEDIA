import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { store } from './app/store';
import { Provider } from 'react-redux';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalContextProvider } from './context/global';
import GlobalStyle from './Gloabalstyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <GlobalContextProvider>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </GlobalContextProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
