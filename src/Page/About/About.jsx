import './about.css'
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

import Navbar from "../../Components/Navbar/Navbar"
import Prepage from '../../Components/prepage/Prepage';
import BurgerOut from '../../Components/Navbar/BurgerOut';
import Burgerbar from '../../Components/Navbar/Burgerbar';
import TopAbout from './topabout';
import Aboutme from './Aboutme';
import Biodata from './biodata';
import Linetwink from '../../Components/Linetwink/Linetwink';
import Skills from './skills';
import Footer from '../../Components/Footer/footer';


function About(){
  const homeBox = useRef(null)
  const container = useRef(null)
  const {scrollYProgress} = useScroll({
    target : container,
    offset : ["start end", "end start"]
  })
  const height = useTransform(scrollYProgress, [0,1], [200, 0])
  return(
    <div className='main'>
    <Prepage/>
    <Burgerbar homeBox={homeBox}/>
    
    <Navbar/>      
      <div ref={container} className="about-container">   
        <TopAbout/>
        <BurgerOut ref={homeBox}/>
        <Aboutme/>
        <Linetwink/>
        <Biodata/>
        <Linetwink/>
        <Skills/>  
      </div>
      <motion.div style={{height}} className="circle-container">
          <div className="circlebot"></div>
        </motion.div>  
      <Footer/>
    </div>
  )
}

export default About