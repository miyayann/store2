import React from 'react'
import Logo from '../parts/logo'
import styles from "@/styles/_footer.module.scss"
import Container from '../view/container'
import Social from '../parts/social'
const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <Logo/>
          <Social />
        </div>
      </Container>
    </footer>
  )
}

export default Footer;
