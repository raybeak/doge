import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Header'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header coinName='KRW-DOGE' />
    <App />
    <Header coinName='KRW-BTC'  coinColor='#f7931a'/>
    <App />
    <Header coinName='KRW-ETH'  coinColor='#c99d66'/>
    <App />
    <Header coinName='KRW-LTC'  coinColor='#00aeff'/>
    <App />
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
