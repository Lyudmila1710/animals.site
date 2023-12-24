import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import '../node_modules/@popperjs/core/dist/umd/popper.min.js'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
   <App />
   </BrowserRouter>
);


