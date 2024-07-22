// components/Header.js
import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        {/* Placeholder for DUCK logo */}
        <div className={styles.logoPlaceholder}>Logo</div>
      </div>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/how-to-earn">How to Earn</Link>
        <Link href="/leaderboard">Leaderboard</Link>
        <Link href="/community">Community</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <div className={styles.socialIcons}>
        {/* Placeholder for social media icons */}
        <div className={styles.iconPlaceholder}>FB</div>
        <div className={styles.iconPlaceholder}>TW</div>
        <div className={styles.iconPlaceholder}>IG</div>
      </div>
    </header>
  );
};

export default Header;