import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'
import styles from "@/styles/_pagenation.module.scss"

const PageNation = ({
  prevText = "",
  prevUrl = "",
  nextText = "",
  nextUrl = ""
}) => {
  const ChevronLeftIcon: IconDefinition = faCircleChevronLeft;
  const ChevronRightIcon: IconDefinition = faCircleChevronRight;
  return (
    <ul className={styles.flexContainer}>
      {prevText && prevUrl && (
        <li className={styles.prev}>
          <Link href={prevUrl}>
            <p className={styles.iconText}>
              <FontAwesomeIcon icon={ChevronLeftIcon} color="var(--gray-50)"/>
              <span>{prevText}</span>
            </p>
          </Link>
        </li>
      )}
      {nextText && nextUrl && (
        <li className={styles.next}>
          <Link href={nextUrl}>
            <p className={styles.iconText}>
            <span>{nextText}</span>
            <FontAwesomeIcon icon={ChevronRightIcon} color="var(--gray-50)"/>
            </p>
          </Link>
        </li>
      )}
    </ul>
  )
}

export default PageNation
