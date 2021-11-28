import 'tailwindcss/tailwind.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { TabProvider } from './contexts/TabContext';
import {GlobalStyle} from './GlobalStyle';
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <TabProvider>
      <App />
    </TabProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
