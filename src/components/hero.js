import styles from '../styles/hero.module.css'

export default function Hero({ title1, title2,subtitle }) {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h2 className={styles.title1}>{title1}</h2>
        <h2 className={styles.title2}>{title2}</h2>
        <h3 className={`${styles.subtitle} ${[styles.fade-top]}`}>{subtitle}</h3>
      </div>
      <figure className={styles.hero}></figure>
    </div>
  )  
}