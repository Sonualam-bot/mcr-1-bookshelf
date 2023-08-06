import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { BookShelfContextProvider } from "./context/BookShelfContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <BookShelfContextProvider>
        <App />
      </BookShelfContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

