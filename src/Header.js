import React, { useEffect, useRef, useState } from 'react';
import './scss/Header.scss';
import axios from "axios";

function Header(props){
    const [upbitCoinData,setUpbitCoinData]=useState(null);
    const [apiError,setApiError]=useState(null);
    
    const getCoinData = async()=>{
        
        const options = {
            method: 'GET',
            url: 'https://api.upbit.com/v1/ticker',
            headers: {Accept: 'application/json'},
            params: {markets: props.coinName},
            };

        await axios.request(options).then(function (response) {
            setApiError(null);
            setUpbitCoinData(response.data);
        }).catch(function (e) {
            console.log(e);
            setApiError(e);
        });

    }
    const interval = useRef();

    useEffect(()=>{
       interval.current=setInterval(()=>{getCoinData()},1000);
        return ()=>{
            clearInterval(interval.current)
        };
    },[])

        if (apiError !== null) { 
        return(
        <div className='header' style={{backgroundColor:props.coinColor}}>
            <div className='flexContainerLogo'>
              <img src={require('./logo/'+props.logo)} className='coinLogo' alt='coinLogo'/>
              <div className='flexContainerCoinValue'>
                    <h3 className='coinValueDisc'>{props.coinName} Value Now (KRW) :</h3>
                    <h3 className='coinValue'>Error{apiError}</h3>
              </div>
            </div>  
        </div>
    )
        }
        if(upbitCoinData === null){
        return(
        <div className='header' style={{backgroundColor:props.coinColor}}>
            <div className='flexContainerLogo'>
              <img src={require('./logo/'+props.logo)} className='coinLogo' alt='coinLogo'/>
              <div className='flexContainerCoinValue'>
                    <h3 className='coinValueDisc'>{props.coinName} Value Now (KRW) :</h3>
                    <h3 className='coinValue' style={{marginTop:'1vw'}}>L-O-A-D-I-N-G</h3>
              </div>
            </div>  
        </div>
    )}
        return(
        <div className='header' style={{backgroundColor:props.coinColor}}>
            <div className='flexContainerLogo'>
              <img src={require('./logo/'+props.logo)} className='coinLogo' alt='coinLogo'/>
              <div className='flexContainerCoinValue'>
                    <h3 className='coinValueDisc'>{props.coinName} Value Now :</h3>
                    <h1 className='coinValue'>{upbitCoinData[0].trade_price}</h1>
                    <h1 className='change' style={upbitCoinData[0].change==='EVEN'?{color:'white'}:upbitCoinData[0].change==='FALL'?{color:'red'}:{color:'green'}}>{upbitCoinData[0].change}</h1>
              </div>
            </div>  
        </div>
    )   
}

export default Header;