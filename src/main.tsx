import React from 'react';
import ReactDOM from 'react-dom/client';
import RRD from './routers/RouterDom';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RRD />
  </React.StrictMode>
);
