import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import initializeI18n from './i18n';

initializeI18n(); // Initializing i18n

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
