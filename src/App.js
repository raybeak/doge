import './scss/App.scss';

import React from 'react';

function App(props) {
  if(props.alt===true){
      return (
      <div className='contentsMain' style={{backgroundColor:props.backgroundColor}}>
        <div className='flexcontainer'>
          <div className='linerAlt'>
            <h1>{props.title}</h1>
            <h3>{props.disc}</h3>
          </div>
          <img src={require('./img/'+props.img)} className='contentimg' alt='contentimg' />
        </div>
      </div>
    );
  }else{
    return (
      <div className='contentsMain' style={{backgroundColor:props.backgroundColor}}>
        <div className='flexcontainer'>
          <img src={require('./img/'+props.img)} className='contentimg' alt='contentimg' />
          <div className='liner'>
            <h1>{props.title}</h1>
            <h3>{props.disc}</h3>
          </div>
        </div>
     </div>
    );
  }
}

export default App;
