import Link from 'next/link'
import React, { useState } from 'react'
import styles from "@/styles/_nav.module.scss"

const Nav = () => {
  const [navIsOpen, setNavIsOpen] = useState(false)

  const toggleOpen = () => {
    setNavIsOpen((prev) => !prev)
  }

  const closeNav = () => {
    setNavIsOpen(false)
  }
  return (
    <nav className={navIsOpen ? styles.open : styles.close}>

      {navIsOpen && (
        <style global>{`
          @media(max-width: 767px) {
            body {
              overflow: hidden;
              position: fixed;
              width: 100%;
            }
          }
        `}
        </style>
      )}
      <button onClick={toggleOpen} className={styles.btn}>
        <span className={styles.bar}></span>
        <span className='sr-only'>MENU</span>
      </button>
      <ul className={styles.list}>
        <li>
          <Link href="/">
            <p onClick={closeNav}>Home</p>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <p onClick={closeNav}>About</p>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <p onClick={closeNav}>Blog</p>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
