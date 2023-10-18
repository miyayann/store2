import React from 'react'
import styles from "@/styles/_contact.module.scss"
import Social from './social'

const Contact = () => {
  return (
    <div className={styles.stack}>
      <h3 className={styles.heading}>Contact</h3>
      <Social/>
    </div>
  )
}

export default Contact
