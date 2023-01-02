import React from 'react'
import { NavLinks } from './NavLinks'
import styles from '../../../styles/components/Layout/Navbar.module.css'
import {RxHamburgerMenu} from 'react-icons/rx'
import { useState } from 'react'

export const MobileNavigation = () => {

  const [open, setOpen] = useState(false)


  return (
    <nav className={styles.mobilenavigation}>
      <div className={styles.nav_hamburger}>
      <RxHamburgerMenu className={styles.hamburger} 
      onClick={() => setOpen(!open)}
      />
      </div>
      <div className={styles.nav_links}>
      {open && <NavLinks />}
      </div>
    </nav>
  )
}
