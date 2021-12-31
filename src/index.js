import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Header'
import Footer from './Footer'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <Header coinName='코인이름(KRW-BTC)' logo='로고' coinColor='바탕색'/> */}
    {/* <App img='이미지' title='제목' disc={``} backgroundColor='바탕색'/> */}
    <Header coinName='KRW-DOGE' logo='doge.svg' coinColor='#005580'/>
    <App 
      img='doge.svg' 
      title='도지코인은 뭔가요?' 
      disc={`도지코인은 전 세계의 시바 이누들에게 사랑 받는 오픈소스 p2p 디지털 통화 입니다.\n라이트코인 기반 포크로 2013년에 밈(Meme)문화의 파생 코인으로 만들어 졌습니다.`}
      alt={false}
    />   
    {/* <App backgroundColor='#ffffff' img ='ltc.svg' title='라이트코인은 비트코인을 포크한 알트코인중 하나입니다 ' disc=''/> */}
    <App img='doge.svg' title='123' disc='123' alt={true}/>
    <App img='doge.svg' title='123' disc='123' alt={false}/>
    <Footer img ='doge.svg'/>{/*footerLogo.svg*/}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
