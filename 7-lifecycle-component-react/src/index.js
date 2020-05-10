import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './containers/Home/Home';


ReactDOM.render(

  /**
   * 
   * React.StrictMode merender dua kali
   * beberapa element di LifeCycle Component
   * 
   * rubah menjadi <> dari <React.StrictMode>
   * 
   */

  <>
    <Home />
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
