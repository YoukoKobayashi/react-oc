import styles from '../styles/but.module.css'

export default function Btn() {
  return (
    <a href="#"><div id={styles.scrollPageTop} type="button" className={styles.fixedBtn}>
      <div className={styles.arrow}><span className={styles.arrowTop}></span></div></div>
    </a>
  )
  
}