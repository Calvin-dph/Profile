import styles from './style.module.css';
import pictcir from '../../../img/cir.jpg'
import GsapMagnetic from '../../../Components/GsapMagnetic'



export default function index(){


  return(
  <div className={styles.contacts}>
    <div className={styles.topcontact}>
      <div className={styles.pictcircle}>
        <img src={pictcir} alt="" />
      </div>
      <h3>Get in Touch — let's hire me!</h3>
    </div>
    <div className={styles.botcontact}>

      <div className={styles.colcontact}>
        <p>Contact Detail</p>
        <h3>Calvinsatria09@gmail.com</h3>
        <h3>+62 8954 2346 8234</h3>
      </div>
      <div className={styles.colcontact}>
        <p>Address</p>
        <h3>Buah Batu, Bojongsoang</h3>
        <h3>Bandung, Indonesia</h3>
      </div>
      <div className={styles.colcontact}>
        <p>Social</p>
        <a href="https://www.instagram.com/calvin.dph/" target='_blank'><GsapMagnetic><h3>Instagram</h3></GsapMagnetic></a>
        <a href="https://www.linkedin.com/in/calvin-satria-53bb94212/" target='_blank'><GsapMagnetic><h3>Linkedin</h3></GsapMagnetic></a>
        <a href=""><GsapMagnetic><h3>Twitter</h3></GsapMagnetic></a>
      </div>

    </div>
  </div>
  )
}