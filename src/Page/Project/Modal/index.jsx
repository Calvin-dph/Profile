import { useRef } from 'react';
import styles from './style.module.css';
import { useEffect } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';

const scaleAnimation = {
  initial: {scale: 0, x:"-50%", y:"-50%"},
  enter: {scale: 1, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}},
  closed: {scale: 0, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.32, 0, 0.67, 0]}}
}

export default function index({modal, projects}) {

  const {active, index} = modal;

  return (
    <>
      <div className={styles.modalContainer}>
        <div style={{top: index * -100 + '%'}} className={styles.modalSlider}>
        {
          projects.map( (project, index) => {
          const { src, color } = project
          return <div className={styles.modal} style={{backgroundColor: color}} key={`modal_${index}`}>
            <img 
            src={`../../../img/${src}`}
            width={300}
            height={0}
            alt="image"
            />
          </div>
          })
        }
        </div>
      </div>
    </>
  )
}