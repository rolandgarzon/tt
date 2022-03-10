import React from 'react';
import ReactDOM from 'react-dom';
import 'bootswatch/dist/yeti/bootstrap.min.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";




ReactDOM.render(
  <BrowserRouter>
    <App title='App Movies Dooper' />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
