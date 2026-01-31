import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

/**
 * Bootstrap Entry Point
 *
 * This file is responsible ONLY for:
 * 1. Finding the DOM root element
 * 2. Mounting the React application
 * 3. Strict mode setup
 *
 * All initialization logic belongs in:
 * - App.tsx (UI bootstrap)
 * - state/ (state initialization)
 * - core/ (renderer/webxr setup)
 *
 * DO NOT add business logic here.
 */

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
