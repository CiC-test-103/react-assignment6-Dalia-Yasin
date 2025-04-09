import React from 'react';
import styles from './ArticlePreview.module.css';
import SocialShare from '../SocialShare/SocialShare'; 
import drawers from "../../../images/drawers.jpg";
import avatar from '../../../images/avatar-michelle.jpg';

function ArticlePreview() {
  return (
    <article className={styles.preview}>
      {/* Image section */}
      <div className={styles.imageWrapper}>
        <img src={drawers} alt="Green drawers" className={styles.drawersImage} />
      </div>

      {/* Content on the right */}
      <section className={styles.content}>
        <h2 className={styles.title}>
          Shift the overall look and feel by adding these wonderful touches to furniture in your home
        </h2>
        <p className={styles.description}>
          Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. 
          I’ve got some simple tips to help you make any room feel complete.
        </p>

        {/* Footer container for author info and share button */}
        <div className={styles.footerRow}>
          <div className={styles.authorInfo}>
            {/* Avatar inside the authorInfo container */}
            <img src={avatar} alt="Avatar of Michelle" className={styles.authorAvatar} />
            <div className={styles.authorDetails}>
              <span className={styles.author}>Michelle Appleton</span>
              <span className={styles.date}>28 Jun 2020</span>
            </div>
          </div>

          {/* The SocialShare component */}
          <SocialShare className={styles.shareIcon} />
        </div>
      </section>
    </article>
  );
}

export default ArticlePreview;