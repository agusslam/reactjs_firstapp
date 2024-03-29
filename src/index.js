import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import MainComponent from './Components/Main';
import reportWebVitals from './reportWebVitals';
import Routes from './Router'

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux';

//reducer
import UserReducer from './Redux/UserReducers'

const CombinedReducers = combineReducers({UserReducer})

//create store


ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
