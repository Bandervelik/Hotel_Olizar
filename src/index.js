import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => <h1>Hello, Webpack and Babel!</h1>;

const root = createRoot(document.getElementById('root'));
root.render(<App />);
