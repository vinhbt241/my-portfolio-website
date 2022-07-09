import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { AnimatedRoutes } from './AnimatedRoutes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  </React.StrictMode>
);

