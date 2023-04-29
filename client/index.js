import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';
import { StrictMode } from 'react';

// uncomment so that webpack can bundle styles
// import styles from './style/application.scss';

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)



