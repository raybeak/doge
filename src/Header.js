import dogeLogo from './dogelogo.svg';
import './Header.scss';
import axios from "axios";


axios.request({
  method: 'GET',
  url: 'https://api.upbit.com/v1/ticker',
  params: {markets: 'KRW-DOGE'},
  headers: {Accept: 'application/json'},
  timeout:1000,
  responseType:'json'
}).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});

function Header(){
    return(
        <div className='header'>
            <div className='flexContainerLogo'>
              <img src={dogeLogo} className='dogeLogo' alt='dogeLogo'/>
              <div className='flexContainerCoinValue'>
                  <h3 className='coinValueDisc'>Doge Value Now (KRW) :</h3>
                  <h1 className='coinValue'>{upbitCoinData.trade_price}</h1>
                  <h1 className='change' style={upbitCoinData.change==='EVEN'?{color:'white'}:upbitCoinData.change==='FALL'?{color:'red'}:{color:'green'}}>{upbitCoinData.change}</h1>
              </div>
            </div>  
        </div>
    )
}

export default Header;