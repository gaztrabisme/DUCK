// components/Footer.js
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLinks}>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-service">Terms of Service</a>
          <a href="/faq">FAQ</a>
        </div>
        <div className={styles.contactInfo}>
          <p>Contact us at: contact@ducktoken.com</p>
        </div>
        <div className={styles.socialIcons}>
          {/* Placeholder for social media icons */}
          <div className={styles.iconPlaceholder}>FB</div>
          <div className={styles.iconPlaceholder}>TW</div>
          <div className={styles.iconPlaceholder}>IG</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;