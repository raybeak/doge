import React from "react";
import './scss/Footer.scss'

function Footer(props){
    return(
        <footer className="footer">
            <div className="flexcontainer">
                <img src={require('./img/'+props.img)} className="footerlogo" alt="logo"/>
                <h3 className="footertext">head a roll</h3>
            </div>
        </footer>
    )
}

export default Footer