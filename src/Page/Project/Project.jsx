import './project.css'
import Navbar from "../../Components/Navbar/Navbar";
import BurgerOut from '../../Components/Navbar/BurgerOut';
import Burgerbar from '../../Components/Navbar/Burgerbar';
import PrepagePJ from '../../Components/prepage/PrepagePJ';
import Linetwink from '../../Components/Linetwink/Linetwink';
import Footer from '../../Components/Footer/footer';

import { useState, useRef } from "react"
import Work from "./work"
import Modal from "./Modal"
import Cursor from "./cursor"
import Resume from './resume';
import { useScroll } from 'framer-motion';
import { useTransform } from 'framer-motion';
import { motion } from 'framer-motion';


function Project(){
  const projects = [
    {
      title: "Quadra Karya Santosa",
      src: "project1.png",
      color: "#000",
      link: "https://quadrakaryasantosa.co.id/"
    },
    {
      title: "Moolife",
      src: "project2.png",
      color: "#464646",
      link: "https://moolife.000webhostapp.com/login.php"
    },
  ]
  const [modal, setModal] = useState({active:false, index:0})

  const homeBox = useRef(null);
  const container = useRef(null)
  const {scrollYProgress} = useScroll({
    target : container,
    offset : ["start end", "end start"]
  })
  const height = useTransform(scrollYProgress, [0,1], [200, 0])

  return(

    <div className='main'>
    <Navbar/>
    <Cursor modal={modal} projects={projects}/>
    <PrepagePJ/>
    <Burgerbar homeBox={homeBox}/>
      <div ref={container} className="project-container">
        <Resume/>
        <BurgerOut ref={homeBox}/>
        <Linetwink/>

        <div className="work-container">
          <h1 className="title-container">PROJECT</h1>
          <div className="cont">
            {
              projects.map((project, index) => {
                return(
                <Work index={index} link={project.link} title={project.title} key={index} setModal={setModal}/>
                )
              })
            }
          </div>
          <div className="bot-modal">
          <Modal modal={modal} projects={projects}/>
          </div>
        </div>

      </div>
      <motion.div style={{height}} className="circle-container">
          <div className="circlebot"></div>
        </motion.div>  
      <Footer/>
    </div>
  )
}

export default Project