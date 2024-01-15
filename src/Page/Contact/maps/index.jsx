import styles from './style.module.css';


export default function index(){

  return(
    <>
      <div className={styles.maps}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1980.1499443123828!2d107.63541903877433!3d-6.973901878483825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9b1872ba8cb%3A0x8a02a9d1b50e06d4!2sJl.%20Raya%20Bojongsoang%20No.188%2C%20Lengkong%2C%20Kec.%20Bojongsoang%2C%20Kabupaten%20Bandung%2C%20Jawa%20Barat%2040287!5e0!3m2!1sid!2sid!4v1705269802919!5m2!1sid!2sid" 
        width="85%" 
        height="100%" 
        allowFullScreen="none" 
        loading="lazy" 
        ></iframe>
        <div className={styles.textmap}>
          <ul>
            <li className={styles.blck}>L</li>
            <li className={styles.blck}>E</li>
            <li>T</li>
            <li>S</li>
          </ul>
          <ul>
            <li className={styles.blck}>W</li>
            <li className={styles.blck}>O</li>
            <li>R</li>
            <li>K</li>
          </ul>
          <ul>
            <li className={styles.blck}>T</li>
            <li className={styles.blck}>O</li>
            <li>G</li>
            <li>E</li>
          </ul>
          <ul>
            <li className={styles.blck}>T</li>
            <li className={styles.blck}>H</li>
            <li>E</li>
            <li>R</li>
          </ul>
        </div>
      </div>
    </>
  )
}