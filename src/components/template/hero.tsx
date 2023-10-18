import React from 'react'
import { Hero } from '../../../type'
import styles from "@/styles/_hero.module.scss"
import Image from 'next/image'
import cube from "@/../public/cube.jpg"

const Hero = ({title, subtitle, imageOn = false}: Hero) => {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      {imageOn && (
        <figure className={styles.image}>
          <Image
            src={cube}
            alt=''
            sizes="(min-width: 1152px) 576px, (min-width: 1152px) 50vw, 100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
            priority
            placeholder='blur'
          />
        </figure>)}
    </div>
  )
}

export default Hero
