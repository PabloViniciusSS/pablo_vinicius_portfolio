import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Icone from '../../../public/icone.png'
import styles from '../../../styles/components/Layout/Navbar.module.css'

export const LogoMobile = () => {
  return (
    <Link href="/" ><Image src={Icone} className={styles.logomobile}/></Link>
  )
}
