import React, { useRef, useState } from 'react'
import styles from "@/styles/_accordion.module.scss"
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons'

const Accordion = ({heading, children}: any) => {
  const [openText, setOpenText] = useState(false)
  const ChevronDownIcon: IconDefinition = faCircleChevronDown;

  const toggleText = () => {
    setOpenText((prev) => !prev)
  }

  const refText = useRef<HTMLDivElement>(null)

  return (
    <div className={openText ? styles.open : styles.close}>
      <h3 className={styles.heading}>
        <button onClick={toggleText}>
          {heading}
          <FontAwesomeIcon icon={ChevronDownIcon} className={styles.icon}/>
        </button>
      </h3>
      <div ref={refText} className={styles.text} style={{['--text-height' as string | number]: refText.current ? `${refText.current.scrollHeight}px`: '0px',}}>
        <div className={styles.textInner}>{children}</div>
      </div>
    </div>
  )
}

export default Accordion