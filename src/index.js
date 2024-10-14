import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const App = () => (
  <React.StrictMode>
    <h1>Hello, Webpack and Babel!</h1>
  </React.StrictMode>
);

const root = createRoot(document.getElementById('root'));
root.render(<App />);
