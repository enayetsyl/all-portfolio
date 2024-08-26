import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import SharedContext from './Context/GlobalContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SharedContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </SharedContext>
  </React.StrictMode>
);
