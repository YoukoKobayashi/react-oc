import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faLine, } from '@fortawesome/free-brands-svg-icons'
import styles from '../styles/social.module.css'

export default function Social({ iconSize = 'initial' }) {
  return (
    <ul className={styles.list} style={{ '--icon-size': iconSize }}>
      <li>
        <a href='https://twitter.com/'>
          <FontAwesomeIcon icon={faTwitter} />
          <span className='sr-only'>Twitter</span>
        </a>
      </li>
      <li>
        <a href='https://www.facebook.com/'>
          <FontAwesomeIcon icon={faFacebook} />
          <span className='sr-only'>Facebook</span>
        </a>
      </li>
      <li>
        <a href='https://www.line.com/'>
          <FontAwesomeIcon icon={faLine} />
          <span className='sr-only'>Twitter</span>
        </a>
      </li>

    </ul>
  )  
}