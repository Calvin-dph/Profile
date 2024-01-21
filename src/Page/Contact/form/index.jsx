import './style.css';
import GsapMagnetic from '../../../Components/GsapMagnetic'
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { useState } from 'react';



export default function index({onSend}){
  const timeline = useRef(null);

  const formsContainer = useRef(null);
  const {scrollYProgress} = useScroll({
    target : formsContainer,
    offset: ["start end", 'end end']
  })
  const x = useTransform(scrollYProgress, [0, 1], [-300, 0])

  useEffect(() => {
    timeline.current = gsap.timeline({paused:true})
    timeline.current
    .to('.white', {top: '100%', duration:0.5, ease: "circ.inOut"}, 'enter')
    .to('.white', {top: '200%', duration:0.5, ease: "circ.inOut"}, 'exit')

  const more = document.querySelector('.btnsend');

  more.addEventListener("mouseenter", () => {
    timeline.current.tweenFromTo("enter", "exit");
  })
  more.addEventListener("mouseleave", () => timeline.current.play())
  })


  // send Email
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_altc3r7', 'template_xwyugtq', e.target, '-KjW0yIq1Bo24uqo8')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  const [user_name, setUserName] = useState('');
  const [user_email, setUserEmail] = useState('');
  const [message, setMessage] = useState('');
  const isButtonDisabled = !user_name || !user_email || !message;

  return(
  <div ref={formsContainer} className='forms'>

    <form ref={form} onSubmit={sendEmail}>
      <div className='form'>
        <h5>01</h5>
        <label htmlFor="name">What's Your Name?</label>
        <input className='field' type="text" name="user_name" placeholder="Alif Vio" onChange={(e) => setUserName(e.target.value)}/>
      </div>
      <div className='form'>
        <h5>02</h5>
        <label htmlFor="email">What's Your Email?</label>
        <input className='field' type="text" name="user_email" placeholder="Alif@gmail.com" onChange={(e) => setUserEmail(e.target.value)}/>
      </div>
      <div className='form'>
        <h5>03</h5>
        <label htmlFor="name">Your Message</label>
        <textarea className='field' type="text" name="message" placeholder="Hi Calvin, can you help with..." onChange={(e) => setMessage(e.target.value)}/>
      </div>
      <GsapMagnetic>
      <motion.div style={{x}} className='btnsend'>
        <div className='white'></div>
        <GsapMagnetic><input className='inputbtn' type="submit" value="Send" onClick={onSend}  disabled={isButtonDisabled}></input></GsapMagnetic>
      </motion.div>
      </GsapMagnetic>
    </form>
    
  </div>
  )
}