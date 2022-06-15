import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { v4 as uuidv4 } from 'uuid'; //Add to "fix" warning

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
