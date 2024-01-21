import NavbarCT from "../../Components/Navbar/NavbarCT";
import BurgerOut from '../../Components/Navbar/BurgerOut';
import Burgerbar from '../../Components/Navbar/Burgerbar';
import PrepageCT from '../../Components/prepage/PrepageCT';
import Maps from "./maps"
import Form from "./form"
import Social from "./social"
import './contact.css'
import { useRef } from "react";
import { useState } from "react";


function Contact(){

  // popup
  const [bntSend, setBtnSend] = useState(true)

  const homeBox = useRef(null)
  

  
  const handleSend = () => {
    setBtnSend(!bntSend);
    const popup = document.querySelector('.popup');
    popup.style.display = 'flex'
    setTimeout(() => {
      popup.style.display = ''
    }, 2000);
  }


  return(
    <div className="main-contact">
      {/* <PrepageCT/> */}
      <NavbarCT/>
      <Burgerbar homeBox={homeBox}/>
      <Maps/>
      <BurgerOut ref={homeBox}/>
      <div className="contact-container">
        <Form onSend={handleSend}/>
        <Social/>
      </div>
      <div className="copyright">
        ©2024 Calvin Satria, All Rights Reserved ❤
      </div>

      <div className={`popup `}>
        <h3>Thank You For Contacting Me</h3>
      </div>

    </div>
  )
}

export default Contact