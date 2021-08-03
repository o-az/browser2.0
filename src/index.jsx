import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { TabProvider } from './contexts/TabContext';

ReactDOM.render(
  <React.StrictMode>
    <TabProvider>
      <App />
    </TabProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
