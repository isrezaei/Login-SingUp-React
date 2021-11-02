import React from 'react';
import ReactDOM from 'react-dom';
import App from './App-Root/App';
import AuthProvider from "./Context/Context";
import {BrowserRouter} from "react-router-dom";
import './Reset.css'

ReactDOM.render(
    <BrowserRouter>
        <AuthProvider>
            <App />
        </AuthProvider>
    </BrowserRouter>,
  document.getElementById('root')
);
