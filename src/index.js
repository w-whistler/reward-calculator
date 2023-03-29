import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppProviders } from './providers/AppProviders';

const root = ReactDOM.createRoot(document.getElementById('root'));

const app = (
  <AppProviders>
    <App />
  </AppProviders>
);

if (process.env.REACT_APP_USE_MOCK === 'true') {
  const mockServer = import('./api/mockServer');

  mockServer.then(server => {
    server.mockServer();
    root.render(app);
  });
} else {
  root.render(app);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
