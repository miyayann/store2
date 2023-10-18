import React from 'react'
import styles from "@/styles/_post-header.module.scss"
import { PostHeader } from '../../../type'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlaystation} from '@fortawesome/free-brands-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import ConvertDate from '../parts/convert-date';

const PostHeader = ({title, subtitle, publish = ""}: PostHeader) => {
  const PlayStationIcon: IconDefinition = faPlaystation;
  return (
    <div className={styles.stack}>
      <p className={styles.subtitle}>{subtitle}</p>
      <h1 className={styles.title}>{title}</h1>
      {publish && <div className={styles.publish}>
      <FontAwesomeIcon icon={PlayStationIcon} size='lg' color='var(--gray-25)' />
        <ConvertDate dateISO={publish} />
        </div>}
    </div>
  )
}

export default PostHeader
