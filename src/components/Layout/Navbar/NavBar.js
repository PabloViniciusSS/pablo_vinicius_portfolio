import React from 'react'
import styles from '../../../styles/components/Layout/Navbar.module.css'
import { Logo } from './Logo'
import { MobileNavigation } from './MobileNavigation'
import { Navigation } from './Navegation'

export const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.nav}>
        <MobileNavigation />
        <Navigation />
      </div>
    </div>
  )
}
