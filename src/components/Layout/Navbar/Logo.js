import Link from 'next/link'
import React from 'react'
import styles from '../../../styles/components/Layout/Navbar.module.css'
import Image from 'next/image';

export const Logo = () => {
  return (
    <Link href="/" >    <img src='/Nome.png' className={styles.logo}/>
    </Link>
  )
}
