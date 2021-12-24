import './scss/App.scss';
//import axios from 'axios';
import React /*, {useState,useEffect}*/ from 'react';

function App(props) {
  return (
    <div className='contentsMain' style={{backgroundColor:props.backgroundColor}}>
      <div className='flexcontainer'>
        <img src='' className='contentimg' alt='contentimg' />
        <div className='liner'>
          <h1>{/*props.title*/}123</h1>
          <h3>{/*props.disc*/}123</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
