import { useRef } from "react";
import ProjectMini from "./ProjectMini";
import AboutMini from "./aboutmini";
import { useScroll, useTransform, motion } from "framer-motion";

import Linetwink from "../../Components/Linetwink/Linetwink";
import Preloader from "../../Components/Preloader/Preloader";
import Navbar from "../../Components/Navbar/Navbar";
import Burgerbar from "../../Components/Navbar/Burgerbar";
import Jumbotron from "./Jumbotron";
import Footer from "../../Components/Footer/footer";


function Home(){
  const homeBox = useRef(null)
  const container = useRef(null)
  const {scrollYProgress} = useScroll({
    target : container,
    offset : ["start end", "end start"]
  })
  const height = useTransform(scrollYProgress, [0,1], [200, 0])

  return(
    <>
    <Preloader/>
    <div className="main">
      <Navbar/>
      <Burgerbar homeBox={homeBox}/>
      <Jumbotron ref={homeBox}/>
      <div ref={container} className="home" style={{ position: 'relative' }}>
          <AboutMini/>
          <Linetwink/>
          <ProjectMini/>
          <motion.div style={{height}} className="circle-container">
            <div className="circlebot"></div>
          </motion.div>
      </div>
      <Footer/>
    </div>
    </>
  )
}

export default Home;