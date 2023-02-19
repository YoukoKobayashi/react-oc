import { useEffect, useState } from "react";
import styles from "../styles/layout.module.scss";

const ScrollCatch = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    window.scrollY > 500
      ? setIsVisible(true)
      : setIsVisible(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, []);

  return (
    <span className={isVisible ? styles.isSlideIn : ''}></span>
  )
}

export default ScrollCatch

