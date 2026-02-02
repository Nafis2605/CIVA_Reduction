import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { appConfig, validateConfigOrThrow, logConfigSummary } from '@/config';

try {
  validateConfigOrThrow(appConfig);
  logConfigSummary(appConfig);
} catch (error) {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    rootElement.innerHTML = `<div style="padding: 20px; color: red;"><h2>❌ Configuration Error</h2><pre>${(error as Error).message}</pre></div>`;
  }
  throw error;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
