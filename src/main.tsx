// Styles
import './styles/index.css';

// React Components
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Main Components
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
