import React, { ReactNode } from 'react'
import styles from "@/styles/_post-categories.module.scss"
import Link from 'next/link'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsfiddle } from '@fortawesome/free-brands-svg-icons'

const PostCategories = ({ categories }: { categories: any }) => {
  const jsIcon: IconDefinition = faJsfiddle;
  return (
    <div>
    <h3 className={styles.heading}>
      <FontAwesomeIcon icon={jsIcon} />
      </h3>
    <ul className={styles.list}>
      {categories.map(({name, slug}: any) => (
        <li key={slug}>
          <Link href="/">
            <p>{name}</p>
          </Link>
        </li>
      ))}
    </ul>
    </div>
  )
}

export default PostCategories
