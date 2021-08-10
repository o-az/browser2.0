import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { TabProvider } from './contexts/TabContext';

ReactDOM.render(
  <React.StrictMode>
    <TabProvider>
      <h1 style={{ color: '#ffffff', backgroundColor: '#ff990a' }}>
        WORK IN PROGRESS
      </h1>
      <App />
    </TabProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
