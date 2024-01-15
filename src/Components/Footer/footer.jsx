import gsap from "gsap";
import { useEffect, useRef } from "react";
import Sosmed from "./sosmed";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import GsapMagnetic from "../GsapMagnetic";


function Footer() {
  const footercontainer = useRef(null)
  const {scrollYProgress} = useScroll({
    target : footercontainer,
    offset : ["start end", "end end"]
  })
  const x = useTransform(scrollYProgress, [0, 1], [100, 0])
  const y = useTransform (scrollYProgress, [0, 1], [200, 0])

  return (
    <div  ref={footercontainer} className="footer-container">
      <h1>Lets Talk About The Next Project</h1>
      <div className="linefoot"></div>
      <GsapMagnetic>
        <motion.div style={{x}} className="circlefoot">
          <GsapMagnetic>
            <a href="/contact"><p>Get In Touch</p></a>
          </GsapMagnetic>
        </motion.div>
      </GsapMagnetic>
      <motion.div style={{y}} className="container-sos">
        <Sosmed/>
      </motion.div>
      
      <div className="copyright">
        ©2024 Calvin Satria, All Rights Reserved ❤
      </div>
    </div>
  );
}

export default Footer;
