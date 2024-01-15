import NavbarCT from "../../Components/Navbar/NavbarCT";
import BurgerOut from '../../Components/Navbar/BurgerOut';
import Burgerbar from '../../Components/Navbar/Burgerbar';
import PrepageCT from '../../Components/prepage/PrepageCT';
import Maps from "./maps"
import Form from "./form"
import Social from "./social"
import './contact.css'
import { useRef } from "react";


function Contact(){

  const homeBox = useRef(null)
  return(
    <div className="main-contact">
      <PrepageCT/>
      <NavbarCT/>
      <Burgerbar homeBox={homeBox}/>
      <Maps/>
      <BurgerOut ref={homeBox}/>
      <div className="contact-container">
        <Form/>
        <Social/>
      </div>
      <div className="copyright">
        ©2024 Calvin Satria, All Rights Reserved ❤
      </div>
    </div>
  )
}

export default Contact