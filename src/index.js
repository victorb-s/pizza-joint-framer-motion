import React from 'react';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react'
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
);