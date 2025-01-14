import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Add a global CSS to remove default body margin and padding
document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.style.backgroundColor = 'rgb(80,80,80)';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);