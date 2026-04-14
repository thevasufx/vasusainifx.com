
import React from 'react';
import ReactDOM from 'react-dom/client';
import type { ReactNode } from 'react';
import App from './App';
import '@google/model-viewer';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
