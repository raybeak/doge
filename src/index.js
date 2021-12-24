import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Header'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header coinName='KRW-DOGE' logo='doge.svg' coinColor='#123343'/>
    <App img='doge.svg' title='도지코인은 뭔가요?' disc='도지코인은 전 세계의 시바 이누들에게 사랑 받는 오픈소스 p2p 디지털 통화입니다.'/>   
    <Header coinName='KRW-BTC'  logo='btc.svg' coinColor ='#ffffff'/>
    <App backgroundColor='' img ='btc.svg'/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
