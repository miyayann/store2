import React from 'react'
import Logo from '../parts/logo'
import Nav from '../parts/nav'
import styles from "@/styles/_header.module.scss"
import Container from '../view/container'

const Header = () => {
  return (
    <header>
      <Container large>
        <div className={styles.flexContainer}>
          <Logo boxOn />
          <Nav/>
        </div>
      </Container>
    </header>
  )
}

export default Header
