import React from 'react'
import styles from "@/styles/_sicial.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebookF,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { IconProps } from '@/../../type';

const Social = ({ iconSize = "initial" }: IconProps) => {
  const twitterIcon: IconDefinition = faTwitter;
  const facebookIcon: IconDefinition = faFacebookF;
  const githubIcon: IconDefinition = faGithub;
  return (
    // style={{ fontSize: iconSize}} 
    <ul className={styles.list}>
      <li>
        <a href="">
          <FontAwesomeIcon icon={twitterIcon} />
          <span className="sr-only">Twitter</span>
        </a>
      </li>
      <li>
        <a href="">
          <FontAwesomeIcon icon={facebookIcon} />
          <span className="sr-only">Facebook</span>
        </a>
      </li>
      <li>
        <a href="">
          <FontAwesomeIcon icon={githubIcon} />
          <span className="sr-only">github</span>
        </a>
      </li>
    </ul>
  )
}

export default Social;
