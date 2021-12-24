import './scss/App.scss';

import React from 'react';

function App(props) {
  return (
    <div className='contentsMain' style={{backgroundColor:props.backgroundColor}}>
      <div className='flexcontainer'>
        <img src={require('./img/'+props.img)} className='contentimg' alt='contentimg' />
        <div className='liner'>
          <h1>{/*props.title*/}123</h1>
          <h3>{/*props.disc*/}123</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
