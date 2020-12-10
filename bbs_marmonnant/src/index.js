import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, createStore} from 'redux'
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from 'react-redux'
import thunk from "redux-thunk";
import { getFirestore } from 'redux-firestor'
import { getFirebase } from 'react-redux=firebase'


const store =createStore( rootReducer, applyMiddleware(thunk.withExtraArgument({ getFirebase,getFirestore})));

ReactDOM.render(
  < Provider store= { store }>
    <App />
  </Provider >
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
