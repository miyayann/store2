import Link from 'next/link'
import React from 'react'
import styles from "@/styles/_logo.module.scss"

const Logo = ({boxOn = false}) => {
  return (
    <Link href="/">
      <p className={boxOn ? styles.box : styles.basic}>Store</p>
    </Link>
  )
}

export default Logo
