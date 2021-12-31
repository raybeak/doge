import './scss/App.scss';

import React from 'react';

function App(props) {
  if(props.alt===true){
      return (
      <div className='contentsMain' style={{backgroundColor:props.backgroundColor}}>
        <div className='flexContainer'>
          <div className='linerAlt'>
            <h1 className='contentTitle'>{props.title}</h1>
            <h3 className='contentDisc'>{props.disc}</h3>
          </div>
          <img src={require('./img/'+props.img)} className='contentImg' alt='contentimg' />
        </div>
      </div>
    );
  }else{
    return (
      <div className='contentsMain' style={{backgroundColor:props.backgroundColor}}>
        <div className='flexContainer'>
          <img src={require('./img/'+props.img)} className='contentImg' alt='contentimg' />
          <div className='liner'>
            <h1 className='contentTitle'>{props.title}</h1>
            <h3 className='contentDisc'>{props.disc}</h3>
          </div>
        </div>
     </div>
    );
  }
}

export default App;
