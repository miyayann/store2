import React, { ReactNode } from 'react'
import styles from "@/styles/_post-body.module.scss"


const PostBody = ({children}: { children: ReactNode }) => {
  return (
    <div className={styles.stack}>
      {children}
    </div>
  )
}

export default PostBody
