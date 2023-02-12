import Link from 'next/link'
import styles from '../styles/nav.module.css'

function Nav() {
  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <Link href="/" >
            home
          </Link>
        </li>
        <li>
          <Link href="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  )  
}
export default Nav