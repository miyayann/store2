import React, { ReactNode } from 'react'
import styles from "@/styles/_container.module.scss"
import { ContainerProps } from '@/../type'

const Container:React.FC<ContainerProps> = ({children, large = false}) => {
  return (
    <div className={large ? styles.large : styles.default}>
      {children}
    </div>
  )
}

export default Container
