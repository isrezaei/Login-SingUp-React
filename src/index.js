import React from 'react';
import ReactDOM from 'react-dom';
import App from './App-Root/App';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {Store} from "./App-Root/Store";
import './Reset.css'

ReactDOM.render(
    <BrowserRouter>
        <Provider store={Store}>
            <App />
        </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);
