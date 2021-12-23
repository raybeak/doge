import React, { useEffect, useRef, useState } from 'react';
import dogeLogo from './dogelogo.svg';
import './scss/Header.scss';
import axios from "axios";

function Header(){
    const [upbitCoinData,setUpbitCoinData]=useState(null);
    const [apiError,setApiError]=useState(null);

    const getCoinData = async()=>{
        
        const options = {
            method: 'GET',
            url: 'https://api.upbit.com/v1/ticker',
            headers: {Accept: 'application/json'},
            params: {markets: 'KRW-DOGE'},
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
        <div className='header'>
            <div className='flexContainerLogo'>
              <img src={dogeLogo} className='dogeLogo' alt='dogeLogo'/>
              <div className='flexContainerCoinValue'>
                    <h3 className='coinValueDisc'>Doge Value Now (KRW) :</h3>
                    <h3 className='coinValue'>Error{apiError}</h3>
              </div>
            </div>  
        </div>
    )
        }
        if(upbitCoinData === null){
        return(
        <div className='header'>
            <div className='flexContainerLogo'>
              <img src={dogeLogo} className='dogeLogo' alt='dogeLogo'/>
              <div className='flexContainerCoinValue'>
                    <h3 className='coinValueDisc'>Doge Value Now (KRW) :</h3>
                    <h1 className='coinValue'>L-O-A-D-I-N-G</h1>
              </div>
            </div>  
        </div>
    )}
        return(
        <div className='header'>
            <div className='flexContainerLogo'>
              <img src={dogeLogo} className='dogeLogo' alt='dogeLogo'/>
              <div className='flexContainerCoinValue'>
                    <h3 className='coinValueDisc'>Doge Value Now (KRW) :</h3>
                    <h1 className='coinValue'>{upbitCoinData[0].trade_price}</h1>
                    <h1 className='change' style={upbitCoinData[0].change==='EVEN'?{color:'white'}:upbitCoinData[0].change==='FALL'?{color:'red'}:{color:'green'}}>{upbitCoinData[0].change}</h1>
              </div>
            </div>  
        </div>
    )   
}

export default Header;