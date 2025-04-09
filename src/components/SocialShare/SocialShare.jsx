import React, { useState } from 'react';
import styles from './SocialShare.module.css';
import share from '../../../images/icon-share.svg';
import facebook from '../../../images/icon-facebook.svg';
import twitter from '../../../images/icon-twitter.svg';
import pinterest from '../../../images/icon-pinterest.svg';


const SocialShare = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={styles.shareContainer}>
      <button 
        className={styles.shareButton} 
        onClick={() => setIsVisible(!isVisible)}
        aria-label="Share"
      >
        <img 
          src={share}
          alt="Share" 
          className={`${styles.arrowIcon} ${isVisible ? styles.arrowIconActive : ''}`}
        />
      </button>
      
      <ul className={`${styles.iconList} ${isVisible ? styles.visible : ''}`}>
        <li>
          <a href="#" className={styles.icon}>
            <img src={facebook} alt="Facebook" />
          </a>
        </li>
        <li>
          <a href="#" className={styles.icon}>
            <img src={twitter} alt="Twitter" />
          </a>
        </li>
        <li>
          <a href="#" className={styles.icon}>
            <img src={pinterest} alt="Pinterest" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialShare;