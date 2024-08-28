import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.tsx';
import './index.css';
import { NotificationProvider } from './notification_system/NotificationContext.tsx';

// Theme setting at application start
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.classList.add(currentTheme);

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <NotificationProvider>
      <App />
    </NotificationProvider>
  </React.StrictMode>,
);
